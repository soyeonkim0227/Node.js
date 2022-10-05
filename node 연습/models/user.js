const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true, // 기본키
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true // 고유 값, 중복 안됨
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false
        }
    });
};