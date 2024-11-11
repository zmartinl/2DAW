window.onload = () => {
    const botonImagen = document.getElementById('imagenes');
    

    let cargarDatos = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if(!response.ok)
                    throw new Error('Error al cargar el archivo');
                return response.json();
            })
            .then(data => {
                const contenedor = document.getElementById('contenedor');
                contenedor.innerHTML = '';

                data.results.forEach(persona => {
                    const img = document.createElement('img');

                    img.src = persona.image;
                    img.style.width = '300px';
                    img.style.margin = '10px';

                    contenedor.appendChild(img);
                });
            })
            .catch(error => console.log('Error', error));
    };

    botonImagen.addEventListener('click', () => {
        cargarDatos();
    })
};