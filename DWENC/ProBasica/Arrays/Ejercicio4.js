/*
    Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
    suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
    mismo tamaño. Sumar componente a componente.
*/

window.addEventListener('load', () => {
    let vector1 = [];
    let vector2 = [];
    let suma = [];

    function introducir(vector) {
        for (let i = 0; i < 5; i++) {
            vector.push(parseFloat(prompt('Introduce numero')));
        }
    }

    function resultado(vector1, vector2, suma) {
        for (let i = 0; i < 5; i++) {
            suma.push(vector1[i] + vector2[i]);
        }
    }

    introducir(vector1);
    introducir(vector2);
    resultado(vector1, vector2, suma);

    alert('La suma de los vectores es: ' + suma);
});
