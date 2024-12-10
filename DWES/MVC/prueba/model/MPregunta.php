<?php

    class MPregunta {
        private $conexion;

        public function __construct() {
            $this->conexion = new PDO('mysql:host=localhost;dbname=reservalibros','root','');
        }
        public function obtenerPreguntasAleatorias() {
            $sql = 'SELECT * FROM usuarios ORDER BY RAND() LIMIT 5';
            $consulta = $this->conexion->query($sql);
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    