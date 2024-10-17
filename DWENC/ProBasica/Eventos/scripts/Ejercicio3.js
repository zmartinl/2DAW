/*
    3. (Eventos onMouseOver y onMouseOut). Realizar una función JavaScript en
    la cual aparezca tres etiquetas Rojo, Verde y Azul, de forma que
    cuando coloquemos el ratón sobre una de las palabras, todo el fondo
    se ponga de ese color y cuando pierda el foco, el fondo vuelva a
    blanco.
*/

window.addEventListener('load', () => {
    const rojo = document.getElementById('rojo');
    const verde = document.getElementById('verde');
    const azul = document.getElementById('azul');
    const body = document.body;

    rojo.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'red';
    });

    rojo.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'white';
    });

    verde.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'green'
    });

    verde.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'white';
    });

    azul.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'blue';
    });

    azul.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'white';
    });

});