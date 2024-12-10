export class Modelo {
    #preguntas;

    constructor() {
        this.#preguntas = [];
    }

    async obtenerPreguntasServidor() {
        const respuesta = await fetch('../../controller/CPregunta.php');
        this.#preguntas = await respuesta.json();
    }
}