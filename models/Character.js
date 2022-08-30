const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Character extends Model {}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     references: {model:"user", key:"id"}
    // },
    charName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 3,
            max: 15
        }
    },
    charJpg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize
})

module.exports = Character