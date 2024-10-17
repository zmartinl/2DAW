/*
    7. (Eventos: click y dblclick). Realizar un programa que muestre en un div el
    número 2. Cada vez que se hace doble clic sobre el mismo duplicar el
    valor contenido en el div.
*/

window.addEventListener('load', () => {
    const div = document.getElementsByTagName('div')[0];

    div.addEventListener('dblclick', () => {
        div.textContent = div.textContent * 2;
    });
});