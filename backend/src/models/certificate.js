const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Certificate = sequelize.define('Certificate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.ENUM('participation','presentation') },
  filePath: { type: DataTypes.STRING }
});
module.exports = Certificate;
