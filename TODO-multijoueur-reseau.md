# Multijoueur en réseau : état

Le multijoueur en ligne est en place (voir `doc/fonctionnement.md`, section « Multijoueur en ligne », et le
guide du réseau de [php-wasm-network](https://github.com/davidnurdin/php-wasm-network/blob/main/doc/guide.md)).

## Fait

- Serveur sur le VPS : `wss://sonic.mimichat.fr/ws` (`/mimichatPROD/sonicGameServerPhp` : relais + Caddy
  derrière Traefik + coturn sur 3480 ; `ssh.mimichat.fr` reste un alias).
- Salons privés (code), salon public sans code, discussion (salon et partie), noms des joueurs.
- Synchronisés : Sonic (position, image, poses ROM en couleur, bouclier, invincibilité), anneaux, ponts,
  moniteurs, badniks, plateformes qui tombent, interrupteurs, départ des objets au GO.
- Anti-triche côté hôte (vitesse, anneaux, bouclier, invincibilité) et compensation de latence des contacts.

## Limites connues

- L'hôte est un joueur : un hôte tricheur n'est pas contrôlé. Un serveur qui ferait autorité demanderait
  de faire tourner `Versus` sans écran (séparer la logique du rendu, SDL en mode `dummy` côté serveur).
- Plateformes « flottantes » : elles reviennent à leur place quand le joueur local s'éloigne, donc pas
  forcément au même moment partout.
- Pas de discussion pendant la partie sur mobile (pas de clavier ; dans le salon, le clavier à l'écran).
