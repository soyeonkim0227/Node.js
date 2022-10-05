const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("comment", {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
};