/* Ejercicio: Dado un string " hello ":
    * - elimina los espacios en blanco al principio y al final del string
    * - convierte todas las letras a mayúsculas. 
    * - calcula la longitud del string resultante.
    * - muestra el resultado por pantalla
*/

let cadena = "  hello  ";

let eliminarEspacios = () => {
    cadena = cadena.trim();
};

let convertirMayusculas = () => {
    eliminarEspacios();
    console.log(`Cadena en mayusculas : ${cadena.toUpperCase()}`);
};

let tamaño = () => {
    eliminarEspacios();
    console.log(`Tamaño : ${cadena.length}`);
};

convertirMayusculas();
tamaño();