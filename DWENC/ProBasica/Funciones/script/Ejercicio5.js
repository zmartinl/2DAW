// Cantidad de digitos de una variable entera.

window.addEventListener('load', () => {
    let tamaño = numero => {
        return numero.length;
    }

    numero = prompt('Introduce numero ')
    alert('Su tamaño es de : '+ tamaño(numero));
});