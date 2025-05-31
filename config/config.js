require('dotenv').config();
let config = {
	development: {
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: console.log,
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	test: {
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: console.log,
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	production: {
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: console.log,
		dialectOptions: {
			bigNumberStrings: true,
		},
	}
}
// console.log(config);
module.exports = config;
