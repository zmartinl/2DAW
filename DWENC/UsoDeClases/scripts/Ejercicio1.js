/* Ejercicio 1: Escriba una función que calcule cuántos días han pasado desde el 1 de enero de un año dado hasta la fecha actual. */

window.onload = () => {
    
    const año = Number(prompt('Introduce el año'));

    const calculoDias = (año) => {
        const actual = new Date();
        const fechaUsuario = new Date(año,0,1);

        const diferencia = actual - fechaUsuario;

        const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));

        return dias;
    };
    
    alert('Hay una diferencia de '+calculoDias(año)+' dias');
    
};