//Mayor de 3 numeros

window.addEventListener('load', function() {
    let mayor = (num1,num2,num3) => {
        return Math.max(num1,num2,num3);
    }

    alert(mayor(8,7,13));
});