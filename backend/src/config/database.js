const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT || 'sqlite',
  storage: process.env.DATABASE_STORAGE || './database.sqlite',
  logging: false
});
module.exports = sequelize;
