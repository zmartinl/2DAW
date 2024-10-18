/*
    14. Construir una calculadora, que permita realizar las operaciones básicas.
*/

function agregar(value){
    document.getElementById('pantalla').value += value
}

function calcular(){
    let obtenido = document.getElementById('pantalla').value
    const resultado = eval(obtenido)
    
    document.getElementById('pantalla').value = resultado
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

