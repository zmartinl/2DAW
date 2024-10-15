//Visualizar 3 numeros recibidos. 

window.addEventListener('load', () => {
    let numeros = (num1,num2,num3) => {
        alert(`Numero 1: ${num1}, Numero 2: ${num2}, Numero 3: ${num3}`);
    }

    alert(numeros(12,7,77));
});