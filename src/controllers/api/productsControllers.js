const db = require('../../database/models');
const Product = require('../../database/models/Products');
const Op = db.Sequelize.Op;

const productApiController = {
    list: (req, res) => {
        db.Product
            .findAll()
            .then(products => {
                const count = products.length; 
                const countByCategory = {};
                const data = [
                ]
                products.forEach(product => {; 
                    const dataProduct = {
                        id: product.id,
                        nombre: product.nombre,
                        description: product.description,
                        categories: product.type_category,
                        detail: `localhost:3000/api/products/${product.id}`
                    }
                    data.push (dataProduct)
                });

                return res.json({
                    count: count,
                    products: data
                });
            })
            .catch(error => {
                return res.status(500).json({ error: error.message });
            });
    },
    show: (req, res) => {
        db.Product
            .findByPk(req.params.id)
            .then(productos => {
                return res.json({
                    data: {
                        id: productos.id,
                        Nombre: productos.nombre,
                        Precio: productos.price,
                        Descuento: productos.discount,
                        Categoria_De_Producto: productos.category_producto_id,
                        Imagen: "localhost:3000/images/productsImg/" + productos.image,
                        Tipo_categoria: productos.type_category,
                        Stock: productos.stock,
                        Fecha_creacion: productos.fecha_creacion,
                        Fecha_modificacion: productos.fecha_modificacion,
                        Fecha_borrado: productos.fecha_borrado
                    }
                })
            })
    }
};

module.exports = productApiController;

