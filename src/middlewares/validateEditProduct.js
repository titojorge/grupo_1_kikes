const { body, check } = require('express-validator')
const path = require('path');

let validateEditProduct = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre del producto')
        .isLength({min: 5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    check('description')
        .isLength({min: 20}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),  
    check('category_producto_id')
        .notEmpty().withMessage('Debes completar la categoria del producto'),
    check('type_category')
        .notEmpty().withMessage('Debes completar el tipo de categoria del producto'),
    check('price')
        .notEmpty().withMessage('Debe completar el campo de precio')
        .isFloat({ min: 0.00 }).withMessage('Debe ser un precio correcto y mayor a 0'),
    check('discount')
        .notEmpty().withMessage('Debe completar el descuento')
        .isInt({ min: 0, max: 100}).withMessage('Debe ser un descuento correcto y mayor o igual a 0 y menor o igual a 100'),
    check('image_product')
        .custom((value, {req}) => {
            let file = req.file
            let acceptedExtension = ['.jpg','.jpeg','.gif','.png']
            if(!file){
                throw new Error('Tienes que subir una imagen')
            } else{
                let fileExtension = path.extname(file.originalname)
                if(!acceptedExtension.includes(fileExtension)){
                    throw new Error(`Las extensiones de archivo permitidas son: ${acceptedExtension.join(', ')}`)
                }
            }
            return true;
        })
]

module.exports = validateEditProduct