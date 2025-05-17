#!/bin/bash

#docker buildx bake
docker buildx bake --progress=plain
cp build/php-web.* demo/public/
docker run \
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
php -S 127.0.0.1:8000 -t demo/public
