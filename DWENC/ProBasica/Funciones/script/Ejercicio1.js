//Menor de 3 numeros.

window.addEventListener('load', function() {
    let min = (num1,num2,num3) => {
        return Math.min(num1,num2,num3);
    }

    alert(min(8,7,13));
});