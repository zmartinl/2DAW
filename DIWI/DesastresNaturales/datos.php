<?php
    // $nombre = $_POST['nombre'];
    // $apellidos = $_POST['apellidos'];
    // $correo = $_POST['correo'];
    // $desastre = $_POST['desastre'];
    // if(isset($_POST['sexo']))
    //     $sexo = $_POST['sexo'];

    // if(isset($_POST['terminos']))
    //     $terminos = $_POST['terminos'];

    $datos = array(
        "nombre" => $_POST['nombre'],
        "apellidos" => $_POST['apellidos'],
        "sexo" => isset($_POST['sexo']) ? $_POST['sexo'] : null,
        "correo" => $_POST['correo'],
        "desastre" => $_POST['desastre'],
        "terminos" => isset($_POST['terminos']) ? $_POST['terminos'] : null
    );

    foreach($datos as $i => $valor){
        if($valor != null)
            echo $i.': '.$valor.'</br>';
    }
?>