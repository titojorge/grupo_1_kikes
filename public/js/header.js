window.addEventListener('load', ()=> {
    let btnDropdown = document.querySelector('.dropdown-toggle');
    let btnDropdownMenu = document.querySelector('.dropdown-menu');
    
    if( btnDropdown ) {
        btnDropdown.addEventListener('click', () => {
            btnDropdownMenu.style.cssText = (btnDropdownMenu.style.display == 'none') ? 'display:block':'display:none'
        })   
    }

    let btn_suscribirse = document.getElementById("suscribirse")
    
    
    btn_suscribirse.addEventListener("click", function() {
        // Aquí puedes agregar el código para manejar la acción de compra
        document.getElementById("email_suscripcion").value = "";
        alert("Felicidades ud se ha suscripto exitosamente a la pagina.");
      });
    
})