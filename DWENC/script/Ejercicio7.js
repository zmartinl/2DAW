'use strict';
// Numero Mayor de un Array

window.addEventListener('load', () => {

    let numeros = [];

    function aniadir() {
        let num = prompt('Introduce numero al array, stop para parar');
        while (num !== 'stop') {
            numeros.push(Number(num));
            num = prompt('Introduce numero al array, stop para parar');
        }
    }

    function mayorArray(numeros) {
        let mayor = numeros[0];
        for (let i = 1; i < numeros.length; i++) { 
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }
        alert(`El mayor es: ${mayor}`);
    }
    
    aniadir();
    mayorArray(numeros);
});
