<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        $img = 'img/';
        $datos = array(
            'casa' => "$img/casa.png",
            'programacion' => "$img/programacion.png",
            'flor' => "$img/flor.png",
        );

        foreach ($datos as $i => $valor) {
            echo '
                <div>
                    <img src='.$valor.'
                    </br>
                    <h1>Imagen '.$i.'</h1>
                </div>
            ';
        }
    ?>
</body>
</html>