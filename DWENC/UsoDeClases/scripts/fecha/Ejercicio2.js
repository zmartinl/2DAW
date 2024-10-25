/* Ejercicio 2: Escriba una función que determine si una fecha es posterior a otra. */

window.onload = () => {
    const actual = new Date();
    const otraFecha  = new Date(2023,0,1);

    if(actual < otraFecha)
        console.log('La fecha actual es anterior a la otra fecha');
    else
        console.log('La fecha actual es posterior a la otra fecha');
}