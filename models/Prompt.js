const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Prompt extends Model {}

Prompt.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    dialogue: {
        type: DataTypes.STRING,
    },
},{
    sequelize
});

module.exports = Prompt