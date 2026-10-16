<?php
/**
 * Précompile le container Symfony du jeu (config/services.yaml + autowiring de src/) en une classe PHP,
 * chargée par app.php dans le navigateur : ~0,5 s de démarrage en moins (plus de lecture du YAML ni de
 * compilation). Lancé par package.sh avec le PHP natif :
 *
 *   php tools/dump-container.php demo/src/src   ->  demo/src/src/cache/container.php
 */

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Dumper\PhpDumper;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

$game = realpath($argv[1] ?? '') ?: exit("usage: php tools/dump-container.php <dossier du jeu>\n");
require $game . '/vendor/autoload.php';

$container = new ContainerBuilder();
(new YamlFileLoader($container, new FileLocator($game . '/config')))->load('services.yaml');
$container->compile();

@mkdir($game . '/cache', 0777, true);
file_put_contents($game . '/cache/container.php', (new PhpDumper($container))->dump(['class' => 'SonicGameCachedContainer']));
echo "    container précompilé : cache/container.php\n";
