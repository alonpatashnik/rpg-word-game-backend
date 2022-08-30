const User = require('./User')
const Character = require('./Character')
const Prompt = require('./Prompt')
const Word = require('./Word');
const sequelize = require('sequelize');

User.hasOne(Character, {
    foreignKey: 'id'
});
Character.belongsTo(User);

module.exports = { User, Character, Prompt, Word };



