---
name: sonic-php
description: Tout le projet Sonic PHP de David, sur son PC et en production, et comment mettre à jour chaque partie. Il y a quatre dépôts. Le jeu sonicGamePhp (PHP + SDL). Le moteur php-wasm-sdl (PHP compilé en WebAssembly, publié sur GitHub Pages). Le réseau php-wasm-network (WebSocket / WebRTC, serveur relais). Le site sonicGameSite (Symfony, sonic.mimichat.fr). S'y ajoute le VPS ssh.mimichat.fr (/mimichatPROD/sonicGameServerPhp). À utiliser dès qu'il est question de modifier, tester, « prod », déployer ou pousser le jeu, la version navigateur, le moteur wasm, le multijoueur en ligne, le serveur relais, le site, sa base MariaDB, Mercure, le VPS, ou de comprendre comment les morceaux tiennent ensemble.
---

# Sonic PHP : le projet entier, et comment le mettre à jour

Lis ce fichier en entier, puis [reference.md](reference.md) (le détail de chaque dépôt, des formats et des
pièges). Ils doivent suffire pour comprendre le projet sans tout redécouvrir.

## Qui, comment

- David Nurdin (GitHub `davidnurdin`). Il écrit en français : **réponses, docs, messages de commit en
  français**. Les commentaires du code sont en anglais (comme le code existant). Pour les docs, un style
  simple et concret, sans jargon inutile.
- « prod tout » ou « prod » veut dire : commit, push, déploiement (Pages et/ou VPS), **puis vérification en
  ligne**, et aucun dépôt avec des modifications en attente à la fin.
- Fin de chaque message de commit :
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` (ou l'attribution donnée par le rappel système
  du moment).
- `gh` est connecté au compte davidnurdin. Il ne faut jamais utiliser un token collé dans la conversation.

## La carte

| Partie | Sur le PC | GitHub | En ligne |
|---|---|---|---|
| **Jeu** (PHP 8.2 natif + extensions SDL ; c'est la version de référence) | `/home/david/poc/sonicGamePhp` | `davidnurdin/sonicGamePhp` | – (desktop : `./start.sh`) |
| **Moteur + page web** (PHP 8.3 en wasm, la page qui lance le jeu) | `/home/david/poc/wasm/lite/php-wasm` (ce dossier) | `davidnurdin/php-wasm-sdl` | https://davidnurdin.github.io/php-wasm-sdl/ (GitHub Pages, workflow `static.yml` à chaque push sur main) |
| **Réseau** (lib PHP + extension C wasmnet + JS navigateur + serveur relais) | `/home/david/poc/php-wasm-network` | `davidnurdin/php-wasm-network` | `wss://sonic.mimichat.fr/ws`, `https://sonic.mimichat.fr/health` |
| **Site** (Symfony 8.1, PHP 8.4, FrankenPHP + Mercure, MariaDB 11.4) | `/home/david/poc/sonicGameSite` | `davidnurdin/sonicGameSite` | https://sonic.mimichat.fr |
| **Serveur de prod** (relais, coturn, Caddy, site, base) | copie sans secrets : `php-wasm-network/server/deploy-traefik` | (dans php-wasm-network) | VPS `ssh ssh.mimichat.fr` (root), dossier `/mimichatPROD/sonicGameServerPhp` |

Ce qui relie les parties :

```
sonicGamePhp ──(sync-game.sh : copie)──▶ php-wasm/demo/src/src ──(package.sh)──▶ php-web.data ──▶ GitHub Pages
      │ composer (dev-main, dépôt VCS)                                                   ▲
      ▼                                                                                  │
php-wasm-network ── php/ (lib PHP) et js/php-wasm-network.js : par le vendor/ du jeu ─────┤
                 └─ ext/wasmnet + js/library_wasmnet.js : compilés DANS le moteur (Dockerfile, NETWORK_REF)
                 └─ server/ : le relais, lancé sur le VPS (clone dans /mimichatPROD/sonicGameServerPhp/php-wasm-network)
sonicGameSite ── JOUER ──▶ GitHub Pages ?name=&lang=&st=&site= (+ ?room=&mode=&level=&back= depuis un salon)
              └─ pages des salons : spectateurs du relais (WebSocket) ; /health?rooms ; POST /api/stats ◀── la page du jeu
```

## Quoi mettre à jour selon ce qui a changé

| Changement | À faire (détails plus bas) |
|---|---|
| Code ou assets du **jeu** | A (jeu), puis B (page web) |
| Page web : `index.html`, `loader.js`, `mobile.js`, `controls.js` dans `demo/public/` | B (sans `sync-game` si le jeu n'a pas bougé) |
| C du moteur : `Dockerfile`, `config*.sdl`, `source/phpw.c` | C (moteur, ~25 min), puis B |
| Réseau, **lib PHP** (`php/src`) ou **JS navigateur** (`js/php-wasm-network.js`) | D1, puis `composer update` dans le jeu (A), puis B ; si le serveur est concerné, E1 |
| Réseau, **extension C** (`ext/wasmnet`) ou `js/library_wasmnet.js` | D1, puis monter `NETWORK_REF` du Dockerfile, C, B |
| Réseau, **serveur relais** (`server/bin`, `php/src` côté serveur) | D1, puis E1 (`./update.sh` sur le VPS) |
| Protocole entre joueurs (messages du jeu) | monter `Online::VERSION` (jeu, `src/Multiplayer/Online.php`), puis A et B |
| **Site** | F (local), puis E2 (`./update-site.sh` sur le VPS) |
| Config du serveur de prod (compose, Caddyfile) | E3 |

## A. Le jeu (`/home/david/poc/sonicGamePhp`)

1. Modifier, puis tester en natif : `./start.sh`. Il utilise `php8.2` avec les extensions SDL ; il passe par
   sudo seulement si `var/` appartient à root. `SONIC_NET_URL=ws://localhost:8090/ws ./start.sh` vise un
   relais local.
2. Pour une nouvelle version du réseau : `composer update davidnurdin/php-wasm-network`. Le lock pointe sur
   un commit de main. Il faut le commiter.
3. Commit + push sur main.

## B. La page web et le paquet (ce dossier)

```bash
cd /home/david/poc/wasm/lite/php-wasm
./sync-game.sh                       # jeu -> demo/src/src (rsync, vendor/, tranches d'images, patches/game)
./package.sh --deploy                # demo/src -> php-web.data, injection dans php-web.mjs, version.json, copie à la racine
./serve.sh root 8080                 # test local de ce que Pages publiera (http://127.0.0.1:8080/)
```

- `demo/src/src` est un **dépôt git embarqué** (gitlink, sans `.gitmodules`) : une copie partielle du
  jeu, tenue par `sync-game.sh`. Il est normal que `git status` y voie des fichiers supprimés. Ce qui
  compte, c'est le gitlink. Il faut l'aligner sur le dernier commit du jeu **avant** de commiter :
  ```bash
  git -C demo/src/src fetch -q origin && git -C demo/src/src -c submodule.recurse=false reset -q --mixed origin/main
  git add demo/src/src
  ```
- Modifier la page dans `demo/public/`. `package.sh --deploy` la copie à la racine du dépôt (ce que Pages
  publie), avec les empreintes `?v=`.
- Commit, push, puis :
  ```bash
  gh run watch $(gh run list --limit 1 --json databaseId --jq '.[0].databaseId') --exit-status
  curl -s https://davidnurdin.github.io/php-wasm-sdl/version.json    # doit égaler ./version.json
  ```
- Raccourci : `./all.sh` (sync + moteur + paquet + serveur local). `SKIP_ENGINE=1 ./all.sh` saute le moteur.
- Sens inverse (modif faite dans `demo/src/src`) : `./sync-to-game.sh [--check]`, puis commit dans le jeu,
  puis `./sync-game.sh`.

## C. Le moteur wasm (ce dossier, rare et long)

`./build-engine.sh` construit PHP 8.3 + SDL + wasmnet avec `docker buildx bake` (builder `wasm-builder`,
cache dans `.buildx-cache/`) et produit `build/php-web.mjs` + `build/php-web.wasm`. Compter ~25 min à
froid. Ensuite B. Le détail est dans `doc/compilation.md`.

## D. Le réseau (`/home/david/poc/php-wasm-network`)

- D1 : modifier, tester, commit, push sur main. Tests : `php tests/native-test.php`,
  `tests/browser-test.html`. Serveur local : `php server/bin/server.php` (`ws://localhost:8090/ws`).
- Le guide complet est dans `doc/guide.md`. Les fichiers de prod sont dans `server/deploy-traefik/`, avec
  des valeurs d'exemple, **jamais de secrets ni d'IP réelles**.

## E. Le VPS (`ssh ssh.mimichat.fr`, `/mimichatPROD/sonicGameServerPhp`)

Services `docker compose` : `relay`, `caddy`, `coturn`, `site`, `db`. Détail dans reference.md.

- **E1, le relais** : `cd /mimichatPROD/sonicGameServerPhp && ./update.sh`. Il fait git pull de
  `php-wasm-network/`, puis `up -d --build`. Le redémarrage du relais coupe les parties en cours : regarde
  d'abord `curl -s https://sonic.mimichat.fr/health` (`clients`, `rooms`).
- **E2, le site** : `./update-site.sh`. Il fait git pull de `sonicGameSite/`, reconstruit le service `site`,
  et les migrations Doctrine sont jouées au démarrage du conteneur.
- **E3, la config** (compose, Caddyfile, `.env`) :
  1. modifier la copie `php-wasm-network/server/deploy-traefik/` ;
  2. **sauvegarder** sur le VPS (`cp -p X backup/X.$(date +%Y%m%d-%H%M%S)`, et `chmod 600` pour `.env`) ;
  3. copier avec scp ;
  4. `docker compose config -q`, puis `docker compose up -d`.

  Un Caddyfile modifié n'est **pas** relu par `up -d` (c'est un fichier monté) :
  `docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`. Valider d'abord en local :
  `docker run --rm -e DOMAIN=a.test -e DOMAIN_ALIAS=b.test -v $PWD/Caddyfile:/etc/caddy/Caddyfile:ro caddy:2.8-alpine caddy validate --config /etc/caddy/Caddyfile`.
- Après **toute** intervention, vérifier :
  ```bash
  for h in sonic.mimichat.fr caramail.tchats.net chat.caramail.tv chat.mimichat.fr zefotag.com; do
    printf "%-22s %s\n" $h "$(curl -s -o /dev/null -m 15 -w '%{http_code}' https://$h/)"; done
  curl -s https://sonic.mimichat.fr/health
  ```
  Si sonic ne répond plus : remettre la sauvegarde **tout de suite**, puis chercher la cause.

### Règles du VPS (demandées par David : « essaye de rien planter »)

- Ne **jamais** modifier Traefik (`/mimichatPROD/traefik`, image `traefik:chevrotin` = 2.2.11) ni les autres
  services : mimichat, caramail, tchats, zefotag, et le coturn de chat.mimichat.fr. Ne jamais réutiliser
  ce coturn ni son secret. On ne touche qu'aux labels de nos conteneurs.
- Les secrets (`TURN_SECRET`, `SITE_APP_SECRET`, `SITE_MERCURE_SECRET`, `SITE_DB_PASSWORD`,
  `SITE_DB_ROOT_PASSWORD`) ne sont que dans le `.env` du VPS (chmod 600). Ne jamais les afficher (lister les
  noms avec `grep -o '^[A-Z_]*=' .env`), ne jamais les commiter. Les IP du VPS ne vont pas sur GitHub non plus.
- Un nouveau secret se génère sur le VPS, sans l'afficher :
  `echo "NOM=$(openssl rand -hex 32)" >> .env`.

## F. Le site (`/home/david/poc/sonicGameSite`)

- **Dev rapide sans Mercure** : MariaDB dans Docker (`sonic-mariadb-dev`, 127.0.0.1:13306, base, compte
  `sonic` / `devpass`), `.env.local` (git-ignoré), `php -S 127.0.0.1:8000 -t public`. Commandes exactes dans
  le README du site.
- **Test complet, hub Mercure compris** : l'image de prod en local (`docker build -t sonic-site:dev .`, puis
  `docker run --network host ...`, voir le README) sur http://127.0.0.1:8080/. Pour simuler des
  visiteurs : prendre un cookie sur `/presence`, puis ouvrir `curl -N` sur
  `/.well-known/mercure?match=urn%3Asonicphp%3Apresence`.
- **Après un fichier modifié dans `public/`** (css, js, img) : monter `framework.assets.version` dans
  `config/packages/framework.yaml` (cache d'une heure).
- **Après un test d'inscription** : effacer les comptes (`delete from user`), en local **et en prod**, où
  David ne veut aucun compte de test. En prod :
  ```bash
  ssh ssh.mimichat.fr 'cd /mimichatPROD/sonicGameServerPhp && docker compose exec -T db sh -c "mariadb -usonic -p\"\$MARIADB_PASSWORD\" sonic -e \"select id,username,email,created_at from user\""'
  ```
  Remettre aussi à zéro la limite d'inscriptions (10 par heure et par IP) :
  `docker compose exec -T site php bin/console cache:pool:clear cache.rate_limiter`.
- Commit, push, puis E2, puis vérifier les pages, `/presence` (cookie `__Secure-mercure_access_token`) et
  le flux Mercure.

## Pièges connus

- **Ne jamais** utiliser `pkill -f` / `pgrep -f` avec un motif présent dans ta propre ligne de commande : ça
  tue ton shell (exit 144). Tuer par PID enregistré.
- Un Chrome headless ne termine pas sur une page qui garde une connexion SSE (Mercure) ouverte. Utiliser
  le Chrome de David (extension) ou curl.
- Traefik 2.2 ne connaît pas le PROXY protocol sur un service TCP (arrivé en 2.4). Sur ce VPS, Traefik n'a
  **aucun certificat** : les autres sites passent par Cloudflare. sonic.mimichat.fr est en passthrough TLS
  jusqu'à Caddy (Let's Encrypt). La vraie IP des visiteurs n'existe donc que si sonic passe par le **proxy
  Cloudflare** (`CF-Connecting-IP`). `ssh.mimichat.fr` doit rester en « DNS seulement » : c'est le nom du
  TURN (port 3480), que Cloudflare ne relaie pas.
- Valeurs d'URL passées au PHP wasm : toujours en base64 (`phpString()` dans `index.html`), jamais
  interpolées telles quelles (risque d'injection de code par `?net=` ou `?name=`).
- `demo/src/src` : ne jamais y faire de vrais commits. C'est une copie : on commite dans le jeu.
- **PHP du navigateur** : les entiers font 32 bits (`hexdec('ffffffff')` y est un flottant) et il n'y a pas
  d'iconv. Ce qui marche en natif peut casser en wasm : tester aussi dans la page.
- **Tester la page wasm sans l'extension Chrome** : un Chromium normal dans le Xvfb `:77` (pas headless : en
  headless, captures et `Runtime.evaluate` restent bloqués), avec `--use-gl=angle --use-angle=swiftshader
  --enable-unsafe-swiftshader` (sans WebGL, le jeu meurt sur sa première texture), piloté par le port de
  débogage (CDP, `websockets` en Python), captures avec `import -window root`. Les éditeurs ont un
  `beforeunload` : changer de page avec des modifications non enregistrées bloque l'onglet sur « Quitter le
  site ? ». Ouvrir un nouvel onglet, ou tuer ce Chromium de test.
- Symfony 8 met le CSRF en mode « stateless » par défaut. Le site le force en sessions
  (`config/packages/csrf.yaml`) pour que les formulaires marchent aussi sans JS et avec curl.
- Les touches simulées (extension Chrome, CDP, `KeyboardEvent` en JS) n'arrivent **pas** au jeu wasm : on ne
  peut pas piloter le jeu dans le Chrome automatisé (même la version en ligne). Pour tester un match :
  le jeu natif sous `Xvfb :77` + touches par XTEST (python-xlib, `Xlib.ext.xtest.fake_input`), capture
  avec `import -window root`. Constantes du site (SONIC_ROOM...) : un petit script PHP qui les `define()`
  puis fait `require app.php`.
- Le jeu ↔ la page : PHP écrit des lignes JSON dans `/tmp/sonic-bridge` (`Bridge.php`), lues par
  `index.html` (`window.SonicSite`) : `share`, `back`. Statistiques : `var/stats.json` (`Stats.php`),
  envoyées par la page au site avec le jeton `st` (`sonicStatsToken` dans localStorage).
- Les messages de salon du jeu vont aussi aux spectateurs (`Online::ALL` → `Protocol::WATCHERS`) : une page
  du site ne reçoit pas les broadcast normaux (WebRTC de pair à pair). Changer le protocole : monter
  `Online::VERSION` **et** `OnlineStats::VERSION` du site (sinon les salons disparaissent de la liste).
- Textes du jeu : français = clé, anglais dans `Lang::EN`. Un texte collé à une valeur doit passer par
  `Lang::t()` avant la concaténation. Site : `translations/messages.en.php` (clé = texte français).

- Ouvert depuis un salon du site (`SONIC_ROOM`) : pas de menu, l'hôte lance le match dès son arrivée
  (`Game::$siteStarted`) ; un joueur qui arrive pendant un match prend le Sonic d'un bot
  (`VersusNetwork::peerJoined` : START envoyé à lui seul + événement `joined`). Pour tester : deux jeux
  natifs sur deux Xvfb (`:77`, `:78`), un relais local et un spectateur PHP qui crée le salon.
- Le site compte les jeux ouverts : la page du jeu fait `POST /api/jeu` toutes les 45 s (`GamePresence`,
  cache.app, 2 min). Invitation : `?next=` sur `/inscription` et `/connexion` (gardé en session).
- Image des liens : `tools/og-image.py tools/og-background.png <jeu>` dans le site ; la même image sert à la
  page du jeu (`demo/public/assets/og-image.png`).
