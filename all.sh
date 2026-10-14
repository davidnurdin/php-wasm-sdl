#!/usr/bin/env bash
# Chaîne complète : sync du jeu -> build du moteur -> packaging -> serveur local
#   ./all.sh [chemin_du_jeu]        SKIP_ENGINE=1 ./all.sh   pour ne pas recompiler le moteur
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
"$ROOT/sync-game.sh" "$@"
[ "${SKIP_ENGINE:-0}" = 1 ] || "$ROOT/build-engine.sh"
"$ROOT/package.sh"
exec "$ROOT/serve.sh" demo
