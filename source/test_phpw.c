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
        if (zend_call_function(&fci_update_events, &fcc_update_events) != SUCCESS) {
            fprintf(stderr, "Erreur: appel sdl_update_events() échoué\n");
        }
    } zend_catch {
        fprintf(stderr, "Exception PHP attrapée pendant sdl_update_events()\n");
    } zend_end_try();
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

void phpw_flush()
{
  fprintf(stdout, "\n");
  fprintf(stderr, "\n");
}

char *EMSCRIPTEN_KEEPALIVE phpw_exec(char *code)
{
  // This sets USE_ZEND_ALLOC=0 to avoid nunmap errors
  setenv("USE_ZEND_ALLOC", "0", 1);
  php_embed_init(0, NULL);
  char *retVal = NULL;

  zend_try
  {
    zval retZv;

    zend_eval_string(code, &retZv, "php-wasm evaluate expression");

    convert_to_string(&retZv);

    retVal = Z_STRVAL(retZv);
  } zend_catch {
  } zend_end_try();

  phpw_flush();
  php_embed_shutdown();

  return retVal;
}

void EMSCRIPTEN_KEEPALIVE phpw_run(char *code)
{
  setenv("USE_ZEND_ALLOC", "0", 1);
  php_embed_init(0, NULL);
  zend_try
  {
  	// emscripten_set_main_loop(main_loop, 65535, 1);

//  	 fprintf(stderr, "Erreur : test ERREUR\n");
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


    // Chercher la variable $renderer dans la symbol table globale PHP
    zval *renderer_ptr = zend_hash_str_find(&EG(symbol_table), "renderer", strlen("renderer"));
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

			php_callable_ready = 0; // Prêt pour main_loop()

		php_callable_ready = 1; // Prêt pour main_loop()
		emscripten_set_main_loop(main_loop, 0, 1);

// execute emscripten_set_interval
		emscripten_set_interval((em_arg_callback_func)update_events_wrapper, 10, NULL);


		// emscripten_set_timeout_loop((em_arg_callback_func)update_events_wrapper, 10, NULL);
		// emscripten_set_timeout_loop(update_events_wrapper, 0, NULL); // 1000 msec





	}



    if(EG(exception))
    {
      zend_exception_error(EG(exception), E_ERROR);
    }
  } zend_catch {
    /* int exit_status = EG(exit_status); */
  } zend_end_try();

  phpw_flush();
  php_embed_shutdown();
}

int EMBED_SHUTDOWN = 1;

void phpw(char *file)
{
  setenv("USE_ZEND_ALLOC", "0", 1);
  if (EMBED_SHUTDOWN == 0) {
	  php_embed_shutdown();
  }

  php_embed_init(0, NULL);
  EMBED_SHUTDOWN = 0;
  zend_first_try {
    zend_file_handle file_handle;
    zend_stream_init_filename(&file_handle, file);
    // file_handle.primary_script = 1;

    if (php_execute_script(&file_handle) == FAILURE) {
      php_printf("Failed to execute PHP script.\n");
    }

    zend_destroy_file_handle(&file_handle);
  } zend_catch {
    /* int exit_status = EG(exit_status); */
  } zend_end_try();

  phpw_flush();
  php_embed_shutdown();
  EMBED_SHUTDOWN = 1;
}
