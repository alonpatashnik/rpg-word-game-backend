const { Word } = require('../models');

const wordData = [
  {
    word_word: 'Connoisseur',
  },
  {
    word_word: 'Dreading',
  },
  {
    word_word: 'Grandiose',
  },
  {
    word_word: 'Associate',
  },
  {
    word_word: 'Complicate',
  },
  {
    word_word: 'Discourage',
  },
  {
    word_word: 'Computer',
  },
  {
    word_word: 'Vegetable',
  },
  {
    word_word: 'Garden',
  },
  {
    word_word: 'Imaginable',
  },
  {
    word_word: 'Incredulously',
  },
  {
    word_word: 'Psychology',
  },
  {
    word_word: 'Meteorology',
  },
  {
    word_word: 'Forensics',
  },
  {
    word_word: 'Olfactory',
  },
];

const words = () => Word.bulkCreate(wordData);

module.exports = words;