<?php

$imagePath = '../tilesetWithColision.png';
$tileSize = 32;

// Charger l’image
$image = imagecreatefrompng($imagePath);
if (!$image) {
    die("Erreur lors du chargement de l'image.");
}

$width = imagesx($image);
$height = imagesy($image);

$tilesX = intdiv($width, $tileSize);
$tilesY = intdiv($height, $tileSize);

$result = [];

$tileIndex = 0;
for ($ty = 0; $ty < $tilesY; $ty++) {
    for ($tx = 0; $tx < $tilesX; $tx++) {
        $binaryData = '';

        // Pour chaque colonne X (de 0 à 31)
        for ($x = 0; $x < $tileSize; $x++) {
            $columnBits = '';

            // Construire les 32 bits de haut en bas (Y = 0 à 31)
            for ($y = 0; $y < $tileSize; $y++) {
                $px = $tx * $tileSize + $x;
                $py = $ty * $tileSize + $y;

                $color = imagecolorat($image, $px, $py);
                $r = ($color >> 16) & 0xFF;
                $g = ($color >> 8) & 0xFF;
                $b = $color & 0xFF;

                $isRed = ($r === 255 && $g === 0 && $b === 0);
                $columnBits .= $isRed ? '1' : '0';
            }

            // Convertir les 32 bits (une colonne) en 4 octets
            for ($i = 0; $i < 32; $i += 8) {
                $byte = substr($columnBits, $i, 8);
                $binaryData .= chr(bindec($byte));
            }
        }

//        var_dump($binaryData);
//        die();
////
        // Encodage final en hexadécimal (128 octets => 256 caractères hex)
        $hexCode = bin2hex($binaryData);

        $result[$tileIndex] = $binaryData;

        $tileIndex++;
    }
}

$fp = fopen ('colisionLevel1.bin', 'wb');
foreach ($result as $value)
{
    // X tiles de 128 octets a chaque fois (si la tiles fait 32x32)
    fwrite($fp, $value);
}
fclose($fp);

//file_put_contents('colisionLevel1.bin', var_export($result, true));
//var_dump($result);

//header('Content-Type: application/json');
//echo json_encode($result, JSON_PRETTY_PRINT);
