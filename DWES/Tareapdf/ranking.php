<?php
    require_once('conexion.php');
    $sql = 'SELECT * FROM Registro order by barraPuntuacion DESC;';

    $resultado = $conexion -> query($sql);

    $datos = [];
    while($fila = $resultado -> fetch_assoc()){
        $datos[] = $fila;
    }
?>