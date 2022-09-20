const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
};