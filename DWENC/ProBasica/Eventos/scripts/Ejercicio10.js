/*
    10.(Evento: change). Confeccionar un formulario que muestre un checkbox
    que cuando se tilde active un botón (el checkbox debe mostrar un
    mensaje que diga : "Confirma los términos y condiciones?")
*/

window.addEventListener('load', () => {
    const condiciones = document.getElementById('condiciones');
    const boton = document.getElementById('enviar');

    condiciones.addEventListener('change', () => {
        if(condiciones.checked)
            boton.disabled = false;
        else
            boton.disabled = true;
    });
});

