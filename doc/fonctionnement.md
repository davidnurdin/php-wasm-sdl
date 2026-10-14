# Comment ça fonctionne

## Les couches

```
┌──────────────────────────── navigateur (thread principal) ──────────────────────────────┐
│ index.html  ── loader.js (SonicLoader)                                                  │
│   │ 1. fetch php-web.wasm (progression)                                                 │
│   │ 2. createPhpModule({ canvas, wasmBinary, setStatus, print, printErr })              │
│   │      └─ php-web.data.js (injecté) : télécharge php-web.data → FS virtuel /src       │
│   │ 3. monte IDBFS sur /src/src/var + FS.syncfs(true)    (sauvegardes)                  │
│   │ 4. ccall('phpw_run', code PHP du <textarea id="php">)                               │
│   ▼                                                                                     │
│ php-web.wasm                                                                            │
│   phpw.c ── php_embed_init ── zend_eval_string(code)                                    │
│                │                    └─ include app.php → Symfony DI → Game::run()       │
│                │                         (init SDL, textures, sons, timers ReactPHP)    │
│                └─ emscripten_set_main_loop(main_loop)  ← requestAnimationFrame           │
│                   emscripten_async_call(update_events_loop, 0)  ← setTimeout(0)        │
│                         │                                                               │
│                         └─ sdl_frame($app) / sdl_update_events($app)                    │
│                              └─ $app->game->gameLoop->start(1)  : UN tick ReactPHP      │
│   SDL2 (port emscripten) ── WebGL sur <canvas id="canvas">, Web Audio, événements DOM   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

## phpw.c : la glue C

`phpw_run(code)` (seule fonction appelée depuis le JS) :

1. `php_embed_init` démarre PHP (SAPI embed, sans CLI) ;
2. `zend_eval_string(code)` exécute le code PHP de la page. Celui-ci définit `sdl_frame($app)` et
   `sdl_update_events($app)` puis fait `$app = include '/src/src/app.php'`. `app.php` construit le
   container Symfony, lance la commande par défaut (`Game::run()` : init SDL, chargement des
   textures et des sons, enregistrement des timers ReactPHP) et **retourne** la commande. Comme
   `$app->game` est public, le C et le PHP de la page y ont accès ;
3. le C récupère les deux fonctions PHP (`zend_fcall_info_init`) et `$app` dans la table des symboles
   globale ;
4. il branche deux boucles navigateur :
   - `emscripten_async_call(update_events_loop, NULL, 0)` : se ré-arme en continu (setTimeout 0) et
     appelle `sdl_update_events($app)` ;
   - `emscripten_set_main_loop(main_loop, 0, 1)` : appelle `sdl_frame($app)` à chaque
     `requestAnimationFrame` (fréquence de l'écran).
5. `simulate_infinite_loop=1` : `emscripten_set_main_loop` ne revient jamais, il lève `"unwind"` pour
   rendre la main au navigateur. `php_embed_shutdown()` n'est donc **jamais** appelé : PHP, ses
   objets et ses ressources SDL restent vivants entre les frames.

Côté JS, `ccall('phpw_run')` se termine donc par l'exception `"unwind"` : c'est le **cas normal**.
`index.html` l'attrape. Si `phpw_run` revient sans exception, c'est que la boucle n'a pas démarré
(exception PHP au boot, `$app` introuvable…) et le loader passe en écran d'erreur.

## La boucle de jeu (ReactPHP)

Le jeu est écrit pour le natif : `Game::run()` enregistre des timers (`addPeriodicTimer(1/120)` pour
la logique et le rendu, `addPeriodicTimer(1)` pour l'affichage des FPS), puis `DefaultCommand`
lance `Loop::get()->run()`, une **boucle infinie bloquante**.

En wasm, on ne peut pas bloquer le thread : le navigateur ne peindrait plus rien. La page met donc
en file, **avant** l'`include` d'`app.php` :

```php
\React\EventLoop\Loop::get()->futureTick(fn() => \React\EventLoop\Loop::get()->stop());
```

`Loop::run()` exécute ce tick au premier tour, s'arrête et rend la main. Ensuite chaque appel de
`sdl_frame()` / `sdl_update_events()` fait `gameLoop->start(1)` : un seul tour de boucle ReactPHP,
qui exécute les timers arrivés à échéance. Le jeu n'a pas besoin d'être modifié et le même code
tourne en natif.

`GameLoop::start($maxTicks)` (dans le jeu) planifie un `futureTick` qui stoppe la boucle après
`$maxTicks` tours, puis appelle `$loop->run()`.

## Le rendu et le canvas

- Le port emscripten de SDL2 dessine en WebGL dans `<canvas id="canvas">` (passé via
  `Module.canvas`) et lit clavier/souris/tactile sur le DOM.
- Le jeu crée une fenêtre 840×426 avec `SDL_WINDOW_RESIZABLE` et dessine dans une texture de rendu,
  puis la copie à l'échelle (letterbox) selon `SDL_GetRendererOutputSize`.
- **Piège** : avec `SDL_WINDOW_RESIZABLE`, SDL2-emscripten prend la **taille CSS** du canvas comme
  taille de fenêtre. L'ancienne page mettait `zoom: 3` sur le canvas, sans taille CSS : SDL lisait
  une taille faussée et le canvas finissait en 3×3 px (le TODO « voir pk marche pas en web » de
  `Window.php`). La page donne maintenant une taille CSS explicite au canvas
  (`width: min(100%, …)` + `aspect-ratio: 840 / 426`) et ne met plus de `zoom`.

## Le système de fichiers

| Chemin wasm | Origine | Persistant |
|---|---|---|
| `/src/…` | `php-web.data` (paquet file_packager de `demo/src`), en mémoire (MEMFS), modifiable | non |
| `/src/src/` | le jeu (`demo/src/src`) | non |
| `/src/src/var/` | **IDBFS** (IndexedDB du navigateur) | **oui** |
| `/tmp`, `/home/web_user` | MEMFS par défaut d'emscripten | non |

### Sauvegardes (IDBFS)

Le jeu écrit ses fichiers utilisateur dans `var/` (`dirname(__DIR__)/var`) :
`var/options.json` (ghost, cheats, niveau de départ), `var/besttimes.json` (meilleurs temps),
`var/ghosts/level{N}.json.gz` (fantômes). Dans `index.html` :

```js
FS.mkdirTree('/src/src/var');
FS.mount(FS.filesystems.IDBFS, {}, '/src/src/var');
await syncfs(true);                       // IndexedDB -> FS, AVANT de lancer PHP
setInterval(window.saveUserFiles, 2000);   // FS -> IndexedDB (seuls les fichiers modifiés)
addEventListener('pagehide', window.saveUserFiles);
document.addEventListener('visibilitychange', () => document.hidden && window.saveUserFiles());
```

- PHP écrit normalement (`file_put_contents`, `mkdir`) : IDBFS se comporte comme MEMFS en mémoire, la
  synchro vers IndexedDB est faite par le JS.
- La base IndexedDB porte le nom du point de montage (`/src/src/var`). Elle est propre à l'origine
  (`http://127.0.0.1:8081` ≠ GitHub Pages).
- Pour effacer les sauvegardes : DevTools → Application → IndexedDB → `/src/src/var`, ou
  `indexedDB.deleteDatabase('/src/src/var')`.
- Pour forcer une sauvegarde depuis la console : `saveUserFiles()`.
- `var/` est exclu de la synchro du jeu : les sauvegardes natives ne sont pas embarquées.
- Une autre base IndexedDB (`EM_PRELOAD_CACHE`) contient le cache de `php-web.data`
  (`--use-preload-cache`).

### Images trop larges

Les textures WebGL/SDL sont limitées en largeur. `SdlImage::loadImage()` (dans le jeu) découpe toute
image de plus de **4064 px** (`floor(4096 / 32) * 32`) en tranches `nom-0.png`, `nom-1.png`… avec GD,
les écrit à côté de l'image d'origine, puis les charge comme plusieurs textures. Si toutes les
tranches existent déjà, elles sont réutilisées telles quelles, même si l'image d'origine a changé.

`sync-game.sh` supprime donc ces tranches pour que le jeu les régénère à partir des images à jour
(dans le FS mémoire du wasm). C'est la raison de la présence de GD dans le moteur, et de la ligne
`rm .../tileset*-*.*` de l'ancien `go.sh`. Mesure : embarquer les tranches pré-générées ne fait gagner
presque rien au démarrage (~1 s sur ~16 s en rendu logiciel), le temps de boot est dominé par la
création des textures.

## Le loader (`loader.js`)

Script classique inclus en haut de `<body>` : il injecte son CSS et son DOM (ciel, nuages, anneau
qui tourne, « LOADING » avec la police du jeu, compteur « RINGS », sol en damier qui défile) et
expose `window.SonicLoader` :

| Méthode | Effet |
|---|---|
| `progress(ratio, label?)` | Barre et compteur (0 à 1, ne recule jamais) |
| `status(text)` | Texte sous la barre |
| `step(from, to)` | Renvoie `fn(ratio)` qui mappe 0..1 sur [from, to] : pratique pour une étape |
| `hide()` | Masque le loader (fondu) |
| `show()` | Le réaffiche |
| `error(message)` | Écran « GAME OVER » avec le message |
| `onHide(fn)` | Callback après le masquage |

Équivalent à `hide()` : `window.dispatchEvent(new Event('sonic:ready'))`.

Découpage de la progression dans `index.html` :

| Plage | Étape | Source de la progression |
|---|---|---|
| 0 → 40 % | téléchargement de `php-web.wasm` | `fetch` en streaming, passé à emscripten via `wasmBinary` |
| 40 → 90 % | téléchargement de `php-web.data` | `Module.setStatus("Downloading data... (reçu/total)")` émis par php-web.data.js |
| 92 % | restauration des sauvegardes | `FS.syncfs(true)` |
| 95 % | démarrage de PHP (`phpw_run`, synchrone) | — (le thread est bloqué, la page est peinte juste avant) |
| 100 % | après 2 frames de la boucle principale | `SonicLoader.hide()` |

Pour masquer le loader à un autre moment (par exemple quand le jeu a fini un écran d'intro), retirez
l'appel `loader.hide()` de la fin de `main()` dans `index.html` et appelez `SonicLoader.hide()` (ou
envoyez l'événement `sonic:ready`) à l'endroit voulu.

La console affiche les temps de chaque étape : `[boot] wasm téléchargé`, `runtime prêt`,
`sauvegardes restaurées`, `PHP démarré`, `première frame`.

## Mobile et tablette (`mobile.js`)

`mobile.js` est inclus juste après `loader.js`, **avant** le lancement du wasm : la classe
`html.is-mobile` doit donner sa taille au canvas avant que SDL crée sa fenêtre. Détection : écran
tactile + pointeur grossier ou user-agent mobile (iPadOS se déclare « Mac » : on regarde
`maxTouchPoints`). Pour forcer le mode : `?mobile=1` ou `?mobile=0` dans l'URL.

Uniquement en mode mobile :

- le canvas occupe tout l'écran (`100vw × 100dvh`), le texte et la zone de debug sont masqués, le zoom
  par pincement et le défilement sont bloqués ;
- **vue Master System** : le code PHP de la page reçoit `define('SONIC_MOBILE', true)` (préfixé par le
  JS) et active `Game::$smsView` (vue 256×192 agrandie à l'écran, comme la touche `*` du pavé
  numérique) avec une closure liée : `(fn() => $this->smsView = true)->call($app->game)` ;
- quand le jeu est prêt (`SonicMobile.start()`), l'écran **« TOUCHE POUR JOUER »** s'affiche : le
  navigateur n'accorde le plein écran qu'en réponse à un geste. Au toucher : `requestFullscreen()`
  puis `screen.orientation.lock('landscape')`. Si on quitte le plein écran, l'écran revient ;
- si le verrouillage en paysage est impossible et que l'appareil est en portrait :
  **« TOURNE TON APPAREIL »**.

| Plateforme | Plein écran | Verrouillage paysage |
|---|---|---|
| Android (Chrome, Firefox, Samsung Internet) | oui | oui (une fois en plein écran) |
| iPad (Safari) | oui (`webkitRequestFullscreen`) | non : écran « tourne ton appareil » |
| iPhone (Safari) | non (API absente) : la page occupe l'écran ; via « Sur l'écran d'accueil », l'app s'ouvre sans barre | non : écran « tourne ton appareil » |

Le `manifest.webmanifest` (`display: fullscreen`, `orientation: landscape`) fait que le jeu, ajouté à
l'écran d'accueil sur Android, s'ouvre directement en plein écran et en paysage.

### Commandes tactiles

Elles sont gérées en PHP par `InputTouchpad` (événements `SDL_FINGER*` du port emscripten de SDL2) :

| Où | Geste | Effet |
|---|---|---|
| Menus, démo, saisie du nom | tap | Entrée (valider / passer la démo) |
| | glisser haut / bas / gauche / droite | flèche correspondante (une case par glissé, relever le doigt entre deux) |
| En jeu | glisser à gauche / à droite et maintenir | courir |
| | tap | sauter |
| | 2e doigt glissé vers le bas | rouler |

Les menus passent par `patches/game/20-touch-menus.patch` (voir compilation.md).

## Balises de la page

`index.html` contient : titre et description, Open Graph / Twitter (`assets/og-image.png`, 1200×630),
`theme-color`, balises d'application web Android / iOS (`mobile-web-app-capable`,
`apple-mobile-web-app-*`, `apple-touch-icon`), le manifest, et des données structurées schema.org
`VideoGame` (plateformes : navigateur, ordinateur, Android, iPhone, iPad).

## Particularités du PHP wasm

- **Entiers 32 bits** (`PHP_INT_MAX = 2147483647`, `PHP_INT_SIZE = 4`) : wasm32. Voir le patch
  `10-int32-microtime.sh`. Les floats restent en 64 bits.
- `PHP_OS` vaut `Linux` (valeur de `configure`) : on ne peut pas s'en servir pour détecter le wasm.
- Pas d'opcache ni de JIT : le PHP est interprété.
- Pas de threads, de processus (`exec`, `proc_open`), de signaux ni de sockets.
- `echo` va dans `Module.print` (console + zone de debug), les erreurs C dans `printErr`.
- Un appel bloquant (`sleep`, boucle infinie) gèle l'onglet : tout doit passer par la boucle.
- La mémoire démarre à 256 Mo et peut grandir jusqu'à 2 Go.
