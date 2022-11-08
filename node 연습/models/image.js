const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("image", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fileAddress: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};