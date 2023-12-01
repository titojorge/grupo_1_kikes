const { body, check } = require('express-validator')
const path = require('path');
const db = require('../database/models');
let validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email válido'),
    check('contrasenia')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
            
];        

module.exports = validateLogin;