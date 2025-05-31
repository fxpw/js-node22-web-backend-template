// 'use strict';
// module.exports = {
// 	/**
// 	 * @param {import('sequelize').QueryInterface} queryInterface
// 	 * @param {import('sequelize').DataTypes} Sequelize
// 	 * */
// 	async up(queryInterface, Sequelize) {
// 		await queryInterface.createTable('users', {
// 			id: {
// 				type: Sequelize.INTEGER,
// 				allowNull: false,
// 				autoIncrement: true,
// 				primaryKey: true,
// 			},
// 			firstName: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			lastName: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			email: {
// 				type: Sequelize.STRING,
// 				allowNull:false,
// 			},
// 			phone: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			password: {
// 				type: Sequelize.STRING,
// 				allowNull:false
// 			},
// 			refreshToken: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			refreshTokenEnd: {
// 				type: Sequelize.DATE,
// 				allowNull:true,
// 			},
// 			emailProofCode: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			emailProofedAt: {
// 				type: Sequelize.STRING,
// 				allowNull:true,
// 			},
// 			createdAt: {
// 				type: Sequelize.DATE,
// 				allowNull: false,
// 			},
// 			updatedAt: {
// 				type: Sequelize.DATE,
// 				allowNull: false,
// 			},
// 			deletedAt: {
// 				type: Sequelize.DATE,
// 				allowNull: true,
// 			},
// 		});
// 	},
// 	async down(queryInterface, Sequelize) {
// 		await queryInterface.dropTable('users');
// 	}
// };
