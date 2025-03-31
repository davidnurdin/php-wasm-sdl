PHP_ARG_ENABLE(sdl, whether to enable SDL support,
[  --enable-sdl           Enable SDL support], no)

if test "$PHP_SDL" != "no"; then
AC_MSG_NOTICE([Building php-sdl with Emscripten SDL support])
CFLAGS="$CFLAGS -sUSE_SDL=2"
CPPFLAGS="$CPPFLAGS -sUSE_SDL=2"
LDFLAGS="$LDFLAGS -sUSE_SDL=2"

  PHP_NEW_EXTENSION(sdl, blendmode.c cpuinfo.c error.c event.c filesystem.c glcontext.c joystick.c keyboard.c messagebox.c mouse.c mutex.c php_sdl.c pixels.c platform.c power.c rect.c render.c rwops.c sdl.c shape.c surface.c timer.c version.c video.c window.c, , -sUSE_SDL=2, -sUSE_SDL=2)
fi
