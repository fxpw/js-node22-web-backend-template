'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Добавление данных в таблицу users
		await queryInterface.bulkInsert('users', [
			{
				username: 'john_doe',
				email: 'test1@test.test',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				username: 'jane_dd',
				email: 'test2@test.test',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				username: 'alice_smith',
				email: 'test3@test.test',
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
