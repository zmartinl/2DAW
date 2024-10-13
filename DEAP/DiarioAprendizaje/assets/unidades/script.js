window.addEventListener('load', () => {

    $(".subir").click((e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1300);
        return false;
    });

});