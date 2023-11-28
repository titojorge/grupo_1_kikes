window.onload = function () {

    let form = document.querySelector("#form_register");
    const ulError = document.querySelector(".text-danger");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let errors = [];
        let inputName = document.getElementById('nombre');
        let inputSurname = document.getElementById('apellido');
        let inputEmail = document.getElementById('email');
        let inputConfirmarEmail = document.getElementById('confirmar_email');
        let inputPassword = document.getElementById('contrasenia');
        let inputConfirmarPassword = document.getElementById('confirmar_contrasenia');
        
    })
}