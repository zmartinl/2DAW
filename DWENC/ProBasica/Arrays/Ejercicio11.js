/*
    11. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    a) La cantidad de valores negativos ingresados.
    b) La cantidad de valores positivos ingresados.
    c) La cantidad de múltiplos de 15.
    d) El valor acumulado de los números ingresados que son pares.
*/

window.addEventListener('load', () => {
    let numeros = [];
    let tamaño = 10;

    let cargaNumeros = () => {
        for(let i = 0; i < tamaño; i++){
            numeros.push(Number(prompt('Introduce numero:')));
        }
    };

    let operaciones = () => {
        let negativos = 0;
        let positivos = 0;
        let multiplos15 = 0;
        for(numero of numeros){
            if(numero < 0) negativos++;
            if(numero > 0) positivos++;
            if(numero % 15 === 0) multiplos15++;
        }
        let sumaPares = numeros.reduce((acumulador,numero) => acumulador + numero,0);

        alert(`Numeros Positivos: ${positivos}, Numeros Negativos: ${negativos}, Numeros multipos de 15: ${multiplos15} y la suma de los pares es de: ${sumaPares}`);
    };

    cargaNumeros();
    operaciones();
});