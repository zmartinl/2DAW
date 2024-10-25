let Empleados = `12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora`
;

let datosEmpleados = [];

const numEmpleados = Empleados.split('\n');


for(let i = 0; i < numEmpleados.length; i++){
    let empleado = numEmpleados[i].split(',');
    datosEmpleados.push(
        {
            numDoc: empleado[0],
            nombre: empleado[1],
            edad: Number(empleado[2]),
            sexo: empleado[3],
            puesto: empleado[4]
        }
    );
}

let buscar = () => {
    let numDoc = prompt('Introduce el numDoc del empleado')
    return datosEmpleados.find((elemento) => elemento.numDoc === numDoc);
};


let agregar = () => {
    let numDoc = prompt('Introduce numero de documento');
    let nombre = prompt('Introduce nombre');
    let edad = Number(prompt('Introduce la edad'));
    let sexo = prompt('Intoduce sexo');
    let puesto = prompt('Introduce puesto de trabajo');

    datosEmpleados.push(
        {
            numDoc,
            nombre,
            edad,
            sexo,
            puesto
        }
    )

    console.log(datosEmpleados);
};

let borrar = () => {
    let numDocBorrar = prompt('Introduce el numero de documento del empleado a eliminar');
    
    let indice = datosEmpleados.findIndex(empleado => empleado.numDoc === numDocBorrar);
    
    datosEmpleados.splice(indice, 1);

    console.log(datosEmpleados);
};


console.log(datosEmpleados);

console.log(buscar());

agregar();


borrar();








