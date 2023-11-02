module.exports = (sequelize, dataTypes) => {
    let alias = 'Suscriptor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        email: {
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
        timestamps: false,
        tableName: 'suscriptores',
        deletedAt: false
    }
    const Suscriptor = sequelize.define(alias, cols, config); 

    return Suscriptor
};