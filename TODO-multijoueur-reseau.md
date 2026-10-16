# TODO : multijoueur en réseau (à faire plus tard)

> Note de travail temporaire. Le multijoueur actuel (menu MULTIJOUEUR) se joue **en local contre des
> Sonic pilotés par l'ordinateur**. Ce fichier rassemble ce qu'il faudra faire pour jouer **à plusieurs
> humains en réseau**, dans le navigateur (wasm) comme en PHP natif.

## Point de départ dans le code

Le code du jeu est déjà découpé pour qu'un joueur distant remplace un bot :

- `src/Multiplayer/Versus.php` : règles des 4 modes (course, drapeau, anneaux, deathmatch), contacts
  entre Sonic, scores, chrono, résultats ;
- `src/Multiplayer/Rival.php` : un participant, avec son `Player`, son équipe, ses anneaux, K.O. et morts ;
- `src/Multiplayer/BotBrain.php` : la manette d'un bot, sous la forme
  `think() -> ['dir', 'jump', 'down', ...]`.

Un joueur distant = un `Rival` dont la manette vient du réseau au lieu de `BotBrain`. Il faudra donc une
interface commune, par exemple `Brain::think(): array`, avec trois implémentations : `BotBrain`,
`LocalPadBrain` (clavier/tactile) et `RemoteBrain` (entrées reçues).

## Architecture réseau proposée

### Qui décide : un hôte qui fait autorité

- Un joueur (ou un serveur) est **l'hôte** : il simule la partie complète, c'est-à-dire `Versus`, la
  physique de tous les Sonic, les anneaux, les contacts et les scores.
- Les clients envoient **leurs entrées** (manette : gauche/droite/haut/bas/saut, numéro de frame), à
  60 Hz, en ne transmettant que ce qui change.
- L'hôte renvoie un **état** (positions, vitesses, état d'animation, anneaux, scores, chrono, drapeau,
  anneaux réapparus), 15 à 30 fois par seconde. On peut envoyer un état complet de temps en temps et des
  différences entre les deux.
- Côté client :
  - **prédiction** du Sonic local : il applique tout de suite ses propres entrées, puis se corrige
    quand l'état de l'hôte arrive ;
  - **interpolation** des autres Sonic, affichés avec environ 100 ms de retard entre deux états reçus.
- Pourquoi pas le *lockstep* (tout le monde simule tout, de façon déterministe) : la physique du jeu
  utilise des `float`, `microtime()` et des pas de temps variables. Elle n'est pas déterministe d'une
  machine à l'autre, et encore moins entre PHP natif 64 bits et wasm 32 bits.

### Transport : TCP, UDP, WebSocket ou WebRTC ?

| Option | Navigateur | Natif PHP | Remarques |
|---|---|---|---|
| **WebSocket** (TCP) | oui, natif | client : `stream_socket_client` + handshake, ou `ratchet/pawl` (ReactPHP, déjà en dépendance) | Simple et fiable. Inconvénient : un paquet perdu bloque les suivants (*head-of-line blocking*), d'où des à-coups en cas de perte |
| **WebRTC DataChannel** non fiable, non ordonné | oui | difficile (pas de pile WebRTC en PHP ; passer par un pont Node, `libdatachannel`, ou un serveur Go `pion`) | Équivalent d'UDP dans le navigateur : idéal pour les états. Signalisation nécessaire, par WebSocket |
| **UDP** brut | **non**, interdit dans le navigateur | `ext-sockets` ou `stream_socket_server('udp://…')` | Parfait en natif, inutilisable en wasm |
| **WebTransport** (QUIC, datagrammes) | Chrome, Firefox ; Safari partiel | serveur HTTP/3 nécessaire | Le plus « UDP-like » côté web, mais serveur plus complexe |

**Recommandation** :
1. **Étape 1** : WebSocket partout. Un serveur relais unique, éventuellement autoritaire, en
   PHP/ReactPHP (Ratchet) ou en Node. Messages binaires compacts (`pack()`), entrées numérotées par
   frame, états horodatés. C'est assez bon pour 2 à 6 joueurs avec un ping correct.
2. **Étape 2**, si les à-coups gênent : passer les états en WebRTC DataChannel
   (`ordered: false, maxRetransmits: 0`), et garder le WebSocket pour la signalisation, le lobby et les
   messages importants (début et fin de partie, scores).

### Côté wasm : faire passer les messages entre JS et PHP

PHP en wasm n'a pas de vrais sockets : les « connexions TCP » de PHP devront être simulées. Deux
approches :

- **A. File de messages via la page** (recommandée, la plus simple) :
  - JS ouvre le WebSocket ;
  - les messages reçus sont empilés dans une file JS ;
  - PHP les lit à chaque frame. Il faut une fonction exportée dans `source/phpw.c`, par exemple
    `phpw_net_recv()` / `phpw_net_send()`, qui appelle du JS (`EM_JS`) et renvoie la chaîne à PHP par
    une petite extension maison ou une fonction de la glue (`vrzno` est déjà dans le Dockerfile, en
    commentaire) ;
  - PHP voit une API non bloquante : `Net::send(string)` et `Net::poll(): array`.
- **B. Sockets emscripten** : emscripten peut transformer les sockets POSIX en WebSocket
  (`-sWEBSOCKET_URL`, `-lwebsocket.js`, ou le mode proxy `-sPROXY_POSIX_SOCKETS` avec un thread).
  PHP pourrait alors utiliser `fsockopen()` comme en natif, mais :
  - la boucle de jeu tourne dans `requestAnimationFrame`, donc tout appel bloquant gèle la page ;
  - il faut `stream_set_blocking(false)` partout ;
  - il faut un serveur `websockify` en face ;
  - il faut recompiler le moteur.

  Plus « transparent », mais plus fragile.

Dans les deux cas, il faudra une **interface PHP commune** `Transport` (`connect`, `send`, `poll`,
`close`) avec une implémentation wasm (pont JS) et une implémentation native (stream non bloquant ou
ReactPHP). Le jeu ne dépend alors pas de la plateforme.

### Serveur

- **Relais / lobby** :
  - création de salon : code à 4 lettres, mode, act, nombre de places ;
  - liste des joueurs, prêt/pas prêt, lancement ;
  - relais des messages, et éventuellement simulation de `Versus` côté serveur (*headless*, PHP natif
    sans SDL, en séparant la logique du rendu). C'est la seule façon d'empêcher la triche.
- Hébergement : un petit VPS, ou un service WebSocket gratuit pour les tests. GitHub Pages ne sert que
  des fichiers statiques : le serveur doit être ailleurs, en `wss://` obligatoirement puisque la page est
  en HTTPS.
- Les places vides d'un salon peuvent être prises par des bots (`BotBrain`), déjà prêts.

## Points à traiter

- **Synchronisation de départ** : graine aléatoire commune (`mt_srand`) pour les apparitions, le
  drapeau et les anneaux qui réapparaissent ; act et options identiques ; compte à rebours lancé par
  l'hôte.
- **Objets du niveau** : aujourd'hui `GameObjectManager` ne connaît qu'un seul Sonic (badniks, ressorts,
  moniteurs, plateformes). En réseau, chaque client simule ses objets autour de lui, et seuls les
  événements importants (moniteur cassé, badnik détruit) sont envoyés. Sinon, il faut rendre
  `GameObjectManager` multi-joueurs.
- **Anneaux** : la carte des anneaux (bits des tuiles) doit être la même partout. L'hôte décide qui
  ramasse et envoie la liste des anneaux qui disparaissent ou réapparaissent.
- **Contacts entre Sonic** : décidés par l'hôte uniquement ; le client affiche le résultat.
- **Latence** : afficher le ping ; compenser les contacts avec un petit retour en arrière côté hôte
  (*lag compensation*) si besoin.
- **Déconnexion** : un bot reprend la place, ou le joueur est retiré ; possibilité de se reconnecter.
- **Mobile** : le réseau mobile change souvent de latence ; prévoir un tampon d'interpolation adaptatif.
- **Sécurité** : valider les entrées côté serveur, limiter le débit, ne jamais faire confiance au score
  envoyé par un client.
- **Tests** : un mode « faux réseau » local (deux `Versus` dans le même processus reliés par une file
  avec retard et perte simulés), pour mettre au point sans serveur.
