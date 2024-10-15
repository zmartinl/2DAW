/*
    Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura
    promedio de las personas.
*/

window.addEventListener('load', () => {
    let alturas = [];

    function introducir(alturas) {
        for(let i = 0; i <= 4; i++){
            alturas.push(parseFloat(prompt('Introduce altura')));
        }
    }

    let suma = (alturas) => {
        return alturas.reduce((total,altura) => total + altura ,0);
    };

    introducir(alturas);

    let promedio = suma(alturas) / alturas.length;

    alert(`La altura promedio es de: ${promedio}`);
});