#!/usr/bin/env bash
# Package demo/src (le jeu + vendor) dans php-web.data et injecte le loader dans php-web.mjs.
#
#   ./package.sh            -> demo/public/  (testable avec ./serve.sh demo)
#   ./package.sh --deploy   -> idem + copie à la racine du repo (ce que publie GitHub Pages)
#
# Pré-requis : build/php-web.mjs et build/php-web.wasm (./build-engine.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/demo/public"
PACKAGER_IMAGE="${PACKAGER_IMAGE:-soyuka/php-wasm:8.2.9}"

for f in php-web.mjs php-web.wasm; do
  [ -f "$ROOT/build/$f" ] || { echo "ERREUR: build/$f absent, lancer ./build-engine.sh" >&2; exit 1; }
done

mkdir -p "$OUT"
# rm d'abord : les anciennes sorties de go.sh appartiennent à root (docker sans -u)
rm -f "$OUT"/php-web.mjs "$OUT"/php-web.wasm "$OUT"/php-web.data "$OUT"/php-web.data.js
cp "$ROOT/build/php-web.mjs" "$ROOT/build/php-web.wasm" "$OUT/"

echo "==> file_packager : demo/src -> /src (php-web.data)"
docker run --rm -u "$(id -u):$(id -g)" \
  -v "$ROOT/demo/src:/src:ro" \
  -v "$OUT:/dist" \
  -w /dist \
  "$PACKAGER_IMAGE" \
  python3 /emsdk/upstream/emscripten/tools/file_packager.py \
    php-web.data \
    --use-preload-cache \
    --lz4 \
    --preload "/src" \
    --js-output=php-web.data.js \
    --no-node \
    --exclude '*/.*' \
    --export-name=createPhpModule

echo "==> injection de php-web.data.js dans php-web.mjs"
# En -O3 emcc supprime le commentaire --pre-js : on insère juste après le run() du module.
MARKER='Module\["preInit"\]\.pop()()}}run();'
grep -q "$MARKER" "$OUT/php-web.mjs" || { echo "ERREUR: marqueur d'injection introuvable dans php-web.mjs" >&2; exit 1; }
sed "/$MARKER/r $OUT/php-web.data.js" "$OUT/php-web.mjs" > "$OUT/php-web.mjs.tmp"
mv "$OUT/php-web.mjs.tmp" "$OUT/php-web.mjs"

# taille réelle du wasm pour la barre de progression (le serveur peut le servir compressé)
sed -i -E "s|(<meta name=\"php-wasm-size\" content=\")[0-9]*(\")|\1$(stat -c %s "$OUT/php-web.wasm")\2|" "$OUT/index.html"

# police Sonic du loader (loader.js), servie hors du FS wasm car affichée avant son chargement
mkdir -p "$OUT/assets"
FONT="$ROOT/demo/src/src/assets/fonts/NiseSegaSonic.TTF"
[ -f "$FONT" ] && cp "$FONT" "$OUT/assets/" || echo "    (police $FONT absente : le loader utilisera une police système)"

ls -la "$OUT"/php-web.*

if [ "${1:-}" = "--deploy" ]; then
  echo "==> copie vers la racine du repo (GitHub Pages)"
  cp "$OUT/php-web.mjs" "$OUT/php-web.wasm" "$OUT/php-web.data" "$OUT/php-web.data.js" \
     "$OUT/index.html" "$OUT/loader.js" "$OUT/mobile.js" "$OUT/manifest.webmanifest" "$ROOT/"
  mkdir -p "$ROOT/assets" && cp -r "$OUT/assets/." "$ROOT/assets/"
fi
