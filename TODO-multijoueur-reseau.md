# Multijoueur en réseau : état et suite

Le multijoueur en ligne est en place (voir `doc/fonctionnement.md`, section « Multijoueur en ligne ») :
- [php-wasm-network](https://github.com/davidnurdin/php-wasm-network) : le pont réseau PHP ↔ navigateur
  (WebSocket, WebRTC), le client PHP natif, le serveur de salons, de relais et de signalisation ;
- dans le jeu : `src/Multiplayer/Online.php` (salon) et `VersusNetwork.php` (partie, l'hôte fait autorité).

## Reste à faire

- Serveur déployé : `wss://ssh.mimichat.fr/ws` (VPS, `/mimichatPROD/sonicGameServerPhp`, relais + Caddy
  derrière Traefik + coturn sur 3480). À terme, un nom de domaine dédié (changer `DOMAIN` dans `.env` et
  `window.SONIC_NET_URL`).
- Les moniteurs, ressorts et plateformes restent propres à chaque machine (ils ne sont pas synchronisés).
- Les frames tirées de la planche ROM (attente, ressort, toboggan) restent bleues pour un joueur d'une
  autre couleur.
- Anti-triche : l'hôte est un joueur, et chacun simule son propre Sonic ; un serveur qui ferait autorité
  (Versus sans SDL côté serveur) demanderait de séparer la logique du rendu.
- Compensation de latence pour les contacts : l'hôte voit les autres avec environ 100 ms de retard, d'où
  des coups un peu généreux ou un peu ratés avec un gros ping.
