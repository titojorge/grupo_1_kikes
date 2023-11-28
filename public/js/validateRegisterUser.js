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
        
        if(inputName.value == ''){
            errors.push({
                    field: inputName.name,
                    msg: "Campo Vacio!"
                })
          } else{
                if(inputName.value.length < 2){
                    errors.push({
                        field: inputName.name,
                        msg: "El campo debe tener al menos 2 caracteres"
                    })
                }
          }
        
          if(inputSurname.value == ''){
            errors.push({
                    field: inputSurname.name,
                    msg: "Campo Vacio!"
                })
          } else{
                if(inputSurname.value.length < 2){
                    errors.push({
                        field: inputSurname.name,
                        msg: "El campo debe tener al menos 2 caracteres"
                    })
                }
          }
    })
}