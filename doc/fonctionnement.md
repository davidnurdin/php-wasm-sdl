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
   `sdl_update_events($app)` (vide, gardée pour les anciens moteurs), les constantes `SONIC_MOBILE` et
   `SONIC_FRAME_INTERVAL`, puis fait `$app = include '/src/src/app.php'`. `app.php` construit le
   container Symfony, lance la commande par défaut (`Game::run()` : init SDL, chargement des
   textures et des sons, enregistrement des timers ReactPHP) et **retourne** la commande. Comme
   `$app->game` est public, le C et le PHP de la page y ont accès ;
3. le C récupère les deux fonctions PHP (`zend_fcall_info_init`) et `$app` dans la table des symboles
   globale ;
4. il branche **une seule** boucle navigateur : `emscripten_set_main_loop(main_loop, 0, 1)` appelle
   `sdl_frame($app)` à chaque `requestAnimationFrame` (fréquence de l'écran).

   Il y en avait une deuxième, `emscripten_async_call(update_events_loop, NULL, 0)` (setTimeout 0,
   ~250 appels/s), qui appelait `sdl_update_events($app)` → `gameLoop->start(1)` : le jeu tournait
   aussi entre deux images, jusqu'à 2 images de jeu (logique **et** rendu) par image affichée. Le
   thread principal était saturé : tactile, clavier et audio passaient après. Elle est supprimée du
   moteur, et `sdl_update_events()` ne fait plus rien pour les moteurs déjà compilés.
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
`sdl_frame()` fait `gameLoop->start(1)` : un seul tour de boucle ReactPHP, qui exécute les timers
arrivés à échéance. Le même code tourne en natif.

Le timer de l'image vaut 1/120 s en natif (la vsync cadence). La page définit
`SONIC_FRAME_INTERVAL = 0.01` : une image de jeu à chaque `requestAnimationFrame`, 100 au plus par
seconde (un écran 120 Hz fait une image de jeu sur deux, au lieu d'un rythme irrégulier).

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

## Performances (navigateur)

Mesuré avec le profiler de Chrome (CDP `Profiler.start`) et une instrumentation `microtime()` temporaire
(temps de logique, scène, overlay, présentation par image) :

| Problème | Effet | Correction |
|---|---|---|
| `glCheckFramebufferStatus` à chaque `SDL_SetRenderTarget` (SDL GLES2) | **65 % du temps CPU** : appel WebGL bloquant, le navigateur attend la fin du travail du GPU, CPU et GPU ne travaillent plus en parallèle | `index.html` remplace `checkFramebufferStatus` par une fonction qui répond `FRAMEBUFFER_COMPLETE` (nos cibles sont toujours des textures RGBA complètes) |
| Deuxième boucle `update_events_loop` (voir phpw.c) | jusqu'à 2 images de jeu par image affichée, thread saturé (tactile et son en retard) | supprimée |
| ~400 blocs redessinés à chaque image (`Scene::drawTiles`) | ~5 ms de PHP par image | les blocs autour de la vue (3 de marge) sont gardés dans une texture par palette (`tileCaches`) ; ils ne sont redessinés que si la vue sort de la zone ou qu'un bloc change (`Level::getVersion()`). L'image copie une texture, puis les anneaux et les blocs prioritaires |
| Textes du menu avec contour (`TextRenderer::drawStyled`) : 37 copies par lettre | ~6 ms par image au menu | un texte redessiné à l'image suivante est gardé dans une texture (48 au plus) |
| Les blocs des 35 niveaux chargés au démarrage (282 PNG, ~200 Mo de textures, certains plusieurs fois) | démarrage long (~20 s de PHP), mémoire GPU saturée sur mobile | `Sdl::registerTexture()` : textures enregistrées sans être chargées ; `LevelManager` charge celles du niveau joué et libère les autres ; un fichier partagé par plusieurs niveaux n'est chargé qu'une fois |
| Événement `collisionTile` émis à chaque pas de physique (vue de debug) | coût pour Sonic et chaque bot | émis seulement en mode debug (`CollisionSystem::$reportTiles`) |
| Recherche du sol pixel par pixel dans les 32 lignes du bloc | coût par capteur et par pas | première ligne solide de chaque colonne gardée par bloc (`Level::getTileTopAt`) |
| Zone de debug de la page réécrite à chaque ligne (texte sans fin) | page de plus en plus lente | 200 dernières lignes, réécrites au plus 2 fois par seconde |

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

**Fluidité** : `phpw_run` (le démarrage de PHP) bloque le thread principal plusieurs secondes. Toutes
les animations du loader n'utilisent que `transform` (calques promus avec `will-change`) : le
compositeur du navigateur les joue sans le thread principal, donc elles ne se figent pas. Les nuages
et le damier sont des bandes plus larges qui glissent, les rayures de la barre aussi. La barre de
progression est rayée sur toute sa largeur, et un cache coulisse vers la droite avec
`translateX(pct%)`. Une animation de `background-position` ou une transition de `width`
s'arrêteraient pendant le démarrage : la barre restait alors à moitié remplie, alors que le compteur
affichait 95 %.

## Mobile et tablette (`mobile.js`)

`mobile.js` est inclus juste après `loader.js`, **avant** le lancement du wasm : la classe
`html.is-mobile` doit donner sa taille au canvas avant que SDL crée sa fenêtre. Détection : écran
tactile + pointeur grossier ou user-agent mobile (iPadOS se déclare « Mac » : on regarde
`maxTouchPoints`). Pour forcer le mode : `?mobile=1` ou `?mobile=0` dans l'URL.

Uniquement en mode mobile :

- le canvas occupe tout l'écran (`100vw × 100dvh`), le texte et la zone de debug sont masqués, le zoom
  par pincement et le défilement sont bloqués ;
- **vue ~192 px de haut, pleine largeur** : le code PHP de la page reçoit `define('SONIC_MOBILE', true)`
  (préfixé par le JS) et fait `$app->game->viewHeight = 192` (au lieu de 426, propriété ajoutée par
  `patches/game/30-view-height-fps.patch`). Le zoom automatique vise cette hauteur (gros sprites, comme
  sur Master System) et la vue garde le ratio de l'écran : des tuiles jusqu'aux bords, pas de bandes
  noires. Les touches `+` / `-` / `*` du pavé numérique restent utilisables ;
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

### Commandes à l'écran (`controls.js`)

Les gestes et les boutons sont convertis **en vrais événements clavier** (`KeyboardEvent` avec
`keyCode`, envoyés au canvas) : SDL les reçoit comme une touche réelle et le jeu applique exactement sa
logique clavier (saut à hauteur variable, roulade, menus, saisie du nom), sans aucun code tactile côté
PHP. Une couche transparente couvre le canvas en mode mobile : les événements tactiles n'atteignent plus
SDL (`InputTouchpad` ne sert plus dans le navigateur).

| Geste | Touche | Effet |
|---|---|---|
| glisser gauche / droite (≈ 12 px suffisent) et garder le doigt posé | ← / → | courir (choix dans les menus) |
| glisser franchement bas / haut (≈ 28 px, d'un geste) | ↓ / ↑ | rouler ou s'accroupir / regarder en haut (navigation dans les menus) |
| tap | Espace | sauter, valider dans les menus, passer la démo |
| doigt sur la **croix dessinée** (bas gauche) | ← → ↑ ↓ selon le bras | comme une vraie croix : le bras sous le doigt (bas / haut seulement dans le quart vertical) ; le bras enfoncé s'allume |
| bouton **A** (bas droite) ou 2e doigt n'importe où | Espace maintenu | saut immédiat, plus haut si on reste appuyé |

La croix et le bouton A sont dessinés pour montrer qu'on joue à deux mains. Ailleurs sur l'écran,
la croix est « flottante » : son centre est l'endroit où le doigt se pose, et il suit le doigt au-delà
de 24 px. Repartir dans l'autre sens ne demande donc que ~36 px, quelle que soit la longueur du glissé
précédent. Un axe n'est pris en compte que s'il n'est pas dominé par l'autre (un glissé vers le bas
dans un menu ne déclenche pas → en plus). Une touche enfoncée ne se relâche qu'en revenant près du
centre (hystérésis) : pas de clignotement. Le vertical est volontairement moins sensible : tant que
↓/↑ n'est pas enfoncé, le centre vertical rattrape lentement le doigt (8 % de l'écart à chaque
mouvement). La dérive du pouce pendant qu'on court est absorbée et ne déclenche pas de roulade par
erreur, alors qu'un vrai glissé vers le bas la déclenche. Un petit cercle montre le centre et la position du doigt.

**Bouton ESC** (touche Échap, keyCode 27) : quitte la partie et revient au menu ; dans un menu, revient à
la page précédente. Mobile : en haut au centre, à gauche de DEBUG ; ordinateur : dans la barre sous le jeu.

**Pad de debug** (ordinateur : sous le canvas ; mobile : bouton **DEBUG** en haut au centre) : boutons
8 4 6 2 (caméra libre, maintenus = déplacement continu), 5 (Sonic suit la caméra), F3 / F4 (niveau
précédent / suivant), F6 (panneau coordonnées + **FPS**). Utile aussi sur un portable sans pavé
numérique. Depuis la console : `SonicControls.key('f6', true)` puis `SonicControls.key('f6', false)`.

**Plein écran sur ordinateur** : bouton **PLEIN ECRAN** de la barre sous le jeu, ou double-clic sur
le jeu (Échap pour sortir). Le canvas passe en plein écran et SDL suit sa nouvelle taille CSS : plus de
tuiles, sprites plus gros.

## Options du jeu (menu OPTIONS)

Elles sont sauvegardées dans `var/options.json`, donc dans IndexedDB côté navigateur.

| Option | Effet |
|---|---|
| **FILTRE CRT** ON / OFF | `Renderer/CrtFilter.php` : lignes de balayage (le bas de chaque ligne du jeu assombri) et coins assombris, dessinés sur l'image agrandie. Ce sont deux surfaces RGBA converties en textures, ce qui les rend transparentes : l'extension n'a ni `SDL_SetTextureBlendMode` ni `SDL_SetRenderDrawBlendMode`. Elles sont recréées seulement quand la taille change |
| **VITESSE** PAL 50HZ (défaut) / NTSC 60HZ | La Master System européenne affiche 50 images/s, et Sonic (même ROM partout) fait une image de logique par image affichée. Toute la partie (Sonic, ennemis, animations, chrono du jeu) tourne donc à 50/60 = 83 % de la vitesse NTSC. Le jeu multiplie le temps de chaque frame par ce facteur. Records et ghosts restent comparables, car ils sont en temps de jeu. La musique n'est pas ralentie |

## Multijoueur (menu MULTIJOUEUR)

Contre des Sonic pilotés par l'ordinateur, sur un acte au choix (actes 1 et 2 de chaque zone). L'acte
est chargé **sans badniks ni panneau de fin** (`GameObjectManager::$noEnemies`) ; les pièges (piques,
canons...) restent. Le jeu en réseau est à faire : voir [`TODO-multijoueur-reseau.md`](../TODO-multijoueur-reseau.md).

| Mode | Sonic | Règles |
|---|---|---|
| **COURSE** | 2 à 5 | Le premier à la ligne d'arrivée (damier, à la place du panneau de fin) gagne. Quand un Sonic arrive, les autres ont encore 30 s |
| **DRAPEAU** | 3 bleus contre 3 rouges | Tout le monde apparaît au hasard. Après le compte à rebours, un drapeau apparaît au sol, loin des joueurs. La première équipe qui le touche gagne (3 min au maximum) |
| **ANNEAUX** | 2 à 5 | 3 min. Chaque anneau ramassé ou perdu réapparaît 1,5 s plus tard à un emplacement d'anneau vide de l'acte. Le plus d'anneaux gagne (pas de vie à 100, le compteur continue) |
| **DEATHMATCH** | 2 à 5 | 3 min. Le plus de K.O. gagne, à égalité le moins de morts |

**Contacts entre Sonic** : un Sonic qui saute ou roule (ou invincible) et touche un adversaire qui ne
le fait pas le blesse. La victime perd ses anneaux et clignote 2 s. Sans anneaux, elle est K.O. : en
course, elle repart du début ; en drapeau et en deathmatch, elle réapparaît ailleurs ; en mode anneaux,
elle est seulement repoussée. Deux attaquants rebondissent l'un sur l'autre. En drapeau, seuls les
joueurs de l'équipe adverse peuvent se blesser. Les morts « normales » (trou, piques) suivent les
règles du jeu, avec des vies infinies.

**Code** (`src/Multiplayer/`) :

- `Versus` : la partie. Il gère le compte à rebours, la simulation des bots (même physique et même
  `CollisionSystem` que Sonic, par pas de 1/60 s au plus), les contacts, les anneaux, les règles des modes,
  les scores et les résultats. Il dessine aussi les autres Sonic et le drapeau dans la vue
  (`Scene::$worldOverlay`), puis, en pixels de fenêtre, les noms, les repères en bord d'écran, les scores,
  le compte à rebours et les résultats.
- `Rival` : un participant. Le joueur humain utilise le `Player` du jeu ; ses anneaux, ses coups et ses
  morts passent par `GameObjectManager`. Chaque bot a son propre `Player`.
- `BotBrain` : la manette d'un bot. Il va vers sa cible : la ligne d'arrivée, le drapeau, l'anneau le plus
  proche ou l'adversaire le plus proche. Il saute devant un mur, un trou ou une cible en hauteur, et
  attaque un adversaire vulnérable. Il recule devant un adversaire qui attaque. S'il est coincé, il fait
  d'abord un saut plus haut, puis il est replacé : sur le chemin pris par le joueur en course, près de sa
  cible dans les autres modes. Son niveau (de 0,76 à 0,94) le fait hésiter de temps en temps.
- Les bots sont dessinés avec des planches recolorées : `assets/tileset/sprites/tileset-sonic-<couleur>.png`,
  générées par `tools/soniccolors.py`. L'extension SDL n'a pas `SDL_SetTextureColorMod`.
- Les bots ignorent les moniteurs et les ressorts. Ils marchent sur les plateformes, grâce au même
  `findObjectGround`.

**Performances et son** (le multijoueur coûte environ 5 ms de plus par frame que le jeu seul) :

- bots simulés par pas de 1/60 s (Sonic : 1/120 s), au plus 4 pas par frame ;
- anneau visé par un bot recherché deux fois par seconde seulement (et dès qu'il est pris) ; détection
  des trous par sondes tous les 8 px ;
- largeurs de texte mémorisées (`TextRenderer::width`) pour les scores redessinés à chaque frame ;
- un même bruitage de `Versus` n'est rejoué qu'une fois toutes les 0,15 s (anneaux et rebonds des bots :
  plus de « double son ») ;
- tampon audio de 2048 échantillons (46 ms, `Mix_OpenAudio`) : dans le navigateur, le mixeur est
  alimenté entre deux frames ; avec 1024, une frame lente vidait le tampon et le son ralentissait.

Côté navigateur, rien de spécial : les commandes tactiles et clavier pilotent le Sonic du joueur, et le
bouton de saut (tap) ferme l'écran des résultats.

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
