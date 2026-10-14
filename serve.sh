#!/usr/bin/env bash
# Sert la démo en local.  ./serve.sh [root|demo] [port]
#   root : la racine du repo (= ce que publie GitHub Pages)   demo : demo/public (sortie de ./package.sh)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
case "${1:-demo}" in
  root) DIR="$ROOT" ;;
  demo) DIR="$ROOT/demo/public" ;;
  *) echo "usage: $0 [root|demo] [port]" >&2; exit 1 ;;
esac
PORT="${2:-8080}"
echo "http://127.0.0.1:$PORT/   (sert $DIR)"
exec python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$DIR"
