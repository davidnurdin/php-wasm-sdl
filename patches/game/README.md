# Patches wasm du jeu

`sync-game.sh` applique, dans l'ordre alphabétique, chaque fichier de ce dossier à la copie du jeu
(`demo/src/src`) :

- `NN-nom.patch` : diff unifié, appliqué avec `patch -p1` ;
- `NN-nom.sh` : script appelé avec le dossier du jeu en argument.

**Il n'y en a plus aucun** : les adaptations wasm (entiers 32 bits de `microtime()`, `Game::$viewHeight`,
FPS dans F6) sont intégrées au jeu lui-même, pour que la version native et la version wasm soient
identiques. N'en ajoutez un que pour une adaptation temporaire. Il vaut mieux corriger le jeu puis
lancer `./sync-game.sh`, ou modifier `demo/src/src` puis lancer `./sync-to-game.sh`.
