#!/usr/bin/env bash
# Synchronise la version finale du jeu (celle qui tourne en PHP natif) vers demo/src/src,
# le dossier qui est packagé dans php-web.data (monté en /src/src dans le FS wasm).
#
#   ./sync-game.sh [chemin_du_jeu]      (défaut : $GAME_SRC ou /home/david/poc/sonicGamePhp)
#
# Étapes :
#   1. rsync du jeu (working tree, modifs non commitées comprises) sans ce qui est inutile en wasm
#   2. vendor/ : copié depuis le jeu, sinon `composer install` via docker
#   3. suppression des tranches d'images générées (<image>-N.png) : le jeu les régénère au
#      chargement avec GD si l'image fait plus de 4064 px de large (limite de taille des textures)
#   4. application des patches wasm de patches/game/*.patch (dans l'ordre alphabétique)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "${1:-${GAME_SRC:-/home/david/poc/sonicGamePhp}}" && pwd)"
DST="$ROOT/demo/src/src"
PATCHES="$ROOT/patches/game"
MAX_WIDTH=4064 # floor(4096 / 32) * 32, cf. SdlImage::loadImage()

[ -f "$SRC/app.php" ] || { echo "ERREUR: $SRC ne ressemble pas au jeu (app.php absent)" >&2; exit 1; }
mkdir -p "$DST"

echo "==> rsync $SRC -> $DST"
# .git de demo/src/src est protégé (P) ; tout ce qui est exclu est supprimé de la destination
rsync -a --delete --delete-excluded \
  --filter='P /.git' \
  --exclude='/.git' \
  --exclude='/.idea' \
  --exclude='/.vscode' \
  --exclude='/tools' \
  --exclude='/var' \
  --exclude='crash.log' \
  --exclude='/php-sdl' \
  --exclude='/php-sdl-*' \
  --exclude='/php-mixer' \
  --exclude='/sonic.tar.gz' \
  --exclude='/.castor.stub.php' \
  --exclude='__pycache__' \
  --exclude='/.wasm-sync' \
  "$SRC/" "$DST/"

if [ ! -f "$DST/vendor/autoload.php" ]; then
  echo "==> vendor/ absent : composer install"
  docker run --rm -u "$(id -u):$(id -g)" -v "$DST:/app" -w /app composer:2 \
    install --no-dev --optimize-autoloader --ignore-platform-reqs --no-interaction
fi

echo "==> suppression des tranches d'images générées (images > ${MAX_WIDTH}px)"
png_width() { od -An -tu1 -j16 -N4 "$1" | awk '{print $1*16777216 + $2*65536 + $3*256 + $4}'; }
removed=0
while IFS= read -r -d '' slice; do
  base="$(sed -E 's/-[0-9]+\.png$/.png/' <<<"$slice")"
  if [ -f "$base" ] && [ "$(png_width "$base")" -gt "$MAX_WIDTH" ]; then
    rm -f "$slice"; removed=$((removed + 1))
  fi
done < <(find "$DST/assets" -type f -regex '.*-[0-9]+\.png' -print0)
echo "    $removed tranche(s) supprimée(s)"

# patches/game/NN-nom.patch : diff unifié (patch -p1, échoue s'il ne s'applique plus)
# patches/game/NN-nom.sh    : transformation scriptée, appelée avec le dossier du jeu en argument
#                             (plus robuste qu'un diff quand le jeu évolue)
for p in "$PATCHES"/*; do
  case "$p" in
    *.patch) echo "==> patch $(basename "$p")"
             patch -d "$DST" -p1 --forward --batch --no-backup-if-mismatch < "$p" ;;
    *.sh)    echo "==> script $(basename "$p")"
             bash "$p" "$DST" ;;
  esac
done

{
  echo "source=$SRC"
  echo "commit=$(git -C "$SRC" rev-parse --short HEAD 2>/dev/null || echo '?')"
  echo "dirty=$(git -C "$SRC" status --porcelain 2>/dev/null | wc -l) fichier(s) modifiés non commités"
  echo "date=$(date -Iseconds)"
} > "$DST/.wasm-sync"
cat "$DST/.wasm-sync"
echo "==> OK. Étape suivante : ./package.sh"
