# Sonic PHP : référence détaillée

Ce fichier complète SKILL.md. Les docs de chaque dépôt vont plus loin. Il faut les lire quand on touche à
la partie concernée :

| Doc | Sujet |
|---|---|
| `php-wasm/doc/fonctionnement.md` | tout le fonctionnement navigateur : couches, `phpw.c`, boucle, rendu, cache, FS, loader, mobile, options, multijoueur local et en ligne (classes, formats) |
| `php-wasm/doc/compilation.md` | compiler le moteur de A à Z |
| `php-wasm/doc/multijoueur-en-ligne.md` | le multijoueur en ligne expliqué simplement (pour humains) |
| `php-wasm/TODO-multijoueur-reseau.md` | état et limites du multijoueur en ligne |
| `php-wasm-network/doc/guide.md` | le réseau complet : WebSocket, WebRTC, STUN / TURN, API PHP, serveur, protocole, déploiement |
| `php-wasm-network/server/deploy-traefik/README.md` | le déploiement de prod |
| `sonicGameSite/README.md` | le site : dev, variables, prod, sauvegarde de la base |
| `sonicGameSite/TODO-editeur-de-niveau.md` | les 7 étapes de l'éditeur de niveau (pas commencé), le format des niveaux du jeu |

## 1. Le jeu : `/home/david/poc/sonicGamePhp`

Le Sonic de la Master System réécrit en PHP, fidèle à la ROM : physique, tables, objets et sprites tirés
de la ROM. C'est la **version de référence**. Le même code tourne en natif (PHP 8.2 + extensions
`php-sdl*`, compilées dans les dossiers du même nom, non suivis par la sync) et dans le navigateur
(copie dans php-wasm).

- `app.php` : point d'entrée (Symfony DI + Console), puis `Game::run()`. La boucle est un event loop
  ReactPHP.
- `src/` :
  - `Game.php` : écrans, enchaînement, options ;
  - `Scene/` : Scene, Camera, HUD, `Screens.php` (menus, écrans en ligne, saisie du nom, du code et des
    messages), TileSet ;
  - `Entities/` : `Player.php` (Sonic, animations, physique ROM), `GameObjectManager.php` (objets de
    l'acte, et ce qui est partagé en ligne : `objectListener`, `applyObject`), `Objects/` (un fichier par
    objet de la ROM), `Physics/` ;
  - `Level/` : `LevelManager.php` (`convertLevelToTileSet` : zone → tileset), `Level.php` ;
  - `Multiplayer/` :
    - `Versus.php` : règles du multijoueur (course, drapeau, anneaux, deathmatch), avec des bots ;
    - `BotBrain.php`, `Rival.php` ;
    - `Online.php` : session en ligne (connexion, salons public / privé, noms, discussion, `VERSION`,
      `DEFAULT_URL = wss://sonic.mimichat.fr/ws`) ;
    - `VersusNetwork.php` : partie en ligne (messages STATE / SNAPSHOT / EVENT / CHAT, interpolation à
      120 ms, anti-triche et compensation de latence côté hôte) ;
  - `Renderer/` (SDL, `Window.php` : fenêtre en `SDL_WINDOWPOS_UNDEFINED`, `SdlImage.php` : découpe des
    images de plus de 4064 px), `Save/` (`Options`, `BestTimes`, `GhostRecorder`), `SoundManager/`,
    `InputManager/` (clavier, tactile).
- `assets/` :
  - `levels/levelN.{bin,meta,objects.php,solidity}` : `.bin` = FW×FH octets de blocs de 32 px ; `.meta`
    lu par `eval` ; `.objects.php` lu par `require` ;
  - `tileset/levels/tilesetT*.png` : bandes de 32 px de haut, variantes `-cycleC`, `-fg`, `-water` ;
  - `tileset/sprites/` : Sonic et ses couleurs `-red`, `-green`… (couleur transparente RGB 0,72,0),
    planches ROM ;
  - `fonts/NiseSegaSonic.TTF`, sons.
- Sauvegardes dans `var/` : `options.json`, `besttimes.json`, `ghosts/`. Dans le navigateur, `var/` est
  monté en IDBFS.
- Constantes données par la page web (absentes en natif) : `SONIC_MOBILE`, `SONIC_FRAME_INTERVAL`,
  `SONIC_CONTAINER_CACHE`, `SONIC_NET_URL`, `SONIC_PLAYER_NAME`. En natif : variable d'environnement
  `SONIC_NET_URL`.
- Le nom du compte du site arrive par `?name=` → `SONIC_PLAYER_NAME`, appliqué dans `Game.php` (après
  `new Options`) avec `Online::cleanName()` (8 caractères, A-Z et 0-9).
- Réseau : dépendance Composer `davidnurdin/php-wasm-network: dev-main` (dépôt VCS GitHub). `vendor/`
  n'est pas suivi, `composer.lock` l'est.
- `start.sh` : lance la version desktop (`SONIC_PHP=php8.3 ./start.sh` pour un autre PHP).
- Replays : `Save/ReplayRecorder.php` enregistre chaque partie (acte seul, match contre l'ordinateur ou en
  ligne : positions et images des Sonic à 30 i/s, blocs changés) dans `var/replays/last.json.gz`, puis
  `Bridge::send(['t' => 'replay', 'file' => ...])` ; la page l'envoie au site. `Scene/ReplayPlayer.php` le
  rejoue quand `SONIC_REPLAY` (chemin du fichier) est défini. Un match en ligne a un id commun
  (`startConfig['id']`, `Versus::matchId()`).
- Test natif d'un replay : `var/` appartient à root sur le PC (start.sh passe par sudo) ; pour un script de
  test lancé sans sudo, créer d'abord `var/replays` à soi (`sudo -n mkdir -p var/replays && sudo -n chown
  david: var/replays`), sinon rien n'est écrit (sans erreur).

## 2. Le moteur et la page : `/home/david/poc/wasm/lite/php-wasm` (dépôt `php-wasm-sdl`)

- `Dockerfile` + `docker-bake.hcl` construisent le moteur :
  - emsdk 3.1.35, php-src `PHP-8.3.0`, `--enable-embed=static --disable-all` ;
  - extensions : sdl (fork davidnurdin/php-sdl), sdl_image, sdl_mixer, sdl_ttf (kea), gd+png, zlib,
    mbstring, ctype, tokenizer, bcmath, **wasmnet** ;
  - wasmnet vient de php-wasm-network au commit `ARG NETWORK_REF=…`, avec
    `--js-library …/js/library_wasmnet.js` ;
  - sortie : `build/php-web.{mjs,wasm}`.
- `source/phpw.c` : la glue C. `phpw_run` évalue le code PHP de la page. La boucle est
  `emscripten_set_main_loop` (rAF) plus un `setTimeout(0)` pour les événements, et chaque appel fait un tick
  ReactPHP.
- `config*.sdl` : les `config.m4` de remplacement des extensions SDL (en-têtes Debian, ports emscripten).
- `demo/src/` : ce qui est packagé (monté en `/src`) :
  - `demo/src/src` : le jeu (gitlink vers sonicGamePhp, copie partielle tenue par `sync-game.sh`) ;
  - `sync-game.exclude` : ce qui n'est pas copié (`.git`, `.idea`, `tools`, `var`, `php-sdl*`, `cache`…) ;
  - `patches/game/` : patches propres au wasm (aucun aujourd'hui : le jeu est identique des deux côtés).
- `demo/public/` : la page, recopiée à la racine par `package.sh --deploy`, et la racine est ce que
  Pages publie :
  - `index.html` :
    - lit `version.json` sans cache ;
    - garde le wasm dans Cache Storage ;
    - monte IDBFS ;
    - définit `window.SONIC_NET_URL = 'wss://sonic.mimichat.fr/ws'` (ou `?net=`) ;
    - construit le prélude PHP des `define()`, avec les valeurs d'URL en
      `base64_decode('…')` (`phpString`) ;
  - `loader.js` (écran de chargement), `mobile.js` (détection, plein écran, orientation), `controls.js`
    (croix et boutons tactiles) ;
  - `php-wasm-network.js`, copié par `package.sh` depuis le `vendor/` du jeu ;
  - `manifest.webmanifest`, `assets/` (police du loader).
- `tools/dump-container.php` : `package.sh` précompile le container Symfony du jeu
  (`demo/src/src/cache/container.php`, si un PHP natif est là).
- `go.sh` : ancien script, remplacé par `build-engine.sh` + `package.sh`.
- Pages : `.github/workflows/static.yml` publie toute la racine à chaque push sur main. `index.html`
  reste en cache HTTP environ 10 min, le reste est versionné.

## 3. Le réseau : `/home/david/poc/php-wasm-network`

- `php/src` : l'API PHP `PhpWasmNetwork\Network::connect()`. Elle prend `WasmConnection` dans le
  navigateur (par l'extension wasmnet) et `NativeConnection` en natif (WebSocket).
- `ext/wasmnet` (C) et `js/library_wasmnet.js` sont compilés dans le moteur.
- `js/php-wasm-network.js` (`window.PhpWasmNetwork`) : WebSocket et WebRTC (DataChannels fiables et non
  fiables, STUN / TURN). La page le charge.
- `server/bin/server.php` : le relais en PHP pur. Il gère les salons (codes de 4 lettres, salon public avec
  `quickJoin` / `lockRoom`), le relais des messages, la signalisation WebRTC, des identifiants TURN
  temporaires (HMAC de `TURN_SECRET`) et `/health` (`ok`, `rooms`, `public`, `clients`).
- `server/deploy-traefik/` : la copie sans secrets de la prod (`docker-compose.yml`, `Caddyfile`,
  `.env.example`, `update.sh`, `update-site.sh`, README).
- Transport automatique côté jeu : WebRTC direct entre navigateurs, sinon le relais. Le desktop passe
  toujours par le relais.

## 4. Le site : `/home/david/poc/sonicGameSite`

- Symfony 8.1 (skeleton) avec Twig, Security, Doctrine ORM et migrations, Form, Validator, RateLimiter,
  asset, mercure-bundle. Pas d'AssetMapper ni de framework JS.
- Routes :
  - `/` : visiteur, l'accueil (JOUER, compteurs, nombre de membres) ; connecté, le hall des salons
    (`home/lobby.html.twig`, `public/js/lobby.js` qui relit `/salons.json` toutes les 5 s) ;
  - `/salons.json` : `OnlineStats` (relais `RELAY_HEALTH_URL?rooms`, cache 3 s), seulement les salons
    `meta {game: sonic, v: OnlineStats::VERSION}` non vides ;
  - `/salon/nouveau?type=public|prive&mode=&level=` (connecté), `/salon/rejoindre?code=`, `/salon/{CODE}` :
    la page du salon (`public/js/room.js`, spectateur du relais `RELAY_WS_URL`) ;
  - `/statistiques` (connecté) et `POST /api/stats` (la page du jeu, `text/plain`, jeton `StatsToken`,
    plafonds par envoi, limiteur `stats` 240/h par compte, CORS pour l'origine de `GAME_URL` et localhost) ;
  - `/jouer` : `GAME_URL?lang=&name=&st=&site=` ;
  - `/historique` (`?voir=moi` : mes parties), `POST /api/replay` (`{st, r: base64 du gzip}`, limiteur
    `replay` 60/h, 4 Mo, 300 gardés par compte, un match en ligne une fois par joueur) et
    `GET /api/replay/{id}` (le gzip tel quel, CORS `*`). Revoir = `GAME_URL?lang=&site=&back=&replay=ID` :
    la page télécharge le replay avant de lancer PHP (`SonicSite.loadReplay`, `SONIC_REPLAY`) ;
  - `/joueurs` (membres paginés), `/sitemap.xml`, `/api/jeu` (joueurs dans le jeu, `GamePresence`) ;
  - `/langue/{fr|en}?back=/chemin` : cookie `lang` (sinon `Accept-Language`, `LocaleSubscriber`) ;
  - `/inscription`, `/connexion`, `/deconnexion`, `/editeur`, `/presence`.
- `PlayerStats` (table `player_stats`, clé = l'utilisateur, `ON DELETE CASCADE`) : `totals` en JSON, les
  clés de `Stats.php` du jeu. `delete from user` efface aussi les statistiques.
- Traductions : `translations/messages.en.php` et `validators.en.php`, la clé est le texte français des
  gabarits (`'…'|trans`). Les textes JS sont passés par des `data-i18n` en JSON.
- Salon côté page (`room.js`) : HELLO `{name, site:true}` à l'arrivée et HELLO `{re:true}` en réponse à
  `peer-join` / `watcher-join` ; CHAT (type 7, A-Z 0-9 .!?-, 30 car., 1 par seconde) ; SITE (type 8, entre
  pages : mode / zone tant que personne n'est dans le jeu, `go` quand quelqu'un lance le jeu) ; `info` du
  salon tant que l'hôte vaut -1. Sans compte : HELLO sans nom (le jeu renvoie la liste, sans l'annoncer).
- `User` :
  - `username` de 3 à 8 caractères A-Z et 0-9, mis en majuscules, unique ;
  - `email` facultatif, forme vérifiée, jamais affiché ;
  - `password` haché, `roles`, `createdAt`.
- Connexion : form_login avec CSRF, `login_throttling` à 5 essais, remember_me de 30 jours. Le nom est
  insensible à la casse.
- Inscription :
  - un honeypot `website` ;
  - une limite de 10 par heure et par IP (`limiter.registration`) ;
  - connexion automatique ensuite.
- Visiteurs en direct (`public/js/sonics.js` + `PresenceController`) :
  - hub Mercure 1.0 de FrankenPHP, avec `subscriptions` et `transport local` (aucun historique) ;
  - le cookie signé (1 h) autorise le sujet `urn:sonicphp:presence`, la liste
    `/.well-known/mercure/subscriptions/exact/urn%3Asonicphp%3Apresence` et ses événements ;
  - le payload contient `name` et une clé `k`, qui permet à la page de reconnaître son propre abonnement ;
  - le canvas plein écran est derrière la page. Les Sonic marchent sur l'herbe du pied de page (ou en bas
    de l'écran) ;
  - comportements : runner, jumper, spinner, idler, follower, et `me` (suit la souris ou le doigt) ;
  - au plus 30 Sonic dessinés. `prefers-reduced-motion` est respecté.
- Images de `public/img/`, refaites par `tools/` :
  - `sonics.png` : 17 images × 6 couleurs ;
  - `clouds.png` : nuages de Green Hill acte 1, 8192 px, en palette.
- Docker :
  - `Dockerfile` : FrankenPHP 1 php8.4 alpine, extensions intl, opcache, pdo_mysql, zip ; utilisateur
    `www-data` ; port 8080 ;
  - `docker/Caddyfile` : HTTP seulement, le hub Mercure, cache d'une heure sur css, js et img ;
  - `docker/entrypoint.sh` : attend la base, joue les migrations, chauffe le cache.

## 5. La prod : VPS `ssh.mimichat.fr`, `/mimichatPROD/sonicGameServerPhp`

Les sites et services d'autres projets tournent sur la même machine. On n'y touche pas.

```
navigateur ──https──▶ (Cloudflare, quand le nuage orange est activé) ──▶ Traefik 2.2 :443
   Traefik : routeur TCP HostSNI(sonic, ssh) en passthrough ──▶ caddy:443 (Let's Encrypt de sonic et ssh)
             routeur HTTP :80 ──▶ caddy:80 (challenge ACME, redirection vers https)
   caddy : /ws*, /health ──▶ relay:8090        le reste ──▶ site:8080 (X-Forwarded-For = IP du visiteur)
           ssh.mimichat.fr : le relais aussi, les pages redirigent vers sonic.mimichat.fr
   site (FrankenPHP + Mercure) ──▶ db (MariaDB, réseau sitedb)
coturn : network_mode host, port TURN_PORT=3480 udp/tcp, relais 49300-49340/udp, annoncé sous TURN_HOST=ssh.mimichat.fr
```

- Le dossier contient :
  - `docker-compose.yml`, `Caddyfile`, `.env` (secrets, chmod 600), `.env.example`, `README.md` ;
  - `update.sh` et `update-site.sh` ;
  - `php-wasm-network/` et `sonicGameSite/` (clones git) ;
  - `backup/` : copies datées avant chaque modification.
- Variables de `.env` (noms seulement) :
  - `DOMAIN=sonic.mimichat.fr`, `DOMAIN_ALIAS=ssh.mimichat.fr` ;
  - `PUBLIC_IP`, `PRIVATE_IP` (NAT) ;
  - `TURN_PORT`, `TURN_MIN_PORT`, `TURN_MAX_PORT`, `TURN_SECRET`, `TURN_HOST` ;
  - `SITE_APP_SECRET`, `SITE_MERCURE_SECRET`, `SITE_DB_PASSWORD`, `SITE_DB_ROOT_PASSWORD`.
- Vraie IP des visiteurs : Caddy fait confiance aux réseaux privés et lit `CF-Connecting-IP`, sinon
  `X-Forwarded-For`. Sans le proxy Cloudflare devant sonic, tout le monde a l'IP de Traefik. Le Caddyfile
  marche en SSL Cloudflare « Flexible » (il se fie à `CF-Visitor`) comme en « Full ».
- Sauvegarde de la base :
  `docker compose exec -T db sh -c 'mariadb-dump -usonic -p"$MARIADB_PASSWORD" sonic' | gzip > backup/sonic-$(date +%F).sql.gz`.
- Les DNS sont chez Cloudflare (zone mimichat.fr). Ce n'est pas accessible d'ici : c'est David qui y
  intervient.

## 6. Vérifications utiles

```bash
# tout est poussé ?
for r in /home/david/poc/sonicGamePhp /home/david/poc/wasm/lite/php-wasm /home/david/poc/php-wasm-network /home/david/poc/sonicGameSite; do
  git -C $r fetch -q; printf "%-40s %s | %s\n" $r "$(git -C $r status --short | grep -v 'demo/src/src' | wc -l) modifs" "$(git -C $r status -sb | head -1)"; done
# Pages à jour ?
diff <(curl -s https://davidnurdin.github.io/php-wasm-sdl/version.json) /home/david/poc/wasm/lite/php-wasm/version.json && echo Pages OK
# prod
ssh ssh.mimichat.fr 'cd /mimichatPROD/sonicGameServerPhp && docker compose ps --format "{{.Service}} {{.Status}}"'
curl -s https://sonic.mimichat.fr/health
```
