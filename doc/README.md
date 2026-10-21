# php-wasm-sdl — documentation

Ce projet fait tourner un **interpréteur PHP 8.3 compilé en WebAssembly**, avec les extensions
**SDL2, SDL2_image, SDL2_mixer, SDL2_ttf et GD**, dans un navigateur. La démo est un jeu Sonic écrit
en PHP pur ([sonicGamePhp](https://github.com/davidnurdin/sonicGamePhp)) : le **même code PHP** tourne
en natif (`php -d extension=sdl.so ... app.php`) et dans Chrome.

| Document | Contenu |
|---|---|
| [compilation.md](compilation.md) | Compiler toute la chaîne de A à Z : moteur wasm, synchro du jeu, packaging, déploiement |
| [fonctionnement.md](fonctionnement.md) | Comment ça marche à l'exécution : C ↔ PHP ↔ JS, boucle de jeu, loader, sauvegardes, pièges wasm |
| [../TODO-multijoueur-reseau.md](../TODO-multijoueur-reseau.md) | Note de travail : le multijoueur en réseau (à faire) |

## Démarrage rapide

```bash
# tout refaire : synchro du jeu + compilation du moteur (~25 min à froid) + packaging + serveur
./all.sh

# cas courant : le jeu a changé, pas le moteur
SKIP_ENGINE=1 ./all.sh                     # -> http://127.0.0.1:8080/

# publier sur GitHub Pages (racine du repo)
./package.sh --deploy && git add -A && git commit -m "update demo" && git push
```

Pré-requis : Docker avec buildx, `rsync`, `python3`, `patch`. Aucun emscripten local n'est nécessaire,
tout est compilé dans des conteneurs.

## Vue d'ensemble

```
                       ┌──────────────── build-engine.sh (Docker, ~25 min) ───────────────┐
 php-src 8.3.0 ──┐     │ emconfigure/emmake : PHP embed + ext sdl/sdl_image/sdl_mixer/     │
 php-sdl (fork) ─┤────▶│ sdl_ttf/gd/zlib…  + source/phpw.c  ──emcc──▶ build/php-web.mjs    │
 php-sdl-image ──┤     │                                              build/php-web.wasm   │
 php-sdl-mixer ──┤     └───────────────────────────────────────────────────────────────────┘
 php-sdl-ttf ────┘
                                                                     │
 /home/david/poc/sonicGamePhp ──sync-game.sh──▶ demo/src/src ─┐      │
   (jeu PHP natif, version finale)   (+ patches/game/*)       │      ▼
                                                package.sh : file_packager ──▶ php-web.data
                                                             + injection dans php-web.mjs
                                                                     │
                                                                     ▼
                                     demo/public/ : index.html + loader.js + php-web.*
                                         (./serve.sh demo)   ──--deploy──▶ racine (GitHub Pages)
```

## Fichiers du repo

| Chemin | Rôle |
|---|---|
| `Dockerfile`, `docker-bake.hcl` | Recette de compilation du moteur |
| `config.sdl`, `config-image.sdl`, `config-mixer.sdl`, `config-ttf.sdl` | `config.m4` de remplacement des extensions SDL, adaptés à emscripten |
| `source/phpw.c` | Glue C : démarre PHP embed, exécute le code, branche la boucle navigateur |
| `sync-game.sh` | Copie le jeu final vers `demo/src/src`, nettoie (identique au jeu natif) |
| `sync-to-game.sh` | Sens inverse : `demo/src/src` → jeu natif ; `--check` vérifie que les deux sont identiques |
| `sync-game.exclude` | Fichiers propres au poste de dev, exclus dans les deux sens |
| `patches/game/` | Adaptations wasm temporaires du jeu (vide : tout est intégré au jeu) |
| `build-engine.sh` | Compile le moteur → `build/` |
| `package.sh` | Package `demo/src` → `php-web.data`, injecte le loader, écrit `version.json` (empreintes des fichiers, voir [cache et versions](fonctionnement.md#cache-et-versions)), `--deploy` copie à la racine |
| `tools/dump-container.php` | Précompile le container Symfony du jeu (`cache/container.php`), lancé par `package.sh` avec le PHP natif |
| `serve.sh` | Serveur HTTP local (`demo` ou `root`) |
| `all.sh` | Enchaîne les quatre |
| `demo/public/index.html` | Page de la démo : lance le wasm, code PHP de démarrage, sauvegardes |
| `demo/public/loader.js` | Écran de chargement façon Sonic (`window.SonicLoader`) |
| `demo/public/mobile.js` | Mode mobile / tablette : plein écran, paysage, sans debug (`window.SonicMobile`) |
| `demo/public/controls.js` | Commandes à l'écran → vrais événements clavier : tactile (croix dessinée ou flottante, bouton A), pad de debug 8 4 6 2 5 / F3 F4 F6 F7 (autoplay), bouton plein écran (`window.SonicControls`) |
| `demo/public/manifest.webmanifest`, `demo/public/assets/` | Application web (écran d'accueil : plein écran, paysage), icônes, image de partage, police du loader |
| `go.sh` | Ancien script tout-en-un (historique, remplacé par les scripts ci-dessus) |
