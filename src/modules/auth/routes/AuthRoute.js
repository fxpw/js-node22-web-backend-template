'use strict';
const { Router } = require('express');
const authController = require('src/modules/auth/controllers/AuthController');
const authMiddleware = require('src/middlewares/authMiddleware');
const router = Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/status', authController.authStatus);
router.get('/refresh', authMiddleware, authController.refreshToken);
module.exports = router;
