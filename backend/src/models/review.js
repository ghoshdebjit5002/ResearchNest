const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Paper = require('./paper');
const Review = sequelize.define('Review', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  score: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.TEXT },
  finalized: { type: DataTypes.BOOLEAN, defaultValue: false }
});
Review.belongsTo(User, { as: 'reviewer', foreignKey: 'reviewerId' });
Review.belongsTo(Paper, { foreignKey: 'PaperId' });
module.exports = Review;
