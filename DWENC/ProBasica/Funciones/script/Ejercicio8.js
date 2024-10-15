// En que cuatrimestre estamos.

window.addEventListener('load', () => {
    function determinarCuatrimestre() {
        
        const mesActual = Number(prompt('Introduce el mes'));

        // Determinar el cuatrimestre
        if (mesActual >= 1 && mesActual <= 3) {
            return "Estamos en el primer cuatrimestre (enero - marzo).";
        } else if (mesActual >= 4 && mesActual <= 6) {
            return "Estamos en el segundo cuatrimestre (abril - junio).";
        } else if (mesActual >= 7 && mesActual <= 9) {
            return "Estamos en el tercer cuatrimestre (julio - septiembre).";
        } else if (mesActual >= 10 && mesActual <= 12) {
            return "Estamos en el cuarto cuatrimestre (octubre - diciembre).";
        }
    }
    
    alert(determinarCuatrimestre());
});