// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const comments = sequelize.define('Comment', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = comments;