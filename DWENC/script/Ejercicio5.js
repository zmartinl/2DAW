'use strict';
// Array de colores favoritos

window.addEventListener('load', () => {
    let colores = ['azul','verde','amarillo','rojo','lila'];

    let colorAniadir = prompt('Introduce un color: ');

    console.log('Antes: '+colores);

    colores.push(colorAniadir);
    
    console.log('Despues: '+colores);
});