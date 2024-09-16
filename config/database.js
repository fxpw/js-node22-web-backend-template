const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env]; // подключаем конфигурацию в зависимости от окружения

const sequelize = new Sequelize(`mysql://localhost:3307/mysql-backend-template-db`, config);

module.exports = sequelize;
