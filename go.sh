#!/bin/bash

#docker buildx bake

docker buildx create --name wasm-builder --driver docker-container --use
docker buildx use wasm-builder
docker buildx bake --progress=plain
mkdir -p cache ;

cp build/php-web.* demo/public/
docker run \
  -v $(pwd)/cache:/emsdk/upstream/emscripten/cache \
  -v $(pwd)/demo/src:/src \
  -v $(pwd)/demo/public:/dist \
  -w /dist \
  soyuka/php-wasm:8.2.9 \
  python3 \
    /emsdk/upstream/emscripten/tools/file_packager.py \
    php-web.data \
      --use-preload-cache \
      --lz4 \
      --preload "/src" \
      --js-output=php-web.data.js \
      --no-node \
      --exclude '*/.*' \
      --export-name=createPhpModule

sed '/--pre-js/r demo/public/php-web.data.js' demo/public/php-web.mjs > this-has-preloaded-data-php-web.mjs ; mv this-has-preloaded-data-php-web.mjs demo/public/php-web.mjs

docker buildx use default
php -S 0.0.0.0:80 -t demo/public
