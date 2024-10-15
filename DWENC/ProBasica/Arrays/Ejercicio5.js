/*
    Desarrollar un programa que permita ingresar un vector de 8 elementos, e
    informe:
    El valor acumulado de todos los elementos del vector.
    El valor acumulado de los elementos del vector que sean mayores a 36.
    Cantidad de valores mayores a 50.
*/

window.addEventListener('load' , () => {
    let vector = [];

    function introducir(vector) {
        vector.push(Number(prompt('Introduce numero')));
    }

    function operacion(vector) {

        let acumuladoTotal = vector.reduce((acumulador, iteracion) => acumulador + iteracion, 0);

        let acumuladoMayores36 = vector.reduce((acumulador, valor) => {
            return valor > 36 ? acumulador + valor : acumulador;
        }, 0);

        let cantidadMayores50 = vector.filter(valor => valor > 50).length;

        alert(`Valor acumulado de todos los elementos: ${acumuladoTotal}`);
        alert(`Valor acumulado de los elementos mayores a 36: ${acumuladoMayores36}`);
        alert(`Cantidad de elementos mayores a 50: ${cantidadMayores50}`);
    }

    introducir(vector);
    operacion(vector);
});