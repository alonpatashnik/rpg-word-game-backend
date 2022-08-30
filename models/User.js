const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 3,
            max: 15
        }
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        validate:{
            len:[3]
        },
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER
    },

},{
    sequelize,
    hooks:{
        beforeCreate:function(newUser){
            newUser.password = bcrypt.hashSync(newUser.password,4);
            return newUser
        }
    }
});

module.exports=User