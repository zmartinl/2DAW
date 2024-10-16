/*
    12. Se cuenta con la siguiente información:
    Las edades de 5 estudiantes del turno mañana.
    Las edades de 6 estudiantes del turno tarde.
    Las edades de 11 estudiantes del turno noche.
    Las edades de cada estudiante deben ingresarse por teclado.
        a) Obtener el promedio de las edades de cada turno (tres promedios).
        b) Imprimir dichos promedios (promedio de cada turno).
        c) Mostrar por pantalla un mensaje que indique cual de los tres turnos
        tiene un promedio de edades mayor.
*/

window.addEventListener('load', () => {

    function pedirEdades(cantidad, turno) {
        let edades = [];
        for (let i = 0; i < cantidad; i++) {
            let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno ${turno}:`));
            edades.push(edad);
        }
        return edades;
    }

    let promedio = turno => {
        return turno.reduce((acumulador,edad) => acumulador + edad, 0) / turno.length;
    };

    let visualizar = () => {
        alert(`Promedio de los 3 turnos. Mañana: ${promedioMañana}, Tarde: ${promedioTarde}, Noche: ${promedioNoche}`);
        if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
            alert('El promedio más alto es el de Mañana');
        } else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
            alert('El promedio más alto es el de Tarde');
        } else {
            alert('El promedio más alto es el de Noche');
        }
    };
    
    let estudiantesManana = pedirEdades(5, "mañana");
    let estudiantesTarde = pedirEdades(6, "tarde");
    let estudiantesNoche = pedirEdades(11, "noche");

    let promedioMañana = promedio(estudiantesManana);
    let promedioTarde = promedio(estudiantesTarde);
    let promedioNoche = promedio(estudiantesNoche);

    visualizar();

});