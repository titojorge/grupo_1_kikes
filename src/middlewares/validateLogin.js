const { body, check } = require('express-validator')
const path = require('path');

let validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email válido'),
    check('contrasenia')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .custom(async (password, { req }) => {
            const { email } = req.body;
            const user = await User.findOne({ where: { email } });

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            const match = await bcrypt.compare(password, user.contrasenia);

            if (!match) {
                throw new Error('Contraseña incorrecta');
            }

            return true;
        }),
];        

module.exports = validateLogin;