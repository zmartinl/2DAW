/*
    11.Realiza una página que muestre un formulario para la conversión de
    Euros a Pesetas o viceversa. Los campos del formulario han de poder
    ser limpiados.
*/

window.addEventListener('load', () => {
    const euros = document.getElementById('euros');
    const pesetas = document.getElementById('pesetas');
    const limpiar = document.getElementById('limpiar');

    euros.addEventListener('blur', () => {
        let europrecio = Number(euros.value);
        pesetas.value = europrecio * 166.386;
    });

    limpiar.addEventListener('click', () => {
        euros.value = null;
        pesetas.value = null;
    });
});