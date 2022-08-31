const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Word extends Model {}

Word.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Word: {
        type: DataTypes.STRING,
    },
},{
    sequelize
});

module.exports = Word