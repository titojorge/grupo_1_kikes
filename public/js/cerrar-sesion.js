window.addEventListener('load', ()=> {
    let botonCerrar = document.querySelector('.cerrar-sesion');
    let cookie_id = document.cookie.split("; ").find((row) => row.startsWith("id="))?.split("=")[1]
    if (cookie_id > 0) {
        botonCerrar.style.display = "block";
    } else {
        botonCerrar.style.display = "none";
    }
})