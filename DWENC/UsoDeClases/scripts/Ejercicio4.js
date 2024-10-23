/* Ejercicio 4: Escriba una función que devuelva una fecha en formato "dd/mm/yyyy". */

let fechaformato = fecha => {
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}` 
};

window.onload = () => {
    const fecha = new Date();
    alert(fechaformato(fecha));
};