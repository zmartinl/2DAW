'use strict';
// Calcular edad segun año nacimiento

window.addEventListener('load', () => {

    let fechNac = prompt('Introduce año de nacimiento');

    const fechHoy =  new Date().getFullYear();

    if(fechNac < fechHoy){
        const edad = fechHoy - fechNac;
        alert(`Tienes ${edad} años`);
    }else{
        alert('Imposible que nazcas mas tarde de hoy')
    }
});