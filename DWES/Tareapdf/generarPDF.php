<?php
    require_once('fpdf/fpdf.php');
    require_once 'ranking.php';

    // Crear instancia del objeto FPDF
    $pdf = new FPDF();
    $pdf->AddPage();

    // Configuración del título
    $pdf->SetFont('Arial', 'B', 16);
    $pdf->Cell(190, 10, 'Ranking de Jugadores', 0, 1, 'C');

    // Configuración de la tabla
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(30, 10, 'Posicion', 1, 0, 'C');
    $pdf->Cell(80, 10, 'Nombre', 1, 0, 'C');
    $pdf->Cell(60, 10, 'Puntuacion', 1, 1, 'C');

    // Mostrar los datos en la tabla
    $posicion = 1;
    $pdf->SetFont('Arial', '', 12);
    foreach ($datos as $jugador) {
        $pdf->Cell(30, 10, $posicion, 1, 0, 'C');
        $pdf->Cell(80, 10, $jugador['nombreRegistro'], 1, 0, 'C');
        $pdf->Cell(60, 10, $jugador['barraPuntuacion'], 1, 1, 'C');
        $posicion++;
    }

    // Salida del PDF al navegador
    $pdf->Output();
?>
