const { body, check } = require('express-validator')
const path = require('path');

let validateRegister = [
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({min: 2}).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('apellido')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({min: 2}).withMessage('El apellido debe tener al menos 5 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el correo')
        .isEmail().isLength({min: 5}).withMessage('El correo debe tener al menos 5 caracteres'),
    check('confirmar_email')
        .notEmpty().withMessage('Debes confirmar el correo').bail()
        .isEmail().isLength({min: 5}).withMessage('El correo debe tener al menos 5 caracteres'),
    check('contrasenia')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({min: 5}).withMessage('La contraseña debe tener al menos 5 caracteres'),
    check('confirmar_contrasenia')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({min: 5}).withMessage('La contraseña debe tener al menos 5 caracteres'),
    check('categoria')
        .notEmpty().withMessage('Debes completar el tipo de categoria'),
    check('sexo')
        .notEmpty().withMessage('Debes completar el tipo de sexo'),
    check('imagen_perfil')
        .custom((value, {req}) => {
            let file = req.file
            let acceptedExtension = ['.jpg','.jpeg','.gif','.png']
            if(!file){
                throw new Error('Tienes que subir una imagen')
            } else {
                let fileExtension = path.extname(file.originalname)
                if(!acceptedExtension.includes(fileExtension)){
                    throw new Error(`Las extensiones de archivo permitidas son: ${acceptedExtension.join(', ')}`)
                }
            }
            return true;
        })
]

module.exports = validateRegister;