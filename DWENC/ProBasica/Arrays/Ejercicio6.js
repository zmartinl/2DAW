/* 
    En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
    realizar un programa que lea los sueldos que cobra cada empleado e informe
    cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
    Además el programa deberá informar el importe que gasta la empresa en sueldos
    al personal.
*/

window.addEventListener('load', () => {
    let sueldos = [160,380,410,490,270];
    let contentre = 0;
    let contmas = 0;

    let operacion = sueldos => {
        for(sueldo of sueldos){
            if(sueldo >= 100 && sueldo <= 300)
                contentre++;
            if(sueldo > 300)
                contmas++;
        }

        let sumaSueldos = sueldos.reduce((acumulador,sueldo) => acumulador + sueldo, 0);

        alert(`Hay ${contentre} sueldos entre 100 y 300 euros`);
        alert(`Hay ${contmas} sueldos mayor a 300 euros`);
        alert(`El gasto para la empresa es de ${sumaSueldos}`);
    };

    operacion(sueldos);
});