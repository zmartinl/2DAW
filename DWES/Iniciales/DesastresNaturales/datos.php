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
        "nombre" => !empty($_POST['nombre']) ? $_POST['nombre'] : null,
        "apellidos" => !empty($_POST['apellidos']) ? $_POST['apellidos'] : null,
        "sexo" => isset($_POST['sexo']) ? $_POST['sexo'] : null, // Ternaria como if
        "correo" => !empty($_POST['correo']) ? $_POST['correo'] : null,
        "desastre" => $_POST['desastre']
    );

    $informacion = isset($_POST["info"]) ? $_POST["info"] : [];

    foreach($datos as $i => $valor){
        if($valor != null) // Distinguimos de null. Son los que no han sido seleccionados.
            echo $i.': '.$valor.'</br>';
    }

    foreach($informacion as $i => $valor){
        echo $i.': '.$valor.'</br>';
    }
?>