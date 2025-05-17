<?php

$imagePath = './realColision.png';
$tileSize = 32;
$nbImage = 47 ;

// Charger l’image
$image = imagecreatefrompng($imagePath);
if (!$image) {
    die("Erreur lors du chargement de l'image.");
}


// read transparent color
$transparentColor = imagecolorat($image, 0, 1);

// lis l'image de haut en bas, il y a un pixel de gap entre chaque tiles
$startY = 1 ;
for ($nbTile = 1 ; $nbTile < $nbImage+1; $nbTile++)
{
    echo "Lecture Tile Colision N°$nbTile\n";
    $coordX = 0;
    $coordY = ($nbTile-1)*$tileSize + $startY*$nbTile;

//    echo "Coordonée X : $coordX\n";
//    echo "Coordonée Y : $coordY\n";


    // read tiles with colorat (32x32) and search all color that is not transparent ( the transparent color is the color of the pixel 0,0 of the first tile)

    for ($y = 0 ; $y < 32 ; $y++)
    {
        for ($x = 0 ; $x < 32 ; $x++)
        {
            // 1 / 2 / 4 / 8
            // 1 => bottom
            // 2 => left
            // 4 => top
            // 8 => right

            $TileColision[$nbTile-1]['colisionWay'] = ['bottom' => true , 'left' => false , 'top' => false , 'right' => false];
            $TileColision[$nbTile-1]['value'][$y][$x] = 0 ;

            $color = imagecolorat($image, $coordX + $x, $coordY + $y);
            if ($color != $transparentColor)
            {
                $TileColision[$nbTile-1]['value'][$y][$x] = 1 ;
            }
        }
    }


    // print 0/1 of $TileColision
    for ($y = 0 ; $y < 32 ; $y++)
    {
        for ($x = 0 ; $x < 32 ; $x++)
        {
            echo $TileColision[$nbTile-1]['value'][$x][$y] . " ";
        }
        echo "\n";
    }
    echo PHP_EOL;




//    var_dump($TileColision[0]);


}

// export TileColision to php array in file with var_export and <?php $tileCol =
file_put_contents('./tileCol.data.php', "<?php\n\rreturn " . var_export($TileColision, true) . ";\n?>");
