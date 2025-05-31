'use strict';
const User = require('db/models/user');

class UserRepository {
	async create(userData) {
		return await User.create(userData);
	}

	async findById(id) {
		return await User.findByPk(id);
	}

	async findAll() {
		return await User.findAll();
	}
	async findByEmail(email) {
		return await User.findOne({ where: { email } });
	}
	async findOne(whereClause) {
		return await User.findOne(whereClause);
	}

	async update(id, userData) {
		const user = await this.findById(id);
		if (user) {
			return await user.update(userData);
		}
		throw new Error('User not found');
	}

	async delete(id) {
		const user = await this.findById(id);
		if (user) {
			return await user.destroy();
		}
		throw new Error('User not found');
	}

}

module.exports = new UserRepository();
