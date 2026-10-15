#!/usr/bin/env bash
# Sens inverse de sync-game.sh : renvoie la copie du jeu de ce repo (demo/src/src) vers le jeu natif,
# pour que les deux versions soient identiques (ISO) quand on a modifié le jeu côté wasm.
#
#   ./sync-to-game.sh [chemin_du_jeu]           copie demo/src/src -> jeu (fichiers supprimés compris)
#   ./sync-to-game.sh --check [chemin_du_jeu]   n'écrit rien, liste les différences (code 1 s'il y en a)
#
# Le jeu natif garde ce que la copie wasm n'a pas : .git, vendor/, var/ (sauvegardes), outils de dev,
# extensions php-sdl* (cf. sync-game.exclude), et les tranches d'images générées (<image>-N.png des
# images de plus de 4064 px, retirées du paquet wasm par sync-game.sh).
# Ensuite : commit + push dans le jeu, puis ./sync-game.sh pour revenir au même état des deux côtés.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
CHECK=0
[ "${1:-}" = "--check" ] && { CHECK=1; shift; }
DST="$(cd "${1:-${GAME_SRC:-/home/david/poc/sonicGamePhp}}" && pwd)"
SRC="$ROOT/demo/src/src"
MAX_WIDTH=4064

[ -f "$DST/app.php" ] || { echo "ERREUR: $DST ne ressemble pas au jeu (app.php absent)" >&2; exit 1; }
[ -f "$SRC/app.php" ] || { echo "ERREUR: $SRC vide, lancer d'abord ./sync-game.sh" >&2; exit 1; }

# tranches générées présentes dans le jeu : protégées (ni copiées ni supprimées)
png_width() { od -An -tu1 -j16 -N4 "$1" | awk '{print $1*16777216 + $2*65536 + $3*256 + $4}'; }
slices="$(mktemp)"; trap 'rm -f "$slices"' EXIT
while IFS= read -r -d '' slice; do
  base="$(sed -E 's/-[0-9]+\.png$/.png/' <<<"$slice")"
  if [ -f "$base" ] && [ "$(png_width "$base")" -gt "$MAX_WIDTH" ]; then
    echo "/${slice#"$DST"/}" >> "$slices"
  fi
done < <(find "$DST/assets" -type f -regex '.*-[0-9]+\.png' -print0)

opts=(-a --delete --exclude-from="$ROOT/sync-game.exclude" --exclude='/vendor' --exclude-from="$slices")
if [ "$CHECK" = 1 ]; then
  # -c : compare le contenu (les dates diffèrent après une copie)
  diff="$(rsync "${opts[@]}" -nc --out-format='%n' "$SRC/" "$DST/" | grep -v '/$' || true)"
  if [ -n "$diff" ]; then
    echo "==> différences entre $SRC et $DST :"; echo "$diff" | sed 's/^/    /'; exit 1
  fi
  echo "==> identiques : $SRC = $DST (hors vendor/, var/, outils, tranches générées)"; exit 0
fi

echo "==> rsync $SRC -> $DST"
rsync "${opts[@]}" -c --itemize-changes "$SRC/" "$DST/" | grep -v '^\.' || true
git -C "$DST" status --short
echo "==> OK. Étape suivante : commit + push dans $DST, puis ./sync-game.sh"
