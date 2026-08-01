const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Paper = sequelize.define('Paper', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  abstract: { type: DataTypes.TEXT },
  keywords: { type: DataTypes.STRING },
  filePath: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('submitted','under-review','accepted','rejected','camera-ready'), defaultValue: 'submitted' }
});
Paper.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
module.exports = Paper;
