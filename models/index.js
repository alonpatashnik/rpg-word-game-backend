const User = require('./User')
const Character = require('./Character')
const Prompt = require('./Prompt')
const Word = require('./Word');

User.hasOne(Character);
Character.belongsTo(User);

module.exports = { User, Character, Prompt, Word };



