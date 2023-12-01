window.onload = function () {

    let form = document.querySelector('#form_register');
    const ulError = document.querySelector(".text-danger");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let errors = [];
        let inputName = document.getElementById('nombre');
        let inputSurname = document.getElementById('apellido');
        let inputPassword = document.getElementById('contrasenia');
        let inputConfirmarPassword = document.getElementById('confirmar_contrasenia');
        let inputImagen = document.getElementById('imagen_perfil');
        
        if(inputName.value == ''){
            errors.push({
                    field: inputName.name,
                    msg: "Campo Vacio!"
                })
            } else {
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
            } else {
                if (inputSurname.value.length < 2) {
                    errors.push({
                        field: inputSurname.name,
                        msg: "El campo debe tener al menos 2 caracteres"
                    })
                }
            }

        if (inputPassword.value == '') {
            errors.push({
                field: inputPassword.name,
                msg: "Campo Vacio!"
            })
        } else {
            if (inputPassword.value.length < 8) {
                errors.push({
                    field: inputPassword.name,
                    msg: "El campo debe tener al menos 8 caracteres"
                })
            }
        }

        if (inputConfirmarPassword.value == '') {
            errors.push({
                field: inputConfirmarPassword.name,
                msg: "Campo Vacio!"
            })
        } else {
            if (inputConfirmarPassword.value.length != inputPassword.value) {
                errors.push({
                    field: inputConfirmarPassword.name,
                    msg: "Contraseña incorrecta"
                })
            }
        }

        let tipo = inputImagen.files[0].type
        if (!(tipo == 'image/jpeg' || tipo == 'image/png' || tipo == 'image/gif')) {
            errors.push({
                field: inputImagen.name,
                msg: "Solo se permiten extensiones de tipo .png, .jpg, .gif"
            })
        }

        if (errors.length > 0) {
            document.querySelector('ul.text-danger').innerHTML = ''
            console.log(errors);
            errors.forEach((error) => {
                ulError.innerHTML += "<li>" + error.field + ": " + error.msg + "</li>";
            });
        } else {
            form.submit();
        }

    })
}