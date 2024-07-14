const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './OddoFinal.sqlite',
});

module.exports = sequelize;
