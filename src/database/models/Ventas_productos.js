module.exports = (sequelize, dataTypes) => {
    let alias = 'Venta_producto';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        venta_id: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        producto_id: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        subtotal: {
            type: dataTypes.DECIMAL(10,2),
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
        tableName: 'venta_productos'
    }
    const VentaProducto = sequelize.define(alias, cols, config); 

    VentaProducto.associate = function(models){
        VentaProducto.belongsTo(models.Venta, {
            as: "Ventas",
            foreignKey: "venta_id"
        })
    }
    VentaProducto.associate = function(models){
        VentaProducto.belongsTo(models.Product, {
            as: "Producto",
            foreignKey: "producto_id"
        })
    }
    return VentaProducto;
};