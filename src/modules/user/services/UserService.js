'use strict';
const userRepository = require('src/modules/user/repositories/UserRepository');
const bcrypt = require('bcryptjs');
class UserService {
    async createUser(userData) {
		const user = await userRepository.findByEmail(userData.email);
		if(user){
			throw new Error('User already exists');
		}
        return await userRepository.create(userData);
    }

    async getUserById(id) {
        return await userRepository.findById(id);
    }

    async getAllUsers() {
        return await userRepository.findAll();
    }

    async updateUser(id, userData) {
        return await userRepository.update(id, userData);
    }

    async deleteUser(id) {
        return await userRepository.delete(id);
    }
	async validateUserPassword(email, password) {
        const user = await userRepository.findByEmail(email);
        if (user && await this.validatePassword(password, user.password)) {
            return user;
        }
        throw new Error('Invalid email or password');
    }
	async validatePassword(password, hash) {
		return await bcrypt.compare(password, hash);
	}
	async getUserByRefreshToken(refreshToken) {
		return await userRepository.findOne({ where: { refreshToken:refreshToken } })
	}
}

module.exports = new UserService();
