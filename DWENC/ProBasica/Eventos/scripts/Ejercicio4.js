/*
    4. (Eventos onMouseOver y onMouseOut). Realizar una función similar a la
    anterior, para permitir llamar mediante hipervínculos a distintos
    programas que administran web-mail (gmail, hotmail y yahoo) .
*/

window.addEventListener('load', () => {
    const gmail = document.getElementById('gmail');
    const hotmail = document.getElementById('hotmail');
    const yahoo = document.getElementById('yahoo');

    // Redirección cuando el mouse pasa sobre Gmail
    gmail.addEventListener('mouseover', () => {
        window.location.href = 'https://mail.google.com';
    });

    // Redirección cuando el mouse pasa sobre Hotmail
    hotmail.addEventListener('mouseover', () => {
        window.location.href = 'https://outlook.live.com';
    });

    // Redirección cuando el mouse pasa sobre Yahoo
    yahoo.addEventListener('mouseover', () => {
        window.location.href = 'https://mail.yahoo.com';
    });
});