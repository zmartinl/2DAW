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