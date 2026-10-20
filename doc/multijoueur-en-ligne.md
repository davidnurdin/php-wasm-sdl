# Le multijoueur en ligne de Sonic PHP, expliqué

Ce document explique comment des joueurs, dans un navigateur ou sur la version desktop, jouent ensemble
la même partie. Il complète :

- le [guide de php-wasm-network](https://github.com/davidnurdin/php-wasm-network/blob/main/doc/guide.md),
  la bibliothèque réseau (WebSocket, WebRTC, serveur relais, API PHP) ;
- la section « Multijoueur en ligne » de [`fonctionnement.md`](fonctionnement.md), plus détaillée et plus
  technique (noms des classes, formats).

## En une image

```
  navigateur (php-wasm)          navigateur (php-wasm)          desktop (PHP natif + SDL)
  ALICE, l'hôte                  BOB                            CARL
  ┌───────────────────┐          ┌───────────────────┐          ┌───────────────────┐
  │ Versus : règles,  │◀─WebRTC─▶│ son Sonic         │          │ son Sonic         │
  │ bots, scores      │  direct  │                   │          │                   │
  └─────────┬─────────┘          └─────────┬─────────┘          └─────────┬─────────┘
            │ wss://                       │ wss://                       │ wss:// (toujours par le relais)
            ▼                              ▼                              ▼
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ sonic.mimichat.fr : relais PHP (salons, messages, signalisation) + coturn (TURN)   │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

## Jouer

1. Menu **MULTIJOUEUR → EN LIGNE**.
2. Choisir :
   - **SALON PUBLIC** pour jouer avec des inconnus, sans code. On est placé dans un salon public qui
     attend des joueurs, ou on en ouvre un ;
   - **SALON PRIVE** pour jouer entre amis. Le salon affiche un code de 4 lettres, à leur donner ;
   - **REJOINDRE** pour taper le code d'un ami.
3. Au premier passage, le jeu demande un **NOM** (8 caractères), changeable ensuite dans le même menu.
4. Dans le salon :
   - l'hôte (le premier arrivé) choisit le **MODE** (course, drapeau, anneaux, deathmatch) et la **ZONE**
     (les actes 1 et 2 des six zones, et les huit niveaux bonus), puis **LANCER** ;
   - **PARTAGER** donne le lien du salon sur le site (`https://sonic.mimichat.fr/salon/CODE`) : la feuille
     de partage du téléphone, sinon le lien est copié ;
   - tout le monde peut **PARLER** : une ligne de 30 caractères, sur le clavier à l'écran ou au vrai
     clavier ;
   - les places libres (jusqu'à 6 Sonic) sont prises par des bots.
5. Pendant la partie, sur ordinateur, **T** ou **Entrée** ouvre une ligne de discussion (Entrée envoie,
   Échap annule). **Échap** seul quitte le salon.

## Depuis le site

Sur https://sonic.mimichat.fr, une fois connecté, l'accueil liste les salons publics. On peut aussi créer
un salon public ou privé, ou en rejoindre un par son code. La page d'un salon suit le salon comme
**spectateur** du relais : elle voit les joueurs, la discussion (la même que dans les menus du jeu) et le
match choisi, et les membres du site présents apparaissent dans le jeu (« SUR LE SITE »). **JOUER** ouvre
le jeu directement dans le salon (`?room=CODE&back=…`). À la fin du match, ou avec **RETOUR AU SITE**, le
jeu revient sur la page du salon. Le jeu ne peut pas appeler JavaScript : il écrit ses demandes (partager,
revenir au site) dans `/tmp/sonic-bridge`, que la page lit (`Bridge.php`, `index.html`).

Le jeu compte aussi des **statistiques** (temps de jeu, sauts, anneaux, matchs gagnés…). Ouvert depuis le
site par un membre, la page les envoie à son compte (onglet Statistiques du site).

La version desktop se lance avec `./start.sh`, à la racine du jeu. Elle rejoint les mêmes salons que les
navigateurs.

## Qui calcule quoi

Il n'y a pas de serveur de jeu : **l'hôte fait l'arbitre**. Son jeu fait tourner les règles de la partie
(contacts entre Sonic, drapeau, anneaux redistribués, arrivée, chrono, scores) et les bots.

Chaque joueur, lui, **pilote son propre Sonic sur sa machine**. Il n'a donc aucun retard sur ses propres
commandes, même avec un ping élevé.

Les messages qui circulent :

| Message | De → vers | Fréquence | Contenu |
|---|---|---|---|
| `STATE` | joueur → hôte | 30 / s, non fiable | mon Sonic : position, vitesse, image, anneaux, bouclier, invincibilité |
| `SNAPSHOT` | hôte → tous | 20 / s, non fiable | toute la partie : chrono, drapeau, chaque Sonic, scores |
| `EVENT` | dans les deux sens | quand il se passe quelque chose, fiable | « tu es touché », « objet détruit », « fin »… |
| `CHAT` | tous | à la demande | une ligne de discussion |

« Non fiable » veut dire qu'un message perdu n'est pas renvoyé : le suivant arrive 33 ou 50 ms plus
tard et le remplace. « Fiable » veut dire qu'il arrive toujours, et dans l'ordre.

### Exemple : BOB saute sur ALICE

1. Sur l'écran de BOB, son Sonic saute. Son `STATE` dit « je suis en boule, à tel endroit ».
2. Le jeu d'ALICE (l'hôte) voit le contact entre la boule de BOB et le Sonic d'ALICE : ALICE est touchée.
   Si ALICE n'avait pas été l'hôte, son jeu aurait reçu un `EVENT` « hurt » et appliqué le coup à son
   Sonic.
3. Le `SNAPSHOT` suivant donne à tout le monde le nouveau score.

### Pourquoi les autres Sonic sont affichés avec un léger retard

Les positions des autres arrivent 20 ou 30 fois par seconde, pas 60. Pour un mouvement fluide, chaque
machine les affiche **120 ms dans le passé**, en glissant entre deux positions reçues (interpolation).
On ne s'en rend pas compte en jouant.

Pour que ce retard ne fausse pas les coups, l'hôte fait de la **compensation de latence** : pour
décider d'un contact, il ne regarde pas le Sonic d'un autre joueur là où il l'affiche, mais là où ce joueur
le voit sur son propre écran (sa dernière position connue, avancée de sa vitesse pendant le temps de
trajet).

## Ce qui est partagé

| Chose | Comment |
|---|---|
| anneaux de la carte | qui en prend un l'envoie à l'hôte, qui le retire chez tous |
| moniteurs | cassés chez tous, seul celui qui casse reçoit le bonus. Ils ne reviennent pas de la partie |
| badniks | détruits chez tous, ne reviennent pas |
| ponts (Bridge) | les morceaux tombent chez tous |
| plateformes qui tombent ou montent quand on est dessus | déclenchées chez tous |
| interrupteurs au sol (Scrap Brain) | les portes s'ouvrent chez tous |
| plateformes mobiles, pièges | elles bougent selon le temps. En ligne, ce temps est arrêté pendant le compte à rebours, et tout part au GO en même temps partout |
| bouclier, invincibilité | visibles sur le Sonic des autres (anneau, étoiles) |
| poses (attente, ressort, toboggan) | visibles chez les autres, dans la couleur du joueur |

## Anti-triche

Comme chacun pilote son Sonic, un joueur modifié pourrait annoncer n'importe quoi. L'hôte vérifie donc
ce qu'il reçoit :

- **vitesse** : aucun Sonic ne va plus vite que 1800 pixels par seconde. Une téléportation n'est acceptée
  qu'après une mort, un coup, le départ, ou vers un point d'apparition ;
- **anneaux** : un joueur n'a que ceux qu'il a vraiment pris (anneaux de la carte qu'il a signalés,
  moniteurs à 10 anneaux, anneaux donnés par l'hôte), et ne peut pas en « perdre » plus qu'il n'en avait ;
- **bouclier et invincibilité** : seulement après avoir cassé le moniteur correspondant (20 s pour
  l'invincibilité).

Limite : l'hôte est lui-même un joueur, et personne ne le contrôle. Pour aller plus loin, il faudrait un
serveur de jeu qui fasse l'arbitre, c'est-à-dire faire tourner `Versus` sans écran.

## Protections diverses

- **Version** : chaque salon porte la version des messages (`Online::VERSION`). Un joueur dont la page est
  restée en cache avec une ancienne version voit « AUTRE VERSION  RECHARGE LA PAGE ». Les salons publics ne
  mélangent jamais deux versions.
- **Salon public pendant une partie** : l'hôte le ferme aux nouveaux venus et le rouvre au retour dans le
  salon. Un ami peut toujours entrer avec le code, il attend la fin de la partie.
- **Départs** : si un joueur part, un bot reprend son Sonic. Si l'hôte part, la partie s'arrête chez les
  autres (« L HOTE EST PARTI »), avec le classement du moment.

## Où est le code

| Fichier (jeu) | Rôle |
|---|---|
| `src/Multiplayer/Online.php` | la session : connexion, salon, noms, discussion, lancement |
| `src/Multiplayer/VersusNetwork.php` | la partie en ligne : messages, interpolation, anti-triche, compensation |
| `src/Multiplayer/Versus.php` | les règles du multijoueur (aussi hors ligne, contre les bots) |
| `src/Entities/GameObjectManager.php` | les objets de l'acte, et ce qui en est partagé (`objectListener`, `applyObject`) |
| `src/Scene/Screens.php` | les écrans EN LIGNE, salon, saisie du nom, du code et des messages |
| `start.sh` | lance la version desktop |

| Ailleurs | Rôle |
|---|---|
| [php-wasm-network](https://github.com/davidnurdin/php-wasm-network) | le réseau : client navigateur et natif, serveur relais |
| `demo/public/index.html` (php-wasm-sdl) | charge `php-wasm-network.js` et donne l'adresse du serveur (`SONIC_NET_URL`, `?net=`) |
| VPS, `/mimichatPROD/sonicGameServerPhp` | le serveur de production (copie : `server/deploy-traefik` de php-wasm-network) |

## Le serveur de production

- Adresse : `wss://sonic.mimichat.fr/ws` (l'ancien nom `ssh.mimichat.fr` marche encore). État :
  https://sonic.mimichat.fr/health.
- Conteneurs Docker : le relais PHP, Caddy (certificat HTTPS), coturn (TURN, pour WebRTC à travers les box
  strictes), et le site https://sonic.mimichat.fr avec sa base MariaDB
  ([sonicGameSite](https://github.com/davidnurdin/sonicGameSite)). Traefik, déjà présent sur la machine pour
  les autres sites, leur passe ce nom de domaine.
- Le TURN est annoncé sous `ssh.mimichat.fr` (`TURN_HOST`), un nom qui mène directement à la machine : le
  proxy Cloudflare devant `sonic.mimichat.fr` ne passe que le web.
- Mise à jour : `cd /mimichatPROD/sonicGameServerPhp && ./update.sh` (le relais), `./update-site.sh` (le
  site).
- Le secret TURN est dans `.env` (lisible par root seulement) et ne doit jamais aller sur GitHub.

## Développer et tester en local

```bash
# serveur local
php vendor/davidnurdin/php-wasm-network/server/bin/server.php        # ws://localhost:8090/ws
# version desktop sur ce serveur
SONIC_NET_URL=ws://localhost:8090/ws ./start.sh
# version navigateur sur ce serveur : ajouter ?net=ws://localhost:8090/ws à l'adresse de la page
```

Pour jouer à deux sur une même machine, ouvrez deux **fenêtres** et non deux onglets : un onglet en
arrière-plan ne fait plus tourner le jeu.
