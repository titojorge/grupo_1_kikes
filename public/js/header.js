window.addEventListener('load', ()=> {
    let btnDropdown = document.querySelector('.dropdown-toggle');
    let btnDropdownMenu = document.querySelector('.dropdown-menu');
    
    if( btnDropdown ) {
        btnDropdown.addEventListener('click', () => {
            btnDropdownMenu.style.cssText = (btnDropdownMenu.style.display == 'none') ? 'display:block':'display:none'
        })   
    }
    
})