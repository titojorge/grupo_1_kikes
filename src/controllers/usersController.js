const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const multer = require('multer');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");
const { validationResult } = require('express-validator');
const uploadFile = require('../middlewares/userMulter');

const usersController = {
  register: (req, res) => {
    return res.render("./users/register", {errors: '', oldData:''});
  },
  save: (req, res, err) => {
    if (err) {
      console.log(err);
    }
    const form = req.body;
    const imagenNew = req.file ? "/images/perfiles/" + req.file.filename : "";
    const hashedPassword = bcrypt.hashSync(form.contrasenia, 10);
    let validateRegister = validationResult(req);
    if (validateRegister.errors.length > 0) {
      let errores = validateRegister.mapped()
			console.log(errores);
			db.Usuario.findAll()
			.then( usuario => {
				return res.render('./users/register', { usuario, errors: errores, oldData: form })
			})
    } else {
      db.Usuario.create({
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        contrasenia: hashedPassword,
        categoria: form.categoria,
        fecha_nacimiento: form.fecha_nacimiento,
        sexo: form.sexo,
        imagen: imagenNew,
        fecha_creacion: new Date().toLocaleDateString(),
        fecha_modificacion: new Date().toLocaleDateString(),
      }).then((newUser) => {
        console.log(newUser);
        return res.redirect("/");
      });
    }
  },
  edit: (req, res) => {
    db.Usuario.findByPk(req.params.id).then((user) => {
      return res.render("./users/editUser", { user });
    });
  },
  update: (req, res) => {
    form = req.body;
    const imagen = req.file ? "/images/perfiles/" + req.file.filename : "";
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
        fecha_modificacion: new Date().toLocaleDateString(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => {
      res.redirect("/");
    })
    .catch(error => console.log(error));
  },
  details: (req, res) => {
    db.Usuario.findByPk(req.params.id).then((user) => {
      return res.render("./users/details", { user });
    });
  },
  listUsers: (req, res) => {
    db.Usuario.findAll().then((users) => {
      return res.render("./users/users.ejs", { users });
    });
  },
};

module.exports = usersController;
