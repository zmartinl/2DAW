<?php
    function parImpar($num){
        $cuadrado = $num * $num;
        
        $num % 2 == 0 ? header("location:par.php?num=$num&resultado=$cuadrado") : header("location:impar.php?num=$num&resultado=$cuadrado");

        // Esta es la manera comun del if.
        // if($num % 2 == 0)
        //     header("location:par.php?num=$num&resultado=$cuadrado");
        // else
        //     header("location:impar.php?num=$num&resultado=$cuadrado");
    }

    //LLamada a la función.
    parImpar($_GET['numero']);
?>
