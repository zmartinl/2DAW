'use strict'

const libros = [
    {
        titulo: "1984", 
        autor: "George Orwell", 
        genero: "Ficción", 
        anioPublicacion: 1949, 
        disponible: true 
    },
    { 
        titulo: "Un Mundo Feliz", 
        autor: "Aldous Huxley",
        genero: "Ficción", 
        anioPublicacion: 1932, 
        disponible: false 
    },
    { 
        titulo: "Sapiens", 
        autor: "Yuval Noah Harari", 
        genero: "Historia", 
        anioPublicacion: 2011,
        disponible: true 
    },
    { 
        titulo: "El Origen de las Especies", 
        autor: "Charles Darwin", 
        genero: "Ciencia", 
        anioPublicacion: 1859, 
        disponible: true 
    },
    { 
        titulo: "La Divina Comedia", 
        autor: "Dante Alighieri", 
        genero: "Poesía", 
        anioPublicacion: 1320, 
        disponible: false 
    }
];

/* ---- EJERCICIO 1 ----- */

const ejercicio1 = () => {
    libros.forEach(libro => {
        console.log(`Libro con titulo ${libro.titulo}, pertenece al autor ${libro.autor}, publicado en el año ${libro.anioPublicacion}`);
    });
};

/* ---- EJERCICIO 2 ----- */

const ejercicio2 = () => {
    const numMenor = Math.min(...libros.map(libro => libro.anioPublicacion));

    const libroMasAntiguo = libros.filter(libro => libro.anioPublicacion === numMenor);

    const titulo = libroMasAntiguo[0].titulo

    console.log(`El libro mas antiguo es ${titulo}`);
};

/* ---- EJERCICIO 3 ----- */

const ejercicio3 = () => {
    const numDisp = libros.reduce((total,libro) => libro.disponible ? total + 1 : total + 0, 0);
    
    console.log(`El numero total de libros disponibles es ${numDisp}`);
};


/* ---- EJERCICIO 4 ----- */

const ejercicio4 = () => {
    const autoresUnicos = [...new Set(libros.map(libro => libro.autor))];

    console.log(autoresUnicos);
};


/* ---- EJERCICIO 5 ----- */

const ejercicio5 = () => {
    const genero = prompt('Introduce el genero');

    const libroGenero = libros.filter(libro => libro.genero == genero);

    libroGenero.forEach(libro => {
        console.log(`Libro: ${libro.titulo}`);
    });
};

/* ---- EJERCICIO 6 ----- */

const ejercicio6 = (libro) => {
    if(!libro.disponible)
        console.log(`El libro no está disponible`);
    else{
        libro.disponible = false;
        console.log(`La disponibilidad del libro ${libro.titulo} cambió a ${libro.disponible}`);
    }
};

const ejercicio7 = () => {
    const agrupadosGenero = libros.reduce((total,libro) => {
        let genero = libro.genero;

        if(!total[genero])
            total[genero] = [];

        total[genero].push(libro.titulo);

        return total;
    },libros[0]);

    console.log(agrupadosGenero);
};

const ejercicio8 = () => {
    const años = libros.map(libro => libro.disponible ? libro.anioPublicacion : 0);

    const promedio = años.reduce((total,año) => total + año ,0);

    console.log(Math.round(promedio / 3));
};

window.onload = () => {
    // ejercicio1();
    // ejercicio2();
    // ejercicio3();
    // ejercicio4();
    // ejercicio5();
    // ejercicio6(libros[1]);
    // ejercicio7();
    //ejercicio8();
}


