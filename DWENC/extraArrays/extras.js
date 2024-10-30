const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { nombre: "Sara", edad: 22, ciudad: "Sevilla" },
    { nombre: "Miguel", edad: 28, ciudad: "Valencia" },
    { nombre: "Lucía", edad: 35, ciudad: "Bilbao" }
];


/**
 *  1. Obtener un array con todos los nombres
 */

const arrayNombres = personas.map(persona => persona.nombre);

// console.log(arrayNombres);

/**
 *  2. Encontrar a la persona con nombre "Sara" y mostrar su nombre y edad
 */

const sara = personas.filter(persona => {
        if(persona.nombre === 'Sara'){
            console.log(`Nombre: ${persona.nombre} Edad: ${persona.edad}`);
        }
    });


/**
 *  3. Almacenar en un array nuevo llamado "mayoresDe25" todas las personas que sean mayores de 25 y mostrarlos por pantalla
 */

const mayores25 = personas.filter(persona => persona.edad > 25);

// console.log(mayores25);

/**
 *  4. Calcular la edad promedio de todas las personas
 */

const promedio = personas.reduce((total,persona) => total + persona.edad,0) / personas.length;

// console.log(promedio);

/**
 *  5. Agregar una nueva propiedad (atributo) a cada persona, por ejemplo, un valor booleano que se llame "activoEnTrabajo"
 */

const nuevaPropiedad = personas.map(persona => ({
    ...persona,
    activoEnTrabajo: Math.random() >= 0.5
}));

// console.log(nuevaPropiedad);


/**
 *  6. Listar todas las ciudades sin duplicar
 */

const ciudades = [...new Set(personas.map(persona => persona.ciudad))];

// console.log(ciudades);


/**
 *  7. Ordenar el array por edad (de menor a mayor)
 */

const ordenarEdad = personas.sort((a,b) => b.edad - a.edad);

// console.log(ordenarEdad);

/**
 *  8. Contar el número de personas por ciudad.
 */

const numPersonas = personas.reduce((total,persona) => {
    let ciudad = persona.ciudad;

    if(!total[ciudad]){
        total[ciudad] = 0
    }
    total[ciudad] += 1;

    return total;
},[]); 

// console.log(numPersonas);

/**
 *  9. Obtener el objeto de persona con mayor edad y mostrar su nombre, edad y ciudad
 */

const mayorEdad = () => {
    const edadMaxima = Math.max(...personas.map(persona => persona.edad));

    const mayorEdad = personas.filter(persona => persona.edad === edadMaxima);

    console.log(mayorEdad);
};

// mayorEdad();

/**
 * 10. Comprobar si todas las personas son mayores de 20 años y mostrar un mensaje por pantalla ("Son mayores de 20") en caso de que sea cierto.
 */

const todasMayores20 = personas.every(persona => persona.edad > 20);

if(todasMayores20)
    console.log("Son todos mayores de 20 años");
else
    console.log("No son mayores de 20 años todos");
    