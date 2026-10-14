#!/usr/bin/env bash
# Compile le moteur : PHP 8.3 + extensions SDL/SDL_image/SDL_mixer/SDL_ttf/GD/zlib en WebAssembly
# (Dockerfile + docker-bake.hcl) -> build/php-web.mjs + build/php-web.wasm
# Un build complet sans cache prend ~25 min ; le cache buildx est dans .buildx-cache/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
BUILDER="${BUILDER:-wasm-builder}"
# l'export du cache en type=local exige un builder "docker-container"
docker buildx inspect "$BUILDER" >/dev/null 2>&1 || docker buildx create --name "$BUILDER" --driver docker-container
cd "$ROOT"
docker buildx bake --builder "$BUILDER" --progress=plain "$@"
ls -la build/
