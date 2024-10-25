/* Ejercicio: Dado un string "Hola, me llamo Sergio y estudio en IMF":
< * - Encuentra la posición de la primera aparición de la palabra "Sergio" 
 * - Extrae el nombre "Sergio" del string. 
 * - Reemplaza "Sergio" con tu nombre. 
> * - Muestra el resultado por pantalla .
*/

let cadena = "Hola, me llamo Sergio y estudio en IMF";

let primeraAparicion = () => {
    return cadena.indexOf('Sergio');
};

let extraer = () => {
    let palabra = cadena.slice(primeraAparicion(), primeraAparicion() + 'Sergio'.length);
    console.log(`Has extraido ${palabra}`);
};

let remplazar = () => {
    let nombre = 'Zeus';
    let remplazar = 'Sergio';

    cadena = cadena.replace(remplazar,nombre);
    console.log(cadena);
};

console.log(primeraAparicion());
extraer();
remplazar();