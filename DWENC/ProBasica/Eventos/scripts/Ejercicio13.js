/*
    13.Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de
    la página:
    Para mostrar los mensajes, utilizar la función muestraInformacion()
    deduciendo su funcionamiento a partir de su código fuente.
    Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para
    indicar el nuevo evento y su información asociada
*/

let x = 0;
let y = 0;

const muestraInformacion = (evento) => {
    const coordenadasDiv = document.getElementById("coordenadas");
    if (evento.type === 'keydown') {
        coordenadasDiv.textContent = `Coordenadas del ratón - X: ${x}, Y: ${y}`;
    }
};

window.addEventListener('load', () => {
    document.addEventListener('mousemove', (e) => {
        x = e.clientX; 
        y = e.clientY; 
        muestraInformacion(e); 
    });

    document.addEventListener('keydown', (e) => {
        muestraInformacion(e); // Llamar a la función al presionar una tecla
    });
});