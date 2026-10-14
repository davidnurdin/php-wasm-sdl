#!/usr/bin/env bash
# PHP compilé en wasm32 a des entiers 32 bits (PHP_INT_MAX = 2147483647).
# (int)floor(microtime(true) * 60) ~ 1.07e11 déborde : PHP fait alors un modulo 2^32 et l'index
# peut devenir négatif ("tileset1-cycle-1" introuvable -> TypeError dans SDL_RenderCopyEx).
# On ramène le temps sur une journée avant la conversion : max 86400 * 60 = 5 184 000, qui tient en int32.
set -euo pipefail
DST="$1"
files=$(grep -rlE '\(int\) *(floor)?\(microtime\(true\)' "$DST/src" || true)
for f in $files; do
  sed -i -E 's/\(int\) *(floor)?\(microtime\(true\)/(int)\1(fmod(microtime(true), 86400.0)/g' "$f"
  echo "    $(realpath --relative-to="$DST" "$f")"
done
# Contrôle : plus aucune conversion int directe de microtime()
! grep -rnE '\(int\) *(floor)?\(microtime\(true\)' "$DST/src"
