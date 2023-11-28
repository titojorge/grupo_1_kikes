const db = require('../../database/models');
const Usuarios = require('../../database/models/Usuarios');
const Op = db.Sequelize.Op;

const userApiControllers = {
    list: (req, res) => {
        db.Usuario
            .findAll()
            .then( usuarios => {
                return res.json({
                    total: usuarios.length,
                    data: usuarios
                })
            } )
    },
    show: (req, res) => {
        db.Usuario
            .findByPk(req.params.id)
            .then( usuario => {
                return res.json({
                    data: usuario
                })
            } )
    }
}

module.exports = userApiControllers;