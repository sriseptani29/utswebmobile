// D:\react_sriseptiani\config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('contact_form', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
