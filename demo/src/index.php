<?php

SDL_Init(SDL_INIT_VIDEO);

$window = SDL_CreateWindow(
	"PHP SDL2 in WebAssembly",
	SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
	500, 500,
	SDL_WINDOW_SHOWN
);

if (!$window) {
	echo "Erreur SDL_CreateWindow : " . SDL_GetError() . "\n";
	exit(1);
}

$renderer = SDL_CreateRenderer($window, -1, SDL_RENDERER_ACCELERATED);
SDL_SetRenderDrawColor($renderer, 255, 0, 0, 255);
SDL_RenderClear($renderer);
SDL_RenderPresent($renderer);


// 🧼 Clean-up
/* SDL_DestroyRenderer($renderer);
SDL_DestroyWindow($window);
SDL_Quit();
*/
