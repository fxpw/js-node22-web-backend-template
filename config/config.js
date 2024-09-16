require('dotenv').config(); // подключаем dotenv для использования переменных окружения
console.log(process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	process.env.DB_DATABASE,)
module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port:process.env.DB_PORT,
		dialect: 'mysql'
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port:process.env.DB_PORT,
		dialect: 'mysql'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port:process.env.DB_PORT,
		dialect: 'mysql'
	}
};