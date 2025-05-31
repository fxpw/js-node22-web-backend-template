'use strict';
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('config/config.js');
let envConfig = config[env];
// const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, envConfig);

// fs
// 	.readdirSync(path.join(appRoot.path, 'db/models'))
// 	.filter(file => {
// 		return (
// 			file.indexOf('.') !== 0 &&
// 			file !== basename &&
// 			file.slice(-3) === '.js' &&
// 			file.indexOf('.test.js') === -1
// 		);
// 	})
// 	.forEach(file => {
// 		const model = require(path.join(appRoot.path,"db/models", file))(sequelize, Sequelize.DataTypes);
// 		db[model.name] = model;
// 	});

// Object.keys(db).forEach(modelName => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

// db.sequelize = sequelize;

module.exports = sequelize;
