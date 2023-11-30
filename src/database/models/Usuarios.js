module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        categoria: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        sexo: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fecha_creacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        fecha_modificacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        fecha_borrado: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },

    };
    let config = {
        timestamps: false,
        tableName: 'usuarios',
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        deletedAt: false
    }
    const Usuario = sequelize.define(alias, cols, config); 

    Usuario.associate = function(models){
        Usuario.hasMany(models.Venta, {
            as: "ventas",
            foreignKey: "usuario_id"
        })
    }
 
    return Usuario
};