dnl config.m4 for extension openal (PHP-OpenAL, Ponup), emscripten build:
dnl the AL headers come from emscripten, the library is its Web Audio implementation (-lopenal at link)

PHP_ARG_ENABLE([openal],
  [whether to enable OpenAL support],
  [AS_HELP_STRING([--enable-openal], [Enable OpenAL (Web Audio) support])],
  [no])

if test "$PHP_OPENAL" != "no"; then
  AC_DEFINE(WITH_OPENAL, 1, [Whether you want PHP-OpenAL])
  AC_DEFINE(HAVE_AL_AL_H, 1, [Whether you have AL/al.h])
  AC_DEFINE(HAVE_AL_ALC_H, 1, [Whether you have AL/alc.h])
  PHP_NEW_EXTENSION(openal, php_openal.c, $ext_shared)
fi
