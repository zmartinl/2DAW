/*
    8. (Eventos: mousedown y mouseup). Elaborar un programa que muestre un
    div de color rojo. Cuando se presione cambiar el color a amarillo y
    luego de soltar el botón del mouse volver a pintar de rojo.
*/

window.addEventListener('load', () => {
    const div = document.getElementsByTagName('div')[0];

    div.addEventListener('mousedown', () => {
        div.style.backgroundColor = 'yellow';
    });

    div.addEventListener('mouseup', () => {
        div.style.backgroundColor = 'red';
    });
});