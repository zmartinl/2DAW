/*
    Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen
    notas mayores o iguales a 7 y cuántos menores.
*/

window.addEventListener('load', () => {
    let notas = [10,5,3,7,2,8,9,7,3,6];

    function mayor7(notas) {
        let mayor = 0;
        let menor = 0;
        for(let valor of notas) {
            valor >= 7 ? mayor += 1 : menor += 1;
        }

        alert(`Notas mayor igual a 7: ${mayor} y menores a 7 ${menor}`);
    }

    mayor7(notas);
});