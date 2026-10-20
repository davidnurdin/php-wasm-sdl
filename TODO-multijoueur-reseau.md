# Multijoueur en réseau : état et suite

Le multijoueur en ligne est en place (voir `doc/fonctionnement.md`, section « Multijoueur en ligne ») :
- [php-wasm-network](https://github.com/davidnurdin/php-wasm-network) : le pont réseau PHP ↔ navigateur
  (WebSocket, WebRTC), le client PHP natif, le serveur de salons, de relais et de signalisation ;
- dans le jeu : `src/Multiplayer/Online.php` (salon) et `VersusNetwork.php` (partie, l'hôte fait autorité).

## Reste à faire

- Serveur déployé : `wss://ssh.mimichat.fr/ws` (VPS, `/mimichatPROD/sonicGameServerPhp`, relais + Caddy
  derrière Traefik + coturn sur 3480). À terme, un nom de domaine dédié (changer `DOMAIN` dans `.env` et
  `window.SONIC_NET_URL`).
- Les ressorts, plateformes et pièges restent propres à chaque machine (ils bougent pareil partout, mais
  un ressort ne s'anime que chez celui qui l'utilise).
- Les poses tirées de la planche ROM (attente, ressort, toboggan) sont bleues pour un Sonic d'une autre
  couleur (la planche ROM n'existe qu'en bleu).
- Discussion pendant la partie (aujourd'hui : dans le salon seulement).
- Anti-triche : l'hôte est un joueur, et chacun simule son propre Sonic ; un serveur qui ferait autorité
  (Versus sans SDL côté serveur) demanderait de séparer la logique du rendu.
- Compensation de latence pour les contacts : l'hôte voit les autres avec environ 100 ms de retard, d'où
  des coups un peu généreux ou un peu ratés avec un gros ping.
