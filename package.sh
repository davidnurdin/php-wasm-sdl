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

echo "==> container Symfony précompilé (cache/container.php, lu par app.php dans le navigateur)"
if command -v php >/dev/null; then
  php -d error_reporting='E_ALL & ~E_DEPRECATED' "$ROOT/tools/dump-container.php" "$ROOT/demo/src/src"
else
  rm -f "$ROOT/demo/src/src/cache/container.php"
  echo "    (pas de PHP natif : le jeu construira son container au démarrage)"
fi

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

# réseau du multijoueur en ligne : le côté navigateur de php-wasm-network (dépendance Composer du jeu),
# chargé par la page avant le moteur (l'extension wasmnet du moteur l'appelle)
NETJS="$ROOT/demo/src/src/vendor/davidnurdin/php-wasm-network/js/php-wasm-network.js"
[ -f "$NETJS" ] && cp "$NETJS" "$OUT/php-wasm-network.js" || echo "    (php-wasm-network.js absent : pas de multijoueur en ligne)"

# versions : empreinte de chaque fichier, lue par index.html (version.json, toujours relu sans cache) ;
# les scripts de la page sont appelés avec ?v=<empreinte> : un changement est pris tout de suite
hash() { sha256sum "$1" | cut -c1-12; }
cat > "$OUT/version.json" <<JSON
{
  "build": "$(date -u +%Y-%m-%dT%H:%MZ) $(git -C "$ROOT" rev-parse --short HEAD 2>/dev/null || echo '?')",
  "php-web.mjs": "$(hash "$OUT/php-web.mjs")",
  "php-web.wasm": "$(hash "$OUT/php-web.wasm")",
  "php-web.data": "$(hash "$OUT/php-web.data")"
}
JSON
for js in loader.js mobile.js controls.js php-wasm-network.js; do
  sed -i -E "s|src=\"$js(\?v=[0-9a-f]+)?\"|src=\"$js?v=$(hash "$OUT/$js")\"|" "$OUT/index.html"
done
cat "$OUT/version.json"

ls -la "$OUT"/php-web.*

if [ "${1:-}" = "--deploy" ]; then
  echo "==> copie vers la racine du repo (GitHub Pages)"
  cp "$OUT/php-web.mjs" "$OUT/php-web.wasm" "$OUT/php-web.data" "$OUT/php-web.data.js" \
     "$OUT/index.html" "$OUT/loader.js" "$OUT/mobile.js" "$OUT/controls.js" "$OUT/php-wasm-network.js" "$OUT/manifest.webmanifest" \
     "$OUT/version.json" "$ROOT/"
  mkdir -p "$ROOT/assets" && cp -r "$OUT/assets/." "$ROOT/assets/"
fi
