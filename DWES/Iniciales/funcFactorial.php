<!-- Funcion para calcular el factorial de un numero recibido por parametro -->
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