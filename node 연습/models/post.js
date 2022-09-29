const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true, // 중복x, 고유해야됨, 대표
            allowNull: false,
            autoIncrement: true // id 수 자동 증가
        },
        writer : {
            type: DataTypes.INTEGER,
            allowNull: false
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