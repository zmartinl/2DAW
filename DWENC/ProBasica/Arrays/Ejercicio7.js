/*
    Realizar un programa que permita cargar dos listas de 3 valores cada una.
    Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
    (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
    Tener en cuenta que puede haber dos o más estructuras repetitivas en un
    algoritmo.
*/

window.addEventListener('load', () => {
    let lista1 = [];
    let lista2 = [];
    let tamañoListas = 3;

    let introducir = lista => {
        for(let i = 0; i < tamañoListas; i++){
            lista.push(Number(prompt('Introduce numero')));
        }
    };

    let acumulador = lista => {
        return lista.reduce((acumulador,numero) => acumulador + numero, 0);
    };

    let comparacion = () => {
        let acumulado1 = acumulador(lista1);
        let acumulado2 = acumulador(lista2);

        if(acumulado1 > acumulado2)
            alert('La lista con mas acumulado es la 1');
        else if (acumulado1 === acumulado2)
            alert('Las listas son iguales');
        else
            alert('La lista con mas acumulado es la 2');
    };

    introducir(lista1);
    introducir(lista2);

    comparacion();
});