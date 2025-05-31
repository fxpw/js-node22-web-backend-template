'use strict';
const {
	Model, Sequelize, DataTypes,
} = require('sequelize');

const sequelize = require('db/connect.js');
// jsdoc
/**
 * @typedef Example
 * @property {string} id
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deletedAt
 */
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * */
class Example extends Model {
	static associate(models) {
	}

}
Example.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
}, {
	sequelize,
	paranoid: true,
	modelName: 'example',
});

// console.log(Example === sequelize.models.Example);
module.exports = Example;
