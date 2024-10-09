'use strict';
// Tabla de multiplicar

window.addEventListener('load', () => {
    let num = Number(prompt('Introduce numero a hacer la tabla'));
    let numfin = Number(prompt('Hasta que numero quieres hacer la tabla'));


    function tabla(num,numfin){
        for(let i = 1; i <= numfin; i++){
            document.write(`${num} * ${i} = ${num * i} <br>`);
        }
    }

    tabla(num,numfin);
});