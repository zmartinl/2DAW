'use strict';
//Par Impar

window.addEventListener('load', () => {
    let numero = Number(prompt('Introduce el numero'));
    
    function parImpar (numero){
        return numero % 2 == 0;
    } 

    parImpar(numero) ? alert('Par') : alert('Impar');
});