module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryProduct';
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const CategoryProduct = sequelize.define(alias, cols, config); 

    CategoryProduct.associate = function(models){
        CategoryProduct.hasMany(models.Product, {
            as: "Product",
            foreignKey: "category_producto_id"
        })
    }

    return CategoryProduct
};