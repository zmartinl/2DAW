<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Par Impar</title>
        <style>
            h1,form{
                text-align: center;
                font-weight: bold;
            }

            h1{
                color: blueviolet;
            }
            input[type="submit"]{
                padding: 0.7%;
                background-color: green;
                border: none;
                border-radius: 25px;
                display: block;
                margin: 1% auto;
            }
        </style>
    </head>
    <body>
        <h1>Calculo Cuadrado + Paridad</h1>
        <form action="calculo.php" method="get">
            <label for="numero">Introduce numero : </label>
            <input type="number" name="numero">
            <input type="submit" value="enviar">
        </form>
    </body>
</html>