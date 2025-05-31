'use strict';
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

module.exports = (req, res, next) => {
	const token = req.headers['authorization']?.split(' ')[1]; // Ожидаем "Bearer <token>"

	if (!token) {
		return res.status(401).json({ error: 'No token provided' });
	}

	jwt.verify(token, JWT_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: 'Failed to authenticate token' });
		}
		req.userId = decoded.id;
		next();
	});
};
