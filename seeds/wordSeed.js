const { Word } = require('../models');

const wordData = [
  {
    word: 'Connoisseur',
  },
  {
    word: 'Dreading',
  },
  {
    word: 'Grandiose',
  },
  {
    word: 'Associate',
  },
  {
    word: 'Complicate',
  },
  {
    word: 'Discourage',
  },
  {
    word: 'Computer',
  },
  {
    word: 'Vegetable',
  },
  {
    word: 'Garden',
  },
  {
    word: 'Imaginable',
  },
  {
    word: 'Incredulously',
  },
  {
    word: 'Psychology',
  },
  {
    word: 'Meteorology',
  },
  {
    word: 'Forensics',
  },
  {
    word: 'Olfactory',
  },
];

const words = () => Word.bulkCreate(wordData);

module.exports = words;