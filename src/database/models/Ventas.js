module.exports = (sequelize, dataTypes) => {
    let alias = 'Venta';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        usuario_id: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        fecha_venta: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        status: {
            type: dataTypes.STRING(45),
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
        tableName: 'ventas'
    }
    const Venta = sequelize.define(alias, cols, config); 


    //VERIFICAR ESTE CODIGO
    // Venta.associate = function(models){
    //     Venta.belongsTo(models.Usuario, {
    //         as: "Usuarios",
    //         foreignKey: "usuario_id"
    //     })
    // }

    return Venta
};