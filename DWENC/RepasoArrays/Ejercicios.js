/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *
 *     - ACT 8 - Filtrar a los jugadores que tienen más de 10 asistencias                     *
 *     - ACT 9 - Crear una lista de los equipos sin jugadores repetidos                       *
 *     - ACT 10 - Encontrar el jugador con la mayor cantidad de goles por partido             *
 *     - ACT 11 - Calcular el promedio de asistencias por jugador                             *
 *     - ACT 12 - Obtener el jugador con la menor cantidad de tarjetas amarillas              *
 *     - ACT 13 - Agrupar los jugadores por equipo                                            *
 *     - ACT 14 - Contar cuántos jugadores hay en cada posición                               *
 *     - ACT 15 - Crear una lista con los nombres de los jugadores y sus goles                *
 *     - ACT 16 - Filtrar jugadores con menos de 5 tarjetas amarillas                         *
 *     - ACT 17 - Listar los nombres de los jugadores y el equipo donde juegan                *
 *     - ACT 18 - Crear un nuevo array con los jugadores que tienen tarjetas rojas            *
 *     - ACT 19 - Encontrar el jugador con el menor promedio de goles por partido             *
 *     - ACT 20 - Sumar las tarjetas amarillas y rojas de cada equipo                         *
 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

/* ----- ACT 1 ----- */

const mas20 = () => {
    futbolistas.forEach(futbolista => {
        if(futbolista.goles > 20){
            console.log(futbolista.nombre);
        }
    });
};

// mas20();

/* ----- ACT 2 ----- */

const totalGoles = () => {
    futbolistas.reduce((acumulador,iteracion) => acumulador + iteracion.goles, 0);
};

// totalGoles();

/* ----- ACT 3 ----- */

const ordenar = () => {
    futbolistas.sort((a, b) =>{
        b.asistencias - a.asistencias;
    });
    console.log(futbolistas);
};

// ordenar();

/* ----- ACT 4 ----- */

const contTarjetas = futbolistas.reduce((total, futbolista) => {
        let equipo = futbolista.equipo;

        if(!total[equipo]){
            total[equipo] = {
                tarjetasAmarillas : 0,
                tarjetasRojas : 0
            };
        }

        total[equipo].tarjetasAmarillas += futbolista.tarjetaAmarilla;

        total[equipo].tarjetasRojas += futbolista.tarjetaRoja;
        
        return total;
    });

// console.log(contTarjetas);

/* ----- ACT 5 ----- */


const mediaGoles = futbolistas.reduce((total,jugador) => {
    
    total[jugador.nombre] = {
        media: jugador.goles / jugador.partidosJugados
    };

    return total;
},{});


console.log(mediaGoles);


/* ----- ACT 6 ----- */

const mayorAsitencias = futbolistas.reduce((mayor,futbolista) => {
    return futbolista.asistencias > mayor.asistencias ? futbolista : mayor;
}, futbolistas[0]);

const nombreMayAsis = mayorAsitencias.nombre;
// console.log(nombreMayAsis);

/* ----- ACT 7 ----- */

const posicionJugadores = futbolistas.reduce((total,futbolista) => {
    const posicion = futbolista.posicion;

    if(!total[posicion])
        total[posicion] = [];

    total[posicion].push(futbolista.nombre);

    return total;
}, {});

// console.log(posicionJugadores);

/* ----- ACT 8 ----- */

let mas10Asistencias = futbolistas.filter(jugador => jugador.asistencias > 10);


/* ----- ACT 9 ----- */

let listaEquiposSinRepetir = [...new Set(futbolistas.map(futbolista => futbolista.equipo))];


/* ----- ACT 10 ----- */

let mayorGoles = () => {
    let numMayor = Math.max(...futbolistas.map(futbolista => futbolista.goles));
    let mayorGoles = futbolistas.filter(futbolista => futbolista.goles === numMayor);

    console.log(mayorGoles);
};

/* ----- ACT 11 ----- */

let promedioAsistencias = futbolistas.map(futbolista => {
    return {
        nombre: futbolista.nombre,
        promedioAsistencias: (futbolista.asistencias / futbolista.partidosJugados)
    };
});

/* ----- ACT 12 ----- */

let menorTarjetasAmarillas = () => {
    let numMenor = Math.min(...futbolistas.map(futbolista => futbolista.tarjetaAmarilla));

    let jugadorMenor = futbolistas.filter(futbolista => futbolista.tarjetaAmarilla === numMenor);
};

/* ----- ACT 13 ----- */

let agruparPorEquipo = futbolistas.reduce((total,jugador) => {
    let equipo = jugador.equipo;

    if(!total[equipo]){
        total[equipo] = [];
    }

    total[equipo].push(jugador.nombre);

    return total;
},{});

/* ----- ACT 14 ----- */

let jugadoresPorPosicion = futbolistas.reduce((posiciones,jugador) => {
    let posicion = jugador.posicion;

    if(!posiciones[posicion])
        posiciones[posicion] = 0;

    posiciones[posicion] += 1;

    return posiciones;
},{});

/* ----- ACT 15 ----- */

let actividad15 = futbolistas.map(jugador => {
    return {
        nombre: jugador.nombre,
        goles: jugador.goles
    };
});

/* ----- ACT 16 ----- */

let menosDe5Amarillas = futbolistas.filter(futbolista => futbolista.tarjetaAmarilla < 5);

/* ----- ACT 17 ----- */

let jugadoresEquipos = futbolistas.map(jugador => {
    return {
        nombre: jugador.nombre,
        equipo: jugador.equipo
    }
});

/* ----- ACT 18 ----- */

let tarjetasRojas = futbolistas.filter(jugador => jugador.tarjetaRoja > 0);

/* ----- ACT 19 ----- */


