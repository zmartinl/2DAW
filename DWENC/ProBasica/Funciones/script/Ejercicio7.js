// Retornar suma de 5 numeros.

window.addEventListener('load', () => {
    let num1 = Number(prompt('Introduce numero'));
    let num2 = Number(prompt('Introduce numero'));
    let num3 = Number(prompt('Introduce numero'));
    let num4 = Number(prompt('Introduce numero'));
    let num5 = Number(prompt('Introduce numero'));

    let suma = (num1,num2,num3,num4,num5) => {
        return num1 + num2 + num3 + num4 + num5;
    }

    alert('Suma: '+suma(num1,num2,num3,num4,num5));
});