<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon">
        <title>Ejercicio Factorial Tabla V2</title>
        <link rel="stylesheet" href="factorial.css">
    </head>
    <body>
        <form action="" method="get">
            <fieldset>
                <label for="num1">Introduce numero a partir</label>
                <input type="number" name="num1"><br>
                <label for="num2">Introduce numero final</label>
                <input type="number" name="num2">
                <input type="submit" value="Enviar">
            </fieldset>
        </form>
        <?php   
            function factorial($numero){
                $resultado = 1;
                while($numero > 0){
                    $resultado = $resultado * $numero;
                    $numero--;
                }
                return $resultado;
            }
        ?>
        <?php
            $num1 = $_GET['num1'];
            $num2 = $_GET['num2'];
        ?>
        <table>
            <tr>
                <td colspan="2">TABLA DE FACTORIALES DEL <?php echo $num1.' AL '.$num2?></td>
            </tr>
            <tr>
                <td>NÚMERO</td>
                <td>FACTORIAL</td>
            </tr>
            <?php
                for($i = $num1; $i <= $num2; $i++){
                    echo '<tr> <td>'.$i.'</td> <td>'.factorial($i).'</td> </tr>';
                }
            ?>
            <tr>
                <td colspan="2">Zeus Martin Llera</td>
            </tr>
        </table>
    </body>
</html>
