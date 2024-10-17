/*
    9. (Eventos: mouseover y mouseout). Mostrar un elemento de tipo H1, luego
    cuando se introduzca con el mouse dentro del mismo cambiar el color
    a letra roja y color de fondo amarillo, luego cuando se mueva la flecha
    del mouse fuera del elemento volver al color original.
*/

window.addEventListener('load', () => {
    const h1 = document.getElementsByTagName('h1')[0];

    h1.addEventListener('mouseover', () => {
        h1.style.color = 'red';
        h1.style.backgroundColor = 'yellow';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = 'black';
        h1.style.backgroundColor = 'white';
    });
});