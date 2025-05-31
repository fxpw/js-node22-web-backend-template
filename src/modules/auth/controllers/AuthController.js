'use strict';
const userService = require('src/modules/user/services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

class AuthController {
	async login(req, res) {
		try {
			const user = await userService.validateUserPassword(req.body.email, req.body.password);
			const tokenExpiration = new Date(Date.now() + (15 * (60 * 1000)));
			const refreshTokenExpiration = new Date(Date.now() + (21 * (24 * (60 * (60 * 1000)))));
			const token = jwt.sign({ id: user.id, email: user.email }, JWT_TOKEN_SECRET, {
				expiresIn: '15m',
			});
			const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_REFRESH_SECRET, {
				expiresIn: '21d',
			});
			await userService.updateUser(user.id, { refreshToken: refreshToken })
			return res.status(200).json({
				id: user.id,
				token: token,
				tokenExpire: tokenExpiration,
				refreshToken: refreshToken,
				refreshTokenExpire: refreshTokenExpiration
			});
		} catch (error) {
			return res.status(401).json({ error: error.message });
		}
	}
	async refreshToken(req, res) {
		const { refreshToken } = req.body;
		if (!refreshToken) {
			return res.sendStatus(401);
		}
		try {
			const user = await userService.getUserByRefreshToken(refreshToken);
			if (!user || !user.refreshToken || user.refreshToken !== refreshToken) {
				return res.status(403).json({ error: "need auth" });
			}
			const tokenExpiration = new Date(Date.now() + (15 * (60 * 1000)));
			const refreshTokenExpiration = new Date(Date.now() + (21 * (24 * (60 * (60 * 1000)))));
			const token = jwt.sign({ id: user.id, email: user.email, roles: user.roles }, JWT_TOKEN_SECRET, {
				expiresIn: '15m',
			});
			const refreshToken = jwt.sign({ id: user.id, email: user.email, roles: user.roles }, JWT_REFRESH_SECRET, {
				expiresIn: '21d',
			});
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
	async logout(req, res) {
		try {
			const { refreshToken } = req.body;
			if (!refreshToken) {
				return res.sendStatus(401);
			}
			const user = await userService.getUserByRefreshToken(refreshToken);
			if (user) {
				userService.updateUser(user.id, { "refreshToken": null });
				return res.status(200).json({ message: 'Logout successful' });
			} else {
				return res.sendStatus(403);
			}
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
	async authStatus(req, res) {
		try {
			const token = req.headers['authorization']?.split(' ')[1];
			if (!token) {
				return res.status(401).json({ error: 'No token provided' });
			}
			const decoded = jwt.verify(token, JWT_TOKEN_SECRET);
			const user = await userService.getUserById(decoded.id);
			if (user) {
				return res.status(200).json({ id: user.id, email: user.email, roles: user.roles });
			} else {
				return res.status(401).json({ error: 'unknown user' });
			}
		} catch (error) {
			return res.status(401).json({ error: 'authStatus Unauthorized' });
		}
	}
}

module.exports = new AuthController();
