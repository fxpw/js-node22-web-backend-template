'use strict';
const userService = require('src/modules/user/services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

class UserController {
	async create(req, res) {
		try {
			/** @type {import('db/models/user').User} */
			const user = await userService.createUser(req.body);
			const token = jwt.sign({ id: user.id, email: user.email }, JWT_TOKEN_SECRET, {
				expiresIn: '15m',
			});
			const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_REFRESH_SECRET, {
				expiresIn: '21d',
			});
			const tokenExpiration = new Date(Date.now() + (15 * (60 * 1000)));
			const refreshTokenExpiration = new Date(Date.now() + (21 * (24 * (60 * (60 * 1000)))));
			await userService.updateUser(user.id, { refreshToken: refreshToken })
			return res.status(200).json({
				id: user.id,
				token: token,
				tokenExpire: tokenExpiration,
				refreshToken: refreshToken,
				refreshTokenExpire: refreshTokenExpiration
			});
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}

	async findById(req, res) {
		try {
			/** @type {import('db/models/user').User} */
			const user = await userService.getUserById(req.params.id);
			return res.status(200).json(user);
		} catch (error) {
			return res.status(404).json({ error: error.message });
		}
	}

	async findAll(req, res) {
		try {
			const users = await userService.getAllUsers();
			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	async update(req, res) {
		try {
			const user = await userService.updateUser(req.params.id, req.body);
			return res.status(200).json(user);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}

	async delete(req, res) {
		try {
			await userService.deleteUser(req.params.id);
			return res.status(204).send();
		} catch (error) {
			return res.status(404).json({ error: error.message });
		}
	}
}

module.exports = new UserController();
