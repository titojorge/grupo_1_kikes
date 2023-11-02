window.onload(()=> {
    let botonCerrar = document.querySelector('.cerrar-sesion');
    if (document.cookie.id) {
        botonCerrar.style.display = "block";
    } else {
        botonCerrar.style.display = "none";
    }
})