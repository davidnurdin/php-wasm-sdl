# php-wasm-sdl — documentation

Ce projet fait tourner un **interpréteur PHP 8.3 compilé en WebAssembly**, avec les extensions
**SDL2, SDL2_image, SDL2_mixer, SDL2_ttf et GD**, dans un navigateur. La démo est un jeu Sonic écrit
en PHP pur ([sonicGamePhp](https://github.com/davidnurdin/sonicGamePhp)) : le **même code PHP** tourne
en natif (`php -d extension=sdl.so ... app.php`) et dans Chrome.

| Document | Contenu |
|---|---|
| [compilation.md](compilation.md) | Compiler toute la chaîne de A à Z : moteur wasm, synchro du jeu, packaging, déploiement |
| [fonctionnement.md](fonctionnement.md) | Comment ça marche à l'exécution : C ↔ PHP ↔ JS, boucle de jeu, loader, sauvegardes, pièges wasm |

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
| `sync-game.sh` | Copie le jeu final vers `demo/src/src`, nettoie, applique les patches wasm |
| `patches/game/` | Adaptations wasm du jeu (`*.patch` = diff, `*.sh` = transformation scriptée) |
| `build-engine.sh` | Compile le moteur → `build/` |
| `package.sh` | Package `demo/src` → `php-web.data`, injecte le loader, `--deploy` copie à la racine |
| `serve.sh` | Serveur HTTP local (`demo` ou `root`) |
| `all.sh` | Enchaîne les quatre |
| `demo/public/index.html` | Page de la démo : lance le wasm, code PHP de démarrage, sauvegardes |
| `demo/public/loader.js` | Écran de chargement façon Sonic (`window.SonicLoader`) |
| `go.sh` | Ancien script tout-en-un (historique, remplacé par les scripts ci-dessus) |
