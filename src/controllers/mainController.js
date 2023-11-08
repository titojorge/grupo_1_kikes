const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/user.json');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const mainController = {
    home: (req, res) => {
        return res.render('home', { products: products, userFound: '' });
    },
    edit: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(user => {
            return res.render('./users/editUser', { user });
        })
        
    },
    update: (req, res) => {
		form = req.body;
		const imagen = req.file ? '/images/perfiles/' + req.file.filename: '';
        const hashedPassword = bcrypt.hashSync(form.contrasenia, 10);
		db.Usuario.update(
			{
				nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                contrasenia: hashedPassword,
                categoria: form.categoria,
                fecha_nacimiento: form.fecha_nacimiento,
                sexo: form.sexo,
                imagen: imagen,
                fecha_modificacion: new Date().toLocaleDateString()
			},
			{
			  where: {
				id: req.params.id,
			  },
			}
		  ).then(() => {
			res.redirect('/');
		  });
	},
    details: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then( user => {
            return res.render('./users/details', { user });
        })
        
    },
    listUsers: (req, res) => {
        db.Usuario.findAll()
        .then( users => {
            return res.render('./users/users.ejs' , { users });
        })
        
    },
    login: (req, res) => {
        return res.render('./users/login');
    },
    save_login: (req, res) => {
        let email_form = req.body.email;
        let pass_form = req.body.contrasenia;

        let user_found = users.filter(elem => elem.Email == email_form)
        if (user_found && user_found.length > 0) {
            //const check = bcrypt.compareSync(pass_form, user_found[0].Contrasenia);
            const check = user_found[0].Contrasenia == pass_form? true : false;
            if (check) {
                req.session.id_usuario = user_found[0].Identificador;
                req.session.nombre = user_found[0].Nombre;
                req.session.apellido = user_found[0].Apellido;
                res.cookie('id', user_found[0].Identificador);
                res.cookie('nombreUser', user_found[0].Nombre);
                res.render('home', { products: products, userFound: user_found })
                console.log('exito');
            } else {
                res.render('./users/login')
                console.log('fracaso');
            }
        } else {
            res.render('./users/login');
            console.log('Usuario no encontrado');
        }
    },
    register: (req, res) => {
        return res.render('./users/register');
    },
    save: (req, res, err) => {
        if (err) {
            console.log(err)
        }

        const form = req.body;
		const imagen = req.file ? '/images/perfiles/' + req.file.filename: '';
        const hashedPassword = bcrypt.hashSync(form.contrasenia, 10);

		db.Usuario.create({
			nombre: form.nombre,
            apellido: form.apellido,
			email: form.email,
			contrasenia: hashedPassword,
			categoria: form.categoria,
			fecha_nacimiento: form.fecha_nacimiento,
			sexo: form.sexo,
			imagen: imagen,
			fecha_creacion: new Date().toLocaleDateString(),
			fecha_modificacion: new Date().toLocaleDateString()
		  }).then((newUser) => {
			console.log(newUser);
			return res.redirect('/');
		  });

        
        // const newUser = {
        //     Identificador: users.length + 1,
        //     Nombre: nombre,
        //     Apellido: apellido,
        //     Email: email,
        //     Contrasenia: hashedPassword,//PRUEBA
        //     Categoria: "Customer",
        //     Imagen: imagen,
        // };
        // users.push(newUser);
        // fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
        
        },
    cerrar: (req, res) => {
        if (req.session.id_usuario) {
            req.session.destroy();
            return res.redirect('/login')
        }
    }
}

module.exports = mainController;
