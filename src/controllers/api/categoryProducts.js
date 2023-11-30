const db = require('../../database/models');
const Categoria_De_Producto = require('../../database/models/CategoryProduct');
const Op = db.Sequelize.Op;

const categoryApiController = {
    list: (req, res) => {
        db.CategoryProduct
            .findAll()
            .then(categories => {
                //const count = category.length; 
                //const countByCategory = {};
                const data = []
                categories.forEach(category => {; 
                    const dataCategory = {
                        id: category.id,
                        nombre: category.nombre,
                        fecha_creacion: category.fecha_creacion,
                        fecha_modificacion: category.fecha_modificacion,
                        detail: `localhost:3000/api/categories/${category.id}`
                    }
                    data.push (dataCategory)
                });

                return res.json({
                    total: categories.length,
                    categoriesData: data
                });
            })
            .catch(error => {
                return res.status(500).json({ error: error.message });
            });
    },
    show: (req, res) => {
        db.CategoryProduct
            .findByPk(req.params.id)
            .then(categoria => {
                return res.json({
                    Producto: {
                        id: categoria.id,
                        Nombre: categoria.nombre,
                        Fecha_creacion: categoria.fecha_creacion,
                        Fecha_modificacion: categoria.fecha_modificacion,
                        Fecha_borrado: categoria.fecha_borrado
                    }
                })
            })
    }
};

module.exports = categoryApiController;

