const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Paper = require('./paper');
const Assignment = sequelize.define('Assignment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});
Assignment.belongsTo(User, { as: 'reviewer', foreignKey: 'reviewerId' });
Assignment.belongsTo(Paper, { foreignKey: 'PaperId' });
module.exports = Assignment;
