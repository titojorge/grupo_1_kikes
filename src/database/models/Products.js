module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_producto_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        type_category: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        stock: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        fecha_creacion: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        fecha_modificacion: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        fecha_borrado: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },

    };
    let config = {
        timestamps: false,
        tableName: 'productos',
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function(models){
        Product.belongsTo(models.CategoryProduct, {
            as: "categoriaProduct",
            foreignKey: "category_producto_id"
        })
    }
    Product.associate = function(models){
        Product.hasMany(models.Venta_producto, {
            as: "VentaProducto",
            foreignKey: "producto_id"
        })
    }
 
    return Product
};