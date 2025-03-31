<?php

function sdl_frame() {
	static $color = 0;

	$win = SDL_CreateWindow("PHP SDL", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 640, 480, SDL_WINDOW_SHOWN);
	$renderer = SDL_CreateRenderer($win, -1, SDL_RENDERER_ACCELERATED);

	SDL_SetRenderDrawColor($renderer, ($color % 255), 0, 0, 255);
	SDL_RenderClear($renderer);
	SDL_RenderPresent($renderer);

	SDL_DestroyRenderer($renderer);
	SDL_DestroyWindow($win);

	$color += 1;
}
