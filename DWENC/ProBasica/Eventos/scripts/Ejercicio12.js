/*
    12.Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
    Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra
    vez esa sección de contenidos
    Completar el resto de enlaces de la página para que su
    comportamiento sea idéntico al del primer enlace
    Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/

// Función para alternar visibilidad de la sección
function toggleSection(enlace, seccionId) {
    const seccion = document.getElementById(seccionId);

    if (seccion.style.display === "none") {
        // Si la sección está oculta, la mostramos
        seccion.style.display = "block";
        enlace.textContent = "Ocultar " + seccionId.charAt(0).toUpperCase() + seccionId.slice(1);
    } else {
        // Si la sección está visible, la ocultamos
        seccion.style.display = "none";
        enlace.textContent = "Mostrar " + seccionId.charAt(0).toUpperCase() + seccionId.slice(1);
    }
}

// Esperar a que el DOM se haya cargado
window.onload = () => {
    // Seleccionar los enlaces
    const enlace1 = document.getElementById("enlace1");
    const enlace2 = document.getElementById("enlace2");
    const enlace3 = document.getElementById("enlace3");

    // Añadir eventos de click a los enlaces
    enlace1.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace
        toggleSection(e, "seccion1");
    });

    enlace2.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSection(e, "seccion2");
    });

    enlace3.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSection(e, "seccion3");
    });
};
