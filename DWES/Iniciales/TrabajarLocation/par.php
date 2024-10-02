<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Par</title>
        <style>
            body{
                background-color: skyblue;
            }
            table{
                margin: 20% auto;
                width: 50%;
                border-collapse: collapse;
                background-color: lime;
            }
            th,tr,td{
                border: solid 2px black;
                text-align: center;
                padding: 1%;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>
                    Numero
                </th>
                <th>
                    Cuadrado
                </th>
                <th>
                    Paridad
                </th>
            </tr>
            <?php
                echo '<tr><td>'.$_GET['num'].'</td><td>'.$_GET['resultado'].'</td><td>Par</td></tr>';
            ?>
        </table>
    </body>
</html>