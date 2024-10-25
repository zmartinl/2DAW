/* Ejercicio: Dado un string "Estamos dando javascript con un nivel basico":
    * - encontrar la posición de la primera aparición de la palabra "javascript" 
    * - extraer la palabra "javascript" del string. 
    * - convertir la palabra extraída a minúsculas y 
*/

let cadena = "Estamos dando javascript con un nivel basico";

let primeraAparicion = () => {
    return cadena.indexOf('javascript');
};

let extraer = () => {
    return cadena.slice(primeraAparicion(), primeraAparicion() + 'javascript'.length);
};

let minúsculas = extraer().toLowerCase();