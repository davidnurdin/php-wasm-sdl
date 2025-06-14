FROM emscripten/emsdk:3.1.35 as build_tool

RUN apt-get update && \
  apt-get --no-install-recommends -y install \
    build-essential \
    automake \
    autoconf \
    libtool \
    pkgconf \
    python3 \
    bison \
    flex \
    make \
    re2c \
    gdb \
    git \
    libxml2 \
    libxml2-dev \
    zlib1g-dev \
    pv \
    re2c

FROM build_tool AS libxml
ARG LIBXML2_TAG=v2.9.10
RUN git clone https://gitlab.gnome.org/GNOME/libxml2.git libxml2 \
		--branch $LIBXML2_TAG \
		--single-branch     \
		--depth 1
WORKDIR /src/libxml2
RUN ./autogen.sh
RUN emconfigure ./configure --prefix=/src/libxml2/build --enable-static --disable-shared --with-python=no --with-threads=no
RUN emmake make -j8
RUN emmake make install

#FROM build_tool AS sqlite
#RUN wget https://sqlite.org/2020/sqlite-amalgamation-3330000.zip \
#        && unzip sqlite-amalgamation-3330000.zip \
#        && rm sqlite-amalgamation-3330000.zip \
#        && mv sqlite-amalgamation-3330000 sqlite
#WORKDIR /src/sqlite
#RUN emcc -Oz -DSQLITE_OMIT_LOAD_EXTENSION -DSQLITE_DISABLE_LFS -DSQLITE_ENABLE_FTS3 -DSQLITE_ENABLE_FTS3_PARENTHESIS -DSQLITE_THREADSAFE=0 -DSQLITE_ENABLE_NORMALIZE -c sqlite3.c -o sqlite3.o

FROM build_tool as php_src
ARG PHP_BRANCH=PHP-8.3.0

RUN git clone https://github.com/php/php-src.git php-src \
		--branch $PHP_BRANCH \
		--single-branch \
		--depth 1


RUN git clone https://github.com/davidnurdin/php-sdl.git /tmp/php-sdl && \
    mkdir -p /src/php-src/ext/sdl && echo "2" && \
    cp -r /tmp/php-sdl/* /src/php-src/ext/sdl && \
	cp -r /src/php-src/ext/sdl/src/* /src/php-src/ext/sdl/ && \
    find /src/php-src/ext/sdl/ -type f ! \( -name '*.c' -o -name '*.h' -o -name 'config.m4' \) -delete


RUN git clone https://github.com/kea/php-sdl-image.git && \
    mkdir -p /src/php-src/ext/sdl_image && \
	cp -r php-sdl-image/* /src/php-src/ext/sdl_image

RUN git clone https://github.com/kea/php-sdl-mixer.git && \
    mkdir -p /src/php-src/ext/sdl_mixer && \
	cp -r php-sdl-mixer/* /src/php-src/ext/sdl_mixer

RUN git clone https://github.com/kea/php-sdl-ttf.git && \
    mkdir -p /src/php-src/ext/sdl_ttf && \
	cp -r php-sdl-ttf/* /src/php-src/ext/sdl_ttf

#RUN #git clone https://github.com/seanmorris/vrzno && \
#	mkdir -p /src/php-src/ext/vrzno && \
#	cp -r vrzno/* /src/php-src/ext/vrzno

# ok

# todo voir
#RUN #git clone https://github.com/krakjoe/parallel.git /tmp/php-parallel && \
#    mkdir -p /src/php-src/ext/parallel && \
#    cp -r /tmp/php-parallel/* /src/php-src/ext/parallel && \
#	cp -r /src/php-src/ext/parallel/src/* /src/php-src/ext/sdl/ && \
#    find /src/php-src/ext/sdl/ -type f ! \( -name '*.c' -o -name '*.h' -o -name 'config.m4' \) -delete

COPY config.sdl /src/php-src/ext/sdl/config.m4
COPY config-image.sdl /src/php-src/ext/sdl_image/config.m4
COPY config-mixer.sdl /src/php-src/ext/sdl_mixer/config.m4
COPY config-ttf.sdl /src/php-src/ext/sdl_ttf/config.m4



FROM php_src AS php-wasm
ARG WASM_ENVIRONMENT=web
ARG JAVASCRIPT_EXTENSION=mjs
ARG EXPORT_NAME=createPhpModule
ARG MODULARIZE=1
ARG EXPORT_ES6=1
ARG ASSERTIONS=0
ARG OPTIMIZE=-O3
# -Os -O0
# Si on ajoute GD le binaire grossis "trop" (avec O1 en optimisation)
# Si on a O3 c'est trop optimisé et il arrive pas a injecter les fichier dans le wasm

# optimise mieux mais enleve le preload du js (enleve les commentaire sur lequel on se base pr rajouté l'ajout du js) ARG OPTIMIZE=-O3
# TODO: find a way to keep this, it can't be empty if defined...
# ARG PRE_JS=
ARG INITIAL_MEMORY=256mb
COPY --from=libxml /src/libxml2/build/ /src/usr
# COPY --from=sqlite /src/sqlite/sqlite3.o /src/usr/lib/
# COPY --from=sqlite /src/sqlite/sqlite3.h /src/usr/include/sqlite3/
ENV LIBXML_LIBS "-L/src/usr/lib"
ENV LIBXML_CFLAGS "-I/src/usr/include/libxml2"
ENV SQLITE_CFLAGS "-I/src/usr/include/sqlite3"
ENV SQLITE_LIBS "-L/src/usr/lib"
#ENV ZLIB_LIBS="-Lz"
#ENV ZLIB_CFLAGS=" "
#ENV PNG_CFLAGS=" "
ENV PNG_LIBS="-lpng"
#ENV JPEG_CFLAGS=" "
#ENV JPEG_LIBS="-ljpeg"
# we should use PKG_CONFIG_PATH but it doesnt work :( pkg-config

    #emconfigure ./configure --enable-embed=static --enable-sdl --disable-opcache --disable-all
RUN apt-get update && \
      apt-get --no-install-recommends -y install \
        libsdl2-dev \
        libsdl2-2.0-0 \
    	pkg-config \
        libsdl2-image-dev \
        libsdl2-ttf-dev \
    	zlib1g-dev \
    	libpng-dev \
    	libjpeg-dev \
    	libsdl2-mixer-dev

# ENV PKG_CONFIG_PATH=/usr/bin/pkg-config
ENV PKG_CONFIG_PATH="/usr/lib/x86_64-linux-gnu/pkgconfig/"
# RUN pkg-config --cflags --libs sdl2 && sleep 500
# TODO : (autre piste voir dans config-image.sdl pour mettre l'emplacement direct) RUN find /usr -name sdl2.pc 2>/dev/null && sleep 500

#export _SDL2_CFLAGS="-I/usr/include/SDL2 -D_REENTRANT"
# export _SDL2_LIBS="-lSDL2" \

	#export _SDL2_CFLAGS="-I/path/to/sdl2/include"
#export _SDL2_LIBS="-L/path/to/sdl2/lib -lSDL2" \
# export PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

## debug : sudo runc exec -t $(sudo runc list | awk '$3 == "running" {print $1; exit}') /bin/bash
#RUN echo "pause here" && sleep infinity

# -Wno-int-conversion
# -s USE_LIBJPEG=1
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache cd /src/php-src && export PKG_CONFIG_PATH='/usr/lib/x86_64-linux-gnu/pkgconfig/' && ./buildconf --force \
    && emconfigure ./configure \
    	CFLAGS="-s USE_ZLIB=1 -s USE_LIBPNG=1 " LDFLAGS="-s USE_ZLIB=1 -s USE_LIBPNG=1" \
    	PKG_CONFIG_PATH='/usr/lib/x86_64-linux-gnu/pkgconfig/'  \
		--enable-embed=static \
		--with-layout=GNU  \
#    	--enable-vrzno \
    	--enable-sdl 	   \
    	--with-sdl_image \
    	--enable-sdl_ttf \
    	--with-sdl_mixer \
#		--with-libxml      \
    	--enable-gd \
    	--with-png \
#    	--with-jpeg \
#		--enable-xml       \
		--disable-cgi      \
		--disable-cli      \
		--disable-fiber-asm \
		--disable-opcache  \
    	--disable-all      \
#		--enable-session   \
#		--enable-filter    \
#		--enable-calendar  \
#		--enable-dom       \
		--disable-rpath    \
		--disable-phpdbg   \
		--without-pear     \
		--with-valgrind=no \
		--without-pcre-jit \
		--enable-bcmath    \
		--enable-ctype     \
		--enable-mbstring  \
		--disable-mbregex  \
		--with-config-file-scan-dir=/src/php  \
		--enable-tokenizer
#		--enable-simplexml
		# --enable-pdo       \
		# --with-pdo-sqlite  \
		#--with-sqlite3


RUN cd /src/php-src && emmake make -j8
# PHP7 outputs a libphp7 whereas php8 a libphp
RUN cd /src/php-src && bash -c '[[ -f .libs/libphp7.la ]] && mv .libs/libphp7.la .libs/libphp.la && mv .libs/libphp7.a .libs/libphp.a && mv .libs/libphp7.lai .libs/libphp.lai || exit 0'
COPY ./source /src/source
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache cd /src/php-src && emcc $OPTIMIZE \
		-I .     \
		-I Zend  \
		-I main  \
		-I TSRM/ \
		-c \
		/src/source/phpw.c \
		-o /src/phpw.o \
		-s ERROR_ON_UNDEFINED_SYMBOLS=0
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache mkdir /build && cd /src/php-src && emcc $OPTIMIZE \
	-o /build/php-$WASM_ENVIRONMENT.$JAVASCRIPT_EXTENSION \
	--llvm-lto 2                     \
    -fno-inline \
    -s DEMANGLE_SUPPORT=1 \
	-s EXPORTED_FUNCTIONS='["_phpw_run", "_chdir", "_setenv", "_php_embed_init", "_php_embed_shutdown", "_zend_eval_string"]' \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "UTF8ToString", "lengthBytesUTF8", "FS"]' \
	-s ENVIRONMENT=$WASM_ENVIRONMENT    \
    -s USE_SDL=2 \
    -s USE_ZLIB=1 \
    -s USE_LIBPNG=1 \
#    -s USE_LIBJPEG=1 \
    -s USE_SDL_IMAGE=2 \
    -s USE_SDL_MIXER=2 \
    -s USE_SDL_TTF=2 \
    -s SDL2_IMAGE_FORMATS='["bmp", "png","jpg"]' \
    -s SDL2_MIXER_FORMATS='["ogg", "wav", "mp3"]' \
	-s FORCE_FILESYSTEM=1            \
	-s MAXIMUM_MEMORY=2gb             \
	-s INITIAL_MEMORY=$INITIAL_MEMORY \
	-s ALLOW_MEMORY_GROWTH=1         \
    -flto \
    -s EXIT_RUNTIME=0 \
	-s ASSERTIONS=$ASSERTIONS      \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0  \
	-s MODULARIZE=$MODULARIZE        \
	-s INVOKE_RUN=0                  \
	-s LZ4=1                  \
	-s EXPORT_ES6=$EXPORT_ES6 \
	-s EXPORT_NAME=$EXPORT_NAME \
	# -s DECLARE_ASM_MODULE_EXPORTS=0 \
	-lidbfs.js                       \
		/src/phpw.o .libs/libphp.a /src/usr/lib/libxml2.a
    #/src/usr/lib/sqlite3.o
RUN rm -r /src/*

FROM scratch
COPY --from=php-wasm /build/ .
#Comment le désactiver pour déboguer ou éviter la minification :
#Tu peux :
#
#Remplacer -O3 par -O0 (pas d'optimisation).
#
#Supprimer -flto et --llvm-lto 2.
#
#Ajouter -g4 pour avoir des symboles de debug dans le JS et dans le .wasm.
#
