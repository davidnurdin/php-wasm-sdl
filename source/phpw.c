#include "sapi/embed/php_embed.h"
#include <emscripten.h>
#include <stdlib.h>

#include "zend_globals_macros.h"
#include "zend_exceptions.h"
#include "zend_closures.h"
#include <stdbool.h> // Pour le type bool

// Variables globales pour la boucle
zval function_name, function_update_events,  renderer_zval, retval;
zend_fcall_info fci;
zend_fcall_info_cache fcc;
zend_fcall_info fci_update_events;
zend_fcall_info_cache fcc_update_events;
int php_callable_ready = 0;

void update_events_wrapper(void *arg) {
    if (!php_callable_ready) return;

    zend_try {
        if (zend_call_function(&fci_update_events, &fcc_update_events) == SUCCESS) {
         zval_ptr_dtor(&retval);
         } else {
            fprintf(stderr, "Erreur: appel sdl_update_events() échoué\n");
        }
    } zend_catch {
        fprintf(stderr, "Exception PHP attrapée pendant sdl_update_events()\n");
    } zend_end_try();
}

void update_events_loop(void *arg) {
    update_events_wrapper(arg);
    emscripten_async_call(update_events_loop, arg, 0); // 10 ms = 100 fps
}

void main_loop()
{

    if (!php_callable_ready) return;

      zend_try {
          if (zend_call_function(&fci, &fcc) == SUCCESS) {
              zval_ptr_dtor(&retval);
          } else {
              fprintf(stderr, "Erreur : échec de l'appel à sdl_frame()\n");
          }
      } zend_catch {
          fprintf(stderr, "Exception PHP attrapée pendant sdl_frame()\n");
      } zend_end_try();




}

int main() {
  return 0;
}

void EMSCRIPTEN_KEEPALIVE phpw_run(char *code)
{
  setenv("USE_ZEND_ALLOC", "0", 1);
  php_embed_init(0, NULL);
  zend_try
  {
    zend_eval_string(code, NULL, "php-wasm run script");

	// define bool error to false (in C , not in Zend)
	bool errorFlag = false;


    // Préparer l'appel à la fonction PHP sdl_frame($renderer)
    ZVAL_STRING(&function_name, "sdl_frame");

    if (zend_fcall_info_init(&function_name, 0, &fci, &fcc, NULL, NULL) != SUCCESS) {
        fprintf(stderr, "Erreur : sdl_frame() n'est pas callable\n");
        errorFlag = true ;
        // return;
    }

	ZVAL_STRING(&function_update_events, "sdl_update_events");

	if (zend_fcall_info_init(&function_update_events, 0, &fci_update_events, &fcc_update_events, NULL, NULL) != SUCCESS) {
		fprintf(stderr, "Erreur : sdl_update_events() n'est pas callable\n");
		errorFlag = true ;
	}


    // Chercher la variable $app dans la symbol table globale PHP
    zval *renderer_ptr = zend_hash_str_find(&EG(symbol_table), "app", strlen("app"));
    if (!renderer_ptr) {
        fprintf(stderr, "Erreur : variable $renderer introuvable\n");
        errorFlag = true ;
        // return;
    }

    // Copier $renderer dans un zval utilisable pour l'appel (a voir)
//    ZVAL_COPY(&renderer_zval, renderer_ptr);
	if (!errorFlag)
	{
		ZVAL_COPY_VALUE(&renderer_zval, renderer_ptr); // évite l'alloc/copy


		// Préparer les paramètres d'appel
		fci.param_count = 1;
		fci.params = &renderer_zval;
		fci.retval = &retval;


		// Préparer les appels à la fonction PHP sdl_update_events()
		fci_update_events.param_count = 1;
		fci_update_events.params = &renderer_zval;
		fci_update_events.retval = &retval;

		php_callable_ready = 1; // Prêt pour main_loop() && update_events


		emscripten_async_call(update_events_loop, NULL, 0); // le plus rapidement possible
		emscripten_set_main_loop(main_loop, 0, 1); // NEVER QUIT !! => animated

		// emscripten_set_interval((em_arg_callback_func)update_events_wrapper, 10, NULL);



	}

    if(EG(exception))
    {
      zend_exception_error(EG(exception), E_ERROR);
    }
  } zend_catch {
    /* int exit_status = EG(exit_status); */
  } zend_end_try();

  php_embed_shutdown();
}
