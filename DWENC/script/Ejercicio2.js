'use strict';
//Suma de 2 Numeros

window.addEventListener('load', () => {
    let num1 = Number(prompt('Introduce 1 Numero :'));
    let num2 = Number(prompt('Introduce 2 Numero :'));

    function operaciones (num1,num2){
        console.log('Suma = '+ (num1 + num2));
        console.log('Resta = '+ (num1 - num2));
        console.log('Multiplicacion = '+ (num1 * num2));
        console.log('Division = '+ (num1 / num2));
    }

    operaciones(num1,num2);
});