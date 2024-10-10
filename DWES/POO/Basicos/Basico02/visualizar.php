
<?php
    require_once 'DiasAño.php';
    $fecha = explode('/',$_POST['fecha']);
    $dia = $fecha[0];
    $mes = $fecha[1];
    $año = $fecha[2];

    $objDiasAño = new DiasAño($año);
    // print_r($objDiasAño->mesesDias);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visualizacion</title>
    </head>
    <body>
        <p>
            <?php
                echo 'La fecha introducida es: '.$dia.' de '.$objDiasAño->getMesesDias($mes)['mes'].' de '.$año.'
                <br> Febrero tiene: '.$objDiasAño->getMesesDias(2)['dias'].' dias';
            ?>
        </p>
    </body>
</html>


