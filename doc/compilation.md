# Compiler de A à Z

La chaîne a trois étapes indépendantes :

1. **le moteur** (`build-engine.sh`) : PHP + extensions → `build/php-web.mjs` + `build/php-web.wasm`.
   On ne le refait que si on change le Dockerfile, une extension ou `source/phpw.c` ;
2. **le jeu** (`sync-game.sh`) : copie du jeu PHP natif vers `demo/src/src`, avec les patches wasm ;
3. **le packaging** (`package.sh`) : `demo/src` → `php-web.data`, injecté dans `php-web.mjs`.

## 1. Le moteur : `./build-engine.sh`

```bash
./build-engine.sh          # = docker buildx bake --builder wasm-builder
```

Le builder buildx `wasm-builder` (driver `docker-container`) est créé au besoin : c'est ce driver qui
permet d'exporter le cache vers `.buildx-cache/` (cf. `docker-bake.hcl`). Le résultat est écrit dans
`build/` (sortie `type=local`, l'image finale est un `FROM scratch` qui ne contient que ces deux fichiers).

Durées mesurées à froid (4 cœurs) : clone de php-src ~4 min, `configure` ~6 min, `make` ~6 min,
link final (LTO) ~4,5 min. Total ~25 min. Si seul le `configure` change, comptez ~17 min.

### Étapes du Dockerfile

| Stage | Ce qu'il fait |
|---|---|
| `build_tool` | Image `emscripten/emsdk:3.1.35` + outils autotools, bison, re2c… |
| `libxml` | libxml2 `v2.9.10` compilée en statique avec `emconfigure`/`emmake` (linkée mais l'extension xml n'est pas activée) |
| `php_src` | Clone de `php-src` branche `PHP-8.3.0`, puis copie des extensions dans `ext/` : `davidnurdin/php-sdl` (fork), `kea/php-sdl-image`, `kea/php-sdl-mixer`, `kea/php-sdl-ttf`. Leurs `config.m4` sont **remplacés** par les `config*.sdl` du repo |
| `php-wasm` | `apt install libsdl2-*-dev` (voir l'astuce plus bas), `buildconf` + `emconfigure ./configure`, `emmake make`, compilation de `source/phpw.c`, link final `emcc` |

### L'astuce des en-têtes SDL

Les `config.m4` d'origine cherchent SDL avec `pkg-config` et testent un link natif, ce qui échoue sous
emscripten. Les `config*.sdl` du repo :

- trouvent les **en-têtes** dans les paquets Debian `libsdl2-dev`, `libsdl2-image-dev`… installés dans
  le conteneur (`/usr/include/SDL2`, `PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig/`) : ça
  satisfait `configure` ;
- ajoutent `-sUSE_SDL=2` (et `-sUSE_SDL_IMAGE=2`, `-sUSE_SDL_MIXER=2`, `-sUSE_SDL_TTF=2`) aux flags :
  à la compilation et au link, ce sont les **ports emscripten** qui sont réellement utilisés.

Les ports sont téléchargés par emcc au premier link (cache monté sur `/emsdk/upstream/emscripten/cache`) :
SDL 2.24.2, SDL_image 2.6.0 (+ libpng 1.6.37, libjpeg 9c), SDL_mixer 2.0.4 (+ ogg, vorbis, mpg123 1.26.2),
SDL_ttf 2.20.2 (+ freetype, harfbuzz 3.2.0), zlib 1.2.13.

### Options `configure` de PHP

`--enable-embed=static --disable-all` (pas de CLI ni de CGI : PHP est une bibliothèque appelée par
`phpw.c`), puis seulement ce dont le jeu a besoin :

| Extension | Pourquoi |
|---|---|
| `sdl`, `sdl_image`, `sdl_mixer`, `sdl_ttf` | Le jeu |
| `gd` + `png` | Découpage des images trop larges (voir [fonctionnement.md](fonctionnement.md#images-trop-larges)), `getimagesize` |
| `zlib` | `gzencode`/`gzdecode` des fantômes (`var/ghosts/*.json.gz`) |
| `mbstring`, `ctype`, `tokenizer`, `bcmath` | Symfony Console / DI / Yaml |

Plus `--disable-opcache --disable-fiber-asm --without-pcre-jit` (pas de JIT ni d'assembleur en wasm).
Les extensions toujours présentes (Core, date, pcre, hash, json, random, Reflection, SPL, standard)
complètent la liste. `CFLAGS/LDFLAGS="-s USE_ZLIB=1 -s USE_LIBPNG=1"` fournissent zlib et libpng.

**Vérifier qu'une fonction existe dans le wasm** : avant d'utiliser une nouvelle fonction PHP dans le
jeu, il faut qu'elle soit dans le moteur. `get_loaded_extensions()` dans le wasm renvoie :
`Core, date, pcre, zlib, bcmath, ctype, gd, hash, json, mbstring, random, Reflection, SDL, SDL_image,
SDL_mixer, sdl_ttf, standard, SPL, tokenizer`. Pour en ajouter une, ajoutez l'option dans le
`configure` du Dockerfile et relancez `./build-engine.sh`.

### Link final (`emcc`)

Points importants des options :

| Option | Effet |
|---|---|
| `-O3 -flto --llvm-lto 2` | Optimisation maximale. En -O3 le commentaire `--pre-js` disparaît du JS, d'où le marqueur d'injection de `package.sh` |
| `-sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORT_NAME=createPhpModule` | `php-web.mjs` est un module ES qui exporte une fabrique |
| `-sENVIRONMENT=web` | Navigateur uniquement (pas de Node) |
| `-sEXPORTED_FUNCTIONS=[_phpw_run, …]` / `EXTRA_EXPORTED_RUNTIME_METHODS=[ccall, FS, …]` | Ce que le JS peut appeler |
| `-sINVOKE_RUN=0 -sEXIT_RUNTIME=0` | Pas de `main()` automatique, le runtime ne s'arrête jamais |
| `-sFORCE_FILESYSTEM=1 -lidbfs.js` | Système de fichiers virtuel + IDBFS (IndexedDB) pour les sauvegardes |
| `-sLZ4=1` | Le paquet de données peut être compressé LZ4 |
| `-sINITIAL_MEMORY=256mb -sALLOW_MEMORY_GROWTH=1 -sMAXIMUM_MEMORY=2gb` | Mémoire |
| `-sUSE_SDL=2 … -sSDL2_IMAGE_FORMATS=[bmp,png,jpg] -sSDL2_MIXER_FORMATS=[ogg,wav,mp3]` | Ports SDL |
| `-sERROR_ON_UNDEFINED_SYMBOLS=0` | Des symboles natifs inutilisés (`makecontext`, `getdtablesize`…) restent non résolus : warnings normaux |

Pour déboguer : remplacer `-O3` par `-O0`, retirer `-flto`/`--llvm-lto 2`, ajouter `-g`. **Attention**
en `-O0` le marqueur d'injection change (c'est alors le commentaire `--pre-js` qui sert, cf. `go.sh`).

## 2. Le jeu : `./sync-game.sh [chemin]`

```bash
./sync-game.sh                              # défaut : /home/david/poc/sonicGamePhp (ou $GAME_SRC)
./sync-game.sh ~/autre/clone/sonicGamePhp
```

1. **rsync** du working tree (modifications non commitées comprises) vers `demo/src/src`, sans
   `.git`, `.idea`, `.vscode`, `tools/` (scripts Python de ripping), `var/` (sauvegardes locales),
   `crash.log`, les sources C des extensions (`php-sdl*`, `php-mixer`), `sonic.tar.gz`,
   `.castor.stub.php`. Le `.git` de `demo/src/src` est protégé (c'est un clone de sonicGamePhp) ;
2. **vendor/** : copié depuis le jeu ; s'il manque, `composer install --no-dev` dans le conteneur
   `composer:2` ;
3. **suppression des tranches d'images** `xxx-N.png` dont l'image d'origine `xxx.png` fait plus de
   4064 px de large : ce sont des fichiers générés par le jeu (voir fonctionnement.md). Les supprimer
   évite d'embarquer des tranches périmées ; le jeu les régénère au démarrage ;
4. **patches** : chaque fichier de `patches/game/`, dans l'ordre alphabétique :
   - `NN-nom.patch` : diff unifié, appliqué avec `patch -p1` (échoue s'il ne s'applique plus) ;
   - `NN-nom.sh` : script appelé avec le dossier du jeu en argument. Plus robuste qu'un diff quand
     le jeu évolue (recherche/remplacement).
5. écrit `demo/src/src/.wasm-sync` (commit source, nombre de fichiers non commités, date).

### Patches actuels

| Patch | Pourquoi |
|---|---|
| `10-int32-microtime.sh` | PHP wasm32 a des entiers **32 bits**. `(int)floor(microtime(true) * 60)` ≈ 1,07·10¹¹ déborde (modulo 2³²) et donne des index négatifs : `tileset1-cycle-1` introuvable, puis TypeError dans `SDL_RenderCopyEx`. Le script remplace `microtime(true)` par `fmod(microtime(true), 86400.0)` dans les conversions `(int)` |

Les autres adaptations wasm sont dans `demo/public/index.html` (pas besoin de toucher au jeu) :
neutralisation de `Loop::run()`, taille CSS du canvas, sauvegardes. Voir fonctionnement.md.

### Contrôler une nouvelle version du jeu

Après une resynchro, si le jeu plante dans le navigateur, la console (et la zone de debug sous le jeu)
affiche les erreurs PHP. Causes habituelles :

- **fonction absente du moteur** (`Call to undefined function`) : ajouter l'extension au Dockerfile ;
- **débordement 32 bits** : grands entiers, `PHP_INT_MAX + x`, timestamps en millisecondes ou
  microsecondes convertis en `int`, `hrtime(true)` (renvoie un float en 32 bits) ;
- **code bloquant** : boucle `while (true)`, `sleep()`/`usleep()` : le navigateur gèle ;
- **écriture hors de `var/`** : fonctionne, mais n'est pas sauvegardée.

## 3. Le packaging : `./package.sh [--deploy]`

1. copie `build/php-web.mjs` et `build/php-web.wasm` dans `demo/public/` (les anciennes sorties de
   `go.sh` appartiennent à root : elles sont supprimées, pas écrasées) ;
2. **file_packager** (outil emscripten, lancé dans l'image `soyuka/php-wasm:8.2.9`) empaquette
   `demo/src` → `/src` du FS virtuel : `php-web.data` (compressé LZ4, ~19 Mo) + `php-web.data.js`
   (le code qui le télécharge et le monte). Options : `--use-preload-cache` (le paquet est mis en
   cache dans IndexedDB), `--exclude '*/.*'` (pas de fichiers cachés, donc pas de `.git`) ;
3. **injection** de `php-web.data.js` dans `php-web.mjs`, juste après le marqueur
   `Module["preInit"].pop()()}}run();`. Le loader de données doit s'exécuter à l'intérieur de la
   fabrique `createPhpModule`, où `Module` existe ;
4. copie la police du jeu (`NiseSegaSonic.TTF`) dans `demo/public/assets/` pour le loader ;
5. `--deploy` : copie `index.html`, `loader.js`, `php-web.*` et `assets/` à la racine du repo, ce que
   publie le workflow GitHub Pages (`.github/workflows/static.yml` publie tout le repo).

Les chemins PHP de la page (`/src/src/vendor/autoload.php`, `/src/src/app.php`) découlent de ce
montage : `demo/src` → `/src`, donc le jeu (`demo/src/src`) est dans `/src/src`.

## 4. Servir en local : `./serve.sh`

```bash
./serve.sh               # demo/public sur http://127.0.0.1:8080/
./serve.sh root 8081     # la racine (= GitHub Pages)
```

Il faut un serveur HTTP : en `file://`, le module ES et le `fetch` du wasm sont bloqués. Aucun en-tête
particulier n'est requis (pas de threads, donc pas de COOP/COEP).

## Récapitulatif des commandes

| Je veux… | Commande |
|---|---|
| Tout refaire | `./all.sh` |
| Mettre à jour le jeu | `SKIP_ENGINE=1 ./all.sh` |
| Changer une option PHP / une extension | modifier `Dockerfile` puis `./build-engine.sh && ./package.sh` |
| Modifier la page / le loader | éditer `demo/public/index.html` ou `loader.js`, recharger (pas de rebuild) |
| Publier | `./package.sh --deploy`, commit, push |
| Revenir à l'ancien jeu de la démo | `git -C demo/src/src checkout . && git -C demo/src/src clean -fd` |
