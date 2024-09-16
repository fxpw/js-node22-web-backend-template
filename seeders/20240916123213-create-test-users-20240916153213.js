'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Добавление данных в таблицу users
		await queryInterface.bulkInsert('users', [
			{
				username: 'john_doe',
				subscriptionEnd: new Date('2023-12-31'),
				extraInfo: null,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				username: 'jane_dd',
				subscriptionEnd: new Date('2024-01-15'),
				extraInfo: null,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				username: 'alice_smith',
				subscriptionEnd: null,
				extraInfo: JSON.stringify({ age: 25, country: 'USA' }),
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		// Удаление данных из таблицы users
		await queryInterface.bulkDelete('users', null, {});
	}
};
