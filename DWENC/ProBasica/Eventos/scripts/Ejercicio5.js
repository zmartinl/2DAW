/*
    5. (Eventos onClick). Página con botón que al hacer clic nos cree una nueva pestaña
    (window.open) con el nombre del día de la semana, día de mes, nombre de mes y
    año de la fecha actual.
*/

window.addEventListener('load', () => {
    const boton = document.getElementsByTagName('button')[0];

    boton.addEventListener('click', () => {
        const paginaNueva = window.open();
        paginaNueva.document.write(`<h1>${new Date().getDay()} del ${new Date().getMonth()} de ${new Date().getFullYear()}</h1>`);
        paginaNueva.document.close();
    });
});