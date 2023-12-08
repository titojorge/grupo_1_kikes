const fs = require('fs');
const path = require('path');
const multer = require('multer');
// const usersFilePath = path.join(__dirname, '../data/user.json');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");
const { log } = require('console');
const validateLogin = require('../middlewares/validateLogin');
const { validationResult } = require('express-validator')

const mainController = {
    home: (req, res) => {
        db.Product.findAll()
        .then( products => {
            res.render('home', { products, userFound: '' });
        })
    },
    login: (req, res) => {
        return res.render('./users/login', {errors:  ''});
    },
    save_login: (req, res) => {
        let email_form = req.body.email;
        let pass_form = req.body.contrasenia;
        let promesaProductos = db.Product.findAll()
        let promesaUsuario = db.Usuario.findOne({
            where: { email : email_form}
        })
        Promise.all([promesaProductos, promesaUsuario])
        .then( function ([products, user_found]) {
            let resultValidation = validationResult(req)
		    if(resultValidation.errors.length > 0){
                let errores = resultValidation.mapped()
                console.log(errores);
                return res.render('./users/login', { errors: errores, oldData: req.body })
            }else{
                if (user_found) {
                    const check = bcrypt.compareSync(pass_form, user_found.contrasenia);
                    if (check) {
                        req.session.userLogged = user_found;
                        if(req.body.remember_user) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 10 })
                        }
                        console.log('exito');
                        return res.redirect('/')
                    } else {
                        res.render('./users/login',{errors: {contrasenia:{msg:'Contraseña Incorrecta123'}}})
                        console.log('fracaso');
                    }
                } else {
                    res.render('./users/login',{errors: {email:{msg:'Usuario inexistente'}}});
                    console.log('Usuario no encontrado');
                }
		  }})
        
    },
    cerrar: (req, res) => {
        if (req.session.userLogged) {
            res.clearCookie('userEmail');
		    req.session.destroy();
            res.locals.isLogged = false;
            return res.redirect('/login')
        }
    }
}

module.exports = mainController;
