// Perimetro de un cuadrado

window.addEventListener('load', () => {
    let perimetro = lado => {
        return lado * 4;
    }

    alert('Perimetro : '+perimetro(Number(prompt('Lado de un cuadrado: '))));
});