<?php require_once './funcFactorial.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabla Factorial</title>
        <style>
            h1{
                text-align: center;
                color: #00457E;
            }
            a{
                font-weight: bold;
                text-decoration: none;
                color: black;
                display: block;
                font-size: 15px;
            }
            div{
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Factorial del numero que selecciones</h1>
        <div>
            <?php
                for($num = 0;$num <= 10;$num++){
                    //Este codigo hace que pase por url el resultado factorial y el numero al que se el hace el factorial.
                    echo '<a href="recoger.php?resultado='.factorial($num).'&numero='.$num.'"> Factorial de '.$num.'</a> <br/>';
                }
            ?>
        </div>
    </body>
</html>