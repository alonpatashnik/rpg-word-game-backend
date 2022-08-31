const words = require('./wordSeed');
// const prompt = require('./promptSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await words();
  console.log('\n----- WORDS SEEDED -----\n');

//   await prompt();
//   console.log('\n----- PROMPTS SEEDED -----\n');

  process.exit(0);
};

seedAll();