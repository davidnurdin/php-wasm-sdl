<?php

//define('LEVEL_NUMBER',"2"); // semble pas marcher pour autre level

// Configuration
define('ROM_FILE', 'sonic.sms'); // Chemin de la ROM


function hexdump($data)
{
    $hex = '';
    for ($i = 0; $i < strlen($data); $i++) {
        $hex .= sprintf("%02X ", ord($data[$i]));
        if (($i + 1) % 16 == 0) {
            $hex .= "\n";
        }
    }
    return $hex;
}

function returnLevelPointers()
{
    $pointers = [];
    $pointers[] = 0x15580; // GHZ Act 1
    $pointers[] = 0x15582; // GHZ Act 2
    $pointers[] = 0x15584; // GHZ Act 3

    $pointers[] = 0x15586; // BRIDGE Act 1
    $pointers[] = 0x15588; // BRIDGE Act 2
    $pointers[] = 0x1558A; // BRIDGE Act 3

    $pointers[] = 0x1558C; // JUNGLE Act 1
    $pointers[] = 0x1558E; // JUNGLE Act 2
    $pointers[] = 0x15590; // JUNGLE Act 3

    $pointers[] = 0x15592; // LABYRINTH Act 1
    $pointers[] = 0x15594; // LABYRINTH Act 2
    $pointers[] = 0x15596; // LABYRINTH Act 3

    $pointers[] = 0x15598; // SCRAP BRAIN Act 1
    $pointers[] = 0x1559A; // SCRAP BRAIN Act 2
    $pointers[] = 0x1559C; // SCRAP BRAIN Act 3

    $pointers[] = 0x1559E; // SKY BASE Act 1
    $pointers[] = 0x155A0; // SKY BASE Act 2
    $pointers[] = 0x155A2; // SKY BASE Act 3

    $pointers[] = 0x155A4; // END SEQUENCE
//    $pointers[] = 0x155A6; // UNUSED (invalid data)

    $pointers[] = 0x155A8; // SCRAP BRAIN Act 2 (Emerald Maze), from corridor
    $pointers[] = 0x155AA; // SCRAP BRAIN Act 2 (Ballhog Area)
    $pointers[] = 0x155AC; // SCRAP BRAIN Act 2, from transporter

    $pointers[] = 0x155AE; // SCRAP BRAIN Act 2 (Emerald Maze), from transporter

    $pointers[] = 0x155B0; // SCRAP BRAIN Act 2, from Emerald Maze
    $pointers[] = 0x155B2; // SCRAP BRAIN Act 2, from Ballhog Area
    $pointers[] = 0x155B4; // SKY BASE Act 2 (Interior)
    $pointers[] = 0x155B6; // SKY BASE Act 2 (Interior), this one is identical
    $pointers[] = 0x155B8; // SPECIAL STAGE 1
    $pointers[] = 0x155BA; // SPECIAL STAGE 2
    $pointers[] = 0x155BC; // SPECIAL STAGE 3
    $pointers[] = 0x155BE; // SPECIAL STAGE 4
    $pointers[] = 0x155C0; // SPECIAL STAGE 5
    $pointers[] = 0x155C2; // SPECIAL STAGE 6
    $pointers[] = 0x155C4; // SPECIAL STAGE 7
    $pointers[] = 0x155C6; // SPECIAL STAGE 8
//    $pointers[] = 0x155C8; // UNUSED (invalid data)


    return $pointers;
}

/*
 *
 *
 * $15580–81	0: Green Hill Act 1
$15582–83	1: Green Hill Act 2
$15584–85	2: Green Hill Act 3
$15586–87	3: Bridge Act 1
$15588–89	4: Bridge Act 2
$1558A–8B	5: Bridge Act 3
$1558C–8D	6: Jungle Act 1
$1558E–8F	7: Jungle Act 2
$15590–91	8: Jungle Act 3
$15592–93	9: Labyrinth Act 1
$15594–95	10: Labyrinth Act 2
$15596–97	11: Labyrinth Act 3
$15598–99	12: Scrap Brain Act 1
$1559A–9B	13: Scrap Brain Act 2
$1559C–9D	14: Scrap Brain Act 3
$1559E–9F	15: Sky Base Act 1
$155A0–A1	16: Sky Base Act 2
$155A2–A3	17: Sky Base Act 3
$155A4–A5	18: End Sequence
$155A6–A7	19: UNUSED (invalid data)
$155A8–A9	20: Scrap Brain Act 2 (Emerald Maze), from corridor
$155AA–AB	21: Scrap Brain Act 2 (Ballhog Area)
$155AC–AD	22: Scrap Brain Act 2, from transporter
$155AE–AF	23: Scrap Brain Act 2 (Emerald Maze), from transporter
$155B0–B1	24: Scrap Brain Act 2, from Emerald Maze
$155B2–B3	25: Scrap Brain Act 2, from Ballhog Area
$155B4–B5	26: Sky Base Act 2 (Interior)
$155B6–B7	27: Sky Base Act 2 (Interior), this one is identical
$155B8–B9	28: Special Stage 1
$155BA–BB	29: Special Stage 2
$155BC–BD	30: Special Stage 3
$155BE–BF	31: Special Stage 4
$155C0–C1	32: Special Stage 5
$155C2–C3	33: Special Stage 6
$155C4–C5	34: Special Stage 7
$155C6–C7	35: Special Stage 8
$155C8–C9	36: UNUSED (invalid data)

 * ----- ??????
Offset	Description
$01209–0A	Green Hill Act 1 (=$122D)
$0120B–0C	Green Hill Act 2 (=$122D)
$0120D–0E	Green Hill Act 3 (=$122D)
$0120F–10	Bridge Act 1 (=$123C)
$01211–12	Bridge Act 2 (=$123C)
$01213–14	Bridge Act 3 (=$123C)
$01215–16	Jungle Act 1 (=$124B)
$01217–18	Jungle Act 2 (=$124B)
$01219–1A	Jungle Act 3 (=$124B)
$0121B–1C	Labyrinth Act 1 (=$125A)
$0121D–1E	Labyrinth Act 2 (=$125A)
$0121F–20	Labyrinth Act 3 (=$125A)
$01221–22	Scrap Brain Act 1 (=$1269)
$01223–24	Scrap Brain Act 2 (=$1269)
$01225–26	Scrap Brain Act 3 (=$1269)
$01227–28	Sky Base Act 1 (=$1278)
$01229–2A	Sky Base Act 2 (=$1278)
$0122B–2C	Sky Base Act 3 (=$1278)


 */
function parseLevelHeader(string $buffer): array
{
    // https://info.sonicretro.org/SCHG:Sonic_the_Hedgehog_%288-bit%29#Level_Headers_.2F_Level_Headers_pointers
    if (strlen($buffer) !== 37) {
        throw new InvalidArgumentException("Le buffer doit faire exactement 37 octets.");
    }

    $bytes = unpack("C*", $buffer); // Convertit la chaîne binaire en tableau d'octets (indexé à partir de 1)

    // Lecture Little-Endian
    $littleEndian = function($low, $high) {
        return $low + ($high << 8);
    };

    return [
        'SP' => $bytes[1],
        'FW' => $littleEndian($bytes[2], $bytes[3]),
        'FH' => $littleEndian($bytes[4], $bytes[5]),
        'LX' => $littleEndian($bytes[6], $bytes[7]),
        'Flag_Byte' => $bytes[8], // ?? inconnu
        'LW' => $bytes[9],
        'LY' => $littleEndian($bytes[10], $bytes[11]),
        'XH' => $bytes[12],
        'LH' => $bytes[13],
        'SX' => $bytes[14],
        'SY' => $bytes[15],
        'FL' => $littleEndian($bytes[16], $bytes[17]),
        'FS' => $littleEndian($bytes[18], $bytes[19]),
        'BM' => $littleEndian($bytes[20], $bytes[21]),
        'LA' => $littleEndian($bytes[22], $bytes[23]),
        'Unknown_09' => $bytes[24], // Toujours 0x09
        'SA' => $littleEndian($bytes[25], $bytes[26]),
        'IP' => $bytes[27],
        'CS' => $bytes[28],
        'CC' => $bytes[29],
        'CP' => $bytes[30],
        'OL' => $littleEndian($bytes[31], $bytes[32]),
        'SR' => $bytes[33],
        'UW' => $bytes[34],
        'TL' => $bytes[35],
        'Unknown_00' => $bytes[36], // Toujours 0x00
        'MU' => $bytes[37],
    ];
}

function decompressRLEData(string $data, int $offset, int $length): string {
    $output = '';
    $previous = -1;

    $end = $offset + $length;

    for ($i = $offset; $i <= $end; $i++) {
        $current = ord($data[$i]); // Convertit le caractère en entier (octet)

        if ($current === $previous) {
            $repeat = ord($data[$i + 1]); // Octet suivant = nombre de répétitions
            if ($repeat === 0) {
                $repeat = 256;
            }
            // Répète l'octet courant
            $output .= str_repeat(chr($current), $repeat);
            $i++; // On saute le byte de répétition
            $previous = -1; // Réinitialisation
        } else {
            $output .= chr($current); // Ajoute l'octet brut
            $previous = $current;
        }
    }

    return $output;
}




function readLevels()
{


//$10000 – $10B80	Green Hill (184 blocks)
//$10B80 – $11480	Bridge (144 blocks)
//$11480 – $11E80	Jungle (160 blocks)
//$11E80 – $12980	Labyrinth (176 blocks)
//$12980 – $13580	Scrap Brain (192 blocks)
//$13580 – $14300	Sky Base 1-2 (216 blocks)
//$14300 – $14980	Sky Base 3 (104 blocks)
//$14980 – $1517F	Bonus Stage (128 blocks)
//

    $levelSize[1] = 184; $levelSize[2] = 184 ; $levelSize[3] = 184 ;
    $levelSize[4] = 144; $levelSize[5] = 144 ; $levelSize[6] = 144 ;
    $levelSize[7] = 160; $levelSize[8] = 160 ; $levelSize[9] = 160 ;
    $levelSize[10] = 176; $levelSize[11] = 176 ; $levelSize[12] = 176 ;
    $levelSize[13] = 192; $levelSize[14] = 192 ; $levelSize[15] = 192 ;
    $levelSize[16] = 216; $levelSize[17] = 216 ; $levelSize[18] = 216 ;
    $levelSize[19] = 184; // end sequence
    $levelSize[20] = 1 ; // unused level !
    $levelSize[21] = 192; $levelSize[22] = 192 ; $levelSize[23] = 192 ; $levelSize[24] = 192 ; $levelSize[25] = 192 ;
    $levelSize[26] = 192; // pas sur
    $levelSize[27] = 104; // pas sur
    $levelSize[28] = 128; $levelSize[29] = 128 ; $levelSize[30] = 128 ; $levelSize[31] = 128 ; $levelSize[32] = 128 ; $levelSize[33] = 128 ; $levelSize[34] = 128 ; $levelSize[35] = 128 ; // bonus



    $pointers = returnLevelPointers();
    $levels = [];
    $rom = fopen(ROM_FILE, 'rb');
    foreach ($pointers as $number => $pointer) {

    $pointer = $pointers[$number];
    // TODO voir autre levels..


        // Se positionner à l'offset du layout
        fseek($rom, $pointer);
        $pointerStartLevelHeader = fread($rom,2);
        echo dechex(ord($pointerStartLevelHeader[0])) . " " . dechex(ord($pointerStartLevelHeader[1])) . "\n";
        $startLevelHeader = (int) (ord($pointerStartLevelHeader[1]) * 256 + ord($pointerStartLevelHeader[0])) ;
//        var_dump($startLevelHeader);
//        die();
        fseek($rom, 0x15580 + $startLevelHeader);
        $levelHeader = fread($rom, 37);
        echo hexdump($levelHeader);
        $headers = parseLevelHeader($levelHeader);
//        if ($number == 5) {
//            var_dump($headers);
//            die();
//        }

        // todo : voir fw/fh et l'intégré , voir mettre les header dans le format !
//        if ($number == 2) {
//            var_dump($headers);
//            die();
//        }


//
//        var_dump(dechex($headers['FW']));
//        die();


        $startLevel = 0x14000 + $headers['FL'] ;
        fseek($rom, $startLevel);
        $levelSizeHeader = $headers['FS'] ;
        $levelData = fread($rom, $levelSizeHeader);
//        echo hexdump($levelData);
        // decode RLE $levelData

        $levelDataUncompressed = (decompressRLEData($levelData, 0, $levelSizeHeader - 1));
        echo hexdump($levelDataUncompressed);
        echo "Size level :" . $headers['FW'] . " / " . $headers['FH'] . "\n";


        file_put_contents('level' . ($number+1) . '.bin', $levelDataUncompressed);
        file_put_contents('level' . ($number+1) . '.meta', var_export($headers, true));

        $pointersSolidity = [
            0x3A65,
            0x3A67,
            0x3A69,
            0x3A6B,
            0x3A6D,
            0x3A6F,
            0x3A71,
            0x3A73,
        ] ;
        $solidityPointer = $pointersSolidity[(int)$headers['SP']] ;

        fseek($rom, $solidityPointer);
        $pointerStartSolidity = fread($rom,2);
        echo dechex(ord($pointerStartSolidity[0])) . " " . dechex(ord($pointerStartSolidity[1])) . "\n";
        $startSolidity = (int) (ord($pointerStartSolidity[1]) * 256 + ord($pointerStartSolidity[0])) ;
        fseek($rom, $startSolidity);


        $solidityData = fread($rom,$levelSize[$number+1]);
        echo hexdump($solidityData);
        file_put_contents('level' . ($number+1) . '.solidity', $solidityData);


//        die();



        // read colisions from level !


        /**
         *
         * Each level header use 37 bytes. Here is the format (partial):
         *
         * SP FW FW FH FH LX LX ?? LW LY LY XH LH
         * SX SY FL FL FS FS BM BM LA LA 09 SA SA
         * IP CS CC CP OL OL SR UW TL 00 MU
         */



    }

    fclose($rom);

    return $levels;
}


function readLevelLayout($romPath, $offset, $width, $height) {
    // Ouvre le fichier binaire
    $rom = fopen($romPath, 'rb');
    if (!$rom) {
        die("Erreur : impossible d'ouvrir la ROM.\n");
    }

    // Se positionner à l'offset du layout
    fseek($rom, $offset);

    // Lire la grille
    $layout = [];
    for ($y = 0; $y < $height; $y++) {
        $row = [];
        for ($x = 0; $x < $width; $x++) {
            $byte = fread($rom, 1);
            if ($byte === false) {
                die("Erreur : fin de fichier inattendue.\n");
            }
            $row[] = ord($byte); // Convertit en entier (0-255)
        }
        $layout[] = $row;
    }

    fclose($rom);
    return $layout;
}

readLevels();
