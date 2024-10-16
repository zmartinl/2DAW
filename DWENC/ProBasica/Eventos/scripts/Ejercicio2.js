/*
    (Eventos onFocus y onBlur). Solicitar que se introduzca el nombre y la
    clave de un usuario. Mostrar una ventana de alerta si en la clave se
    introducen menos de 7 caracteres o más de 20.
*/

window.addEventListener('load', () => {
    const nombre = document.getElementById('nombre');
    const clave = document.getElementById('clave');

    nombre.addEventListener('focus', () => {
        alert('El campo nombre ha recibido el enfoque');
    });

    nombre.addEventListener('blur', () => {
        alert('El campo nombre ha perdido el foco');
    });
    
    clave.addEventListener('focus', () => {
        alert('El campo clave ha recibido el enfoque');
    });
    
    clave.addEventListener('blur', validarClave);


    function validarClave() {
        let claveValor = clave.value;
        if (claveValor.length < 7 || claveValor.length > 20) {
            alert('La clave debe estar entre 7 y 20 caracteres');
            clave.focus();
        } else {
            alert('Clave Válida');
        }
    }
});