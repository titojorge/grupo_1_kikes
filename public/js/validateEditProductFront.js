window.onload = function () {
    let form = document.forms['form_product_edit'];

    form.onsubmit = (event) => {
        event.preventDefault();
        let errors = [];
        let inputName = document.querySelector('input.name');
        let inputDescription = document.querySelector('textarea.description');
        let inputImageProduct = document.querySelector('input.image_product');
        let inputCategoryProductId = document.querySelector('select.category_producto_id');
        let inputTypeCategory = document.querySelector('select.type_category');
        let inputPrice = document.querySelector('input.price');
        let inputDiscount = document.querySelector('input.discount');

        if (inputName.value == '') {
            errors.push({
                field: inputName.name,
                msg: "Campo Vacio!"
            })
        } else {
            if (inputName.value.length < 5) {
                errors.push({
                    field: inputName.name,
                    msg: "El campo debe tener al menos 5 caracteres"
                })
            }
        }

        if (inputDescription.value.length < 20) {
            errors.push({
                field: inputDescription.name,
                msg: "El campo debe tener al menos 20 caracteres"
            })
        }
        let tipo = inputImageProduct.files[0].type
        if (!(tipo == 'image/jpeg' || tipo == 'image/png' || tipo == 'image/gif')) {
            errors.push({
                field: inputImageProduct.name,
                msg: "Solo se permiten extensiones de tipo .png, .jpg, .gif"
            })
        }
        if (inputCategoryProductId.value == '') {
            errors.push({
                field: inputCategoryProductId.name,
                msg: "Debe seleccionar una opcion válida"
            })
        }
        if (inputTypeCategory.value == '') {
            errors.push({
                field: inputTypeCategory.name,
                msg: "Debe seleccionar una opcion válida"
            })
        }
        if (inputPrice == '' || inputPrice.value < 0) {
            errors.push({
                field: inputPrice.name,
                msg: "El precio no puede ser negativo"
            })
        }
        if (inputDiscount == '' || inputDiscount.value <= 0 || inputDiscount >= 100) {
            errors.push({
                field: inputDiscount.name,
                msg: "El descuento debe estar entre 0 y 100"
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
    };
};