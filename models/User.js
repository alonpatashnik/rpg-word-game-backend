const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
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
    playableCharcterId: {
        type: DataTypes.INTEGER
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