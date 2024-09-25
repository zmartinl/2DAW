<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabla Factorial</title>
        <style>
            table{
                border-collapse: collapse;
                width: 50%;
                margin: 0 auto;
            }

            td{
                border: 1px solid black;
                padding: 10px;
                text-align: center;
            }
            a{
                font-weight: bold;
                text-decoration: none;
                color: black;
            }
        </style>
    </head>
    <body>
        <?php
            require_once 'funcFactorial.php';
            for($i = 0; $i <= 10;$i++){
                $factoriales[$i] = factorial($i);
            }

        ?>
        <table>
            <tr>
                <td colspan="2">TABLA DE FACTORIALES DEL 0 - 10</td>
            </tr>
            <tr>
                <td>NÚMERO</td>
                <td>FACTORIAL</td>
            </tr>
            <?php
                for($i = 0; $i <= count($factoriales) - 1; $i++){
                    echo '<tr> <td>'.$i.'</td> <td>'.$factoriales[$i].'</td> </tr>';
                }

                //Hecho con el foreach
                // foreach($factoriales as $i => $valor){
                //     echo '<tr> <td>'.$i.'</td> <td>'.$valor.'</td> </tr>';
                // }
            ?>
            <tr>
                <td colspan="2">Zeus Martin Llera </td>
            </tr>
        </table>
    </body>
</html>