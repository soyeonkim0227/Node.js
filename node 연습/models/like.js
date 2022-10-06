const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("like", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
};