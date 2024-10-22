/* Ejercicio 3: Escriba una función que calcule cuántos días faltan para el final de un mes dado. */

function diasParaFinDeMes(fecha) {
    // Obtener el año y el mes de la fecha dada
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();

    // Crear una fecha para el primer día del mes siguiente
    const primerDiaMesSiguiente = new Date(año, mes + 1, 1);

    // Restar la fecha actual a la fecha del primer día del mes siguiente para obtener la diferencia en milisegundos
    const diferenciaTiempo = primerDiaMesSiguiente - fecha;

    // Convertir la diferencia de tiempo de milisegundos a días
    const diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

    return diasFaltantes;
}

window.onload = () => {
    
    const fechaActual = new Date();
    console.log(`Días faltantes para fin de mes: ${diasParaFinDeMes(fechaActual)}`);
    
};