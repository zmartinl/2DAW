/* 
    10. Se realizó un censo provincial y se desea procesar la información obtenida en
    dicho censo. De cada una de las personas censadas se tiene la siguiente
    información: número de documento, edad y sexo ('femenino' o 'masculino').
    Se pide confeccionar un programa que lea los datos de cada persona censada (para
    finalizar ingresar el valor cero en el número de documento) e informar:

    a) Cantidad total de personas censadas.
    b) Cantidad de varones.
    c) Cantidad de mujeres.
    d) Cantidad de varones cuya edad varía entre 16 y 65 años.
*/

window.addEventListener('load', () => {
    let personas = {};

    let agregar = (numDoc,edad,sexo) => {
        personas[numDoc] = {
            edad: edad,
            sexo: sexo
        }
    };

    let introducir = () => {
        let numDoc;
        do {
            numDoc = Number(prompt('Introduce numero de documento:'));
            if (numDoc !== 0) {
                let edad = Number(prompt('Introduce la edad:'));
                let sexo = prompt('Introduce sexo: Masculino o Femenino').toLowerCase();

                if (sexo !== 'masculino' && sexo !== 'femenino') {
                    alert('Por favor, introduce "Masculino" o "Femenino".');
                    continue;
                }

                agregar(numDoc, edad, sexo);
            }
        } while (numDoc !== 0);
    };

    let operaciones = () => {
        let numPersonas = Object.keys(personas).length;
        let varones = 0;
        let mujeres = 0;
        let entre1665 = 0;

        for(numDoc in personas){
            if(personas[numDoc].sexo === 'Femenino') mujeres++;
            if(personas[numDoc].sexo === 'Masculino'){
                varones++;
                if(personas[numDoc].edad >= 16 && personas[numDoc].edad <= 65) entre1665++;
            }
        }

        alert(`Numero de varones: ${varones}`);
        alert(`Numero de mujeres: ${mujeres}`);
        alert(`Numero de varones entre 16 y 65 años: ${entre1665}`);
        alert(`Numero de personas censadas: ${numPersonas}`);
    };

    introducir();
    operaciones();
});