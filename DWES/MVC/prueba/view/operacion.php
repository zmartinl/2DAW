<?php
    require_once '../controller/CPregunta.php';

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $controlador = new CPregunta();
        $controlador->obtenerPreguntas();
    }
?>