document.addEventListener('load', () => {
    const boton = document.getElementById('enviar');

    enviar.addEventListener('click', () => {
        const usuario = document.getElementById('usuario');
        const img = document.getElementsByTagName('img');

        $.ajax({
            url: `https://api.github.com/users/${usuario}`,
            async: false,
            success: (usuario) => {
                img.src = usuario.img;
            }
        });
    });
});