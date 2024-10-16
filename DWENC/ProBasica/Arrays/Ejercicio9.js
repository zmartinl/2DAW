/*
    9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
    En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
    corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
    datos debe finalizar al ingresar un valor negativo en el número de cuenta.
    Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

    a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
    según su saldo, sabiendo que:
        Estado de la cuenta 'Acreedor' si el saldo es >0.
        'Deudor' si el saldo es <0.
        'Nulo' si el saldo es =0.

    b) La suma total de los saldos acreedores.
*/

window.addEventListener('load', () => {
    let cuentasCorrientes = {};

    function agregarCuentas(numCuenta,nombreCli,saldoActual) {
        cuentasCorrientes[numCuenta] = {
            nombre: nombreCli,
            saldo: saldoActual,
            estado: estado(saldoActual)
        }
    }

    let estado = saldo => {
        if(saldo > 0) return 'Acreedor';
        if(saldo < 0) return 'Deudor';
        return 'Nulo';
    };

    function introducir() {
        let numCuenta;
        do{
            numCuenta = Number(prompt('Introduce numero de cuenta'));
            if(numCuenta >= 0){
                let nombre = prompt('Introduce el nombre');
                let saldo = parseFloat(prompt('Introduce el saldo de la cuenta'));
                agregarCuentas(numCuenta,nombre,saldo);
            }
        }while(numCuenta >= 0);
    }

    function mostrarCuentas() {
        console.log('Todas las cuentas corrientes');
        for(let numCuenta in cuentasCorrientes){
            console.log(`El numero de cuenta: ${numCuenta} le pertenece a ${cuentasCorrientes[numCuenta].nombre} y tiene ${cuentasCorrientes[numCuenta].saldo} de saldo y el estado es: ${cuentasCorrientes[numCuenta].estado}`);
        }
    }

    let sumas = cuentasCorrientes => {
        let acumulador = 0;
        for(numCuenta in cuentasCorrientes){
            if(cuentasCorrientes[numCuenta].estado === "Acreedor")
                acumulador += cuentasCorrientes[numCuenta].saldo;
        }
        return acumulador;
    }

    introducir();
    mostrarCuentas();
    alert(`La suma de los sueldos de los acreedores es de: ${sumas(cuentasCorrientes)}`);
});