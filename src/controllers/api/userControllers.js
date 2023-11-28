const db = require('../../database/models');
const Usuarios = require('../../database/models/Usuarios');
const Op = db.Sequelize.Op;

const userApiControllers = {
    list: (req, res) => {
        db.Usuario
            .findAll()
            .then( usuarios => {

                let data = [];
                
                usuarios.forEach(user => {
                    let dataUser = {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.email,
                        detail: "localhost:3000/api/users/" + user.id
                    };
                    data.push(dataUser);
                });
                return res.json({
                    total: usuarios.length,
                    data: data,

                })
            } )
    },
    show: (req, res) => {
        db.Usuario
            .findByPk(req.params.id)
            .then( usuario => {
                return res.json({
                    data: {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        email: usuario.email,
                        sexo: usuario.sexo,
                        imagen: "localhost:3000" + usuario.imagen,
                        fecha_nacimiento: usuario.fecha_nacimiento,
                        fecha_creacion: usuario.fecha_creacion,
                        fecha_modificacion: usuario.fecha_modificacion,
                        fecha_borrado: usuario.fecha_borrado
                    }
                })
            } )
    }
}

module.exports = userApiControllers;