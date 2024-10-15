// Elevar a la 3 potencia

window.addEventListener('load', () => {
    let numero = Number(prompt('Introduce numero a elevar: '));
    
    let potencia = numero => {
        return numero * numero * numero;
    }

    alert(potencia(numero));
});