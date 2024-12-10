<?php

    require_once '../model/MPregunta.php';

    class CPregunta {
        private $objMPregunta;

        public function __construct() {
            $this->objMPregunta = new MPregunta();
        }
        public function obtenerPreguntas() {
            $preguntas = $this->objMPregunta->obtenerPreguntasAleatorias();
            header('Content-Type: application/json');
            echo json_encode($preguntas);
        }
    }