const sequelize = require('../config/database');
const User = require('./user');
const Paper = require('./paper');
const Review = require('./review');
const Assignment = require('./assignment');
const Session = require('./session');
const Certificate = require('./certificate');
module.exports = { sequelize, User, Paper, Review, Assignment, Session, Certificate };
