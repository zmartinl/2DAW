/*
    6. (Eventos: click y dblclick). Crear un formulario con tres botones con las
    leyendas "1", "2" y "3". Mostrar un mensaje indicando qué botón se
    presionó.
*/

window.addEventListener('load', () => {
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');

    boton1.addEventListener('click', () => {
        alert('Has seleccionado el boton 1');
    });

    boton2.addEventListener('click', () => {
        alert('Has seleccionado el boton 2');
    });

    boton3.addEventListener('click', () => {
        alert('Has seleccionado el boton 3');
    });
});