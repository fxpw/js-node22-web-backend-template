'use strict';
const { Router } = require('express');
const userController = require('src/modules/user/controllers/UserController');
const authMiddleware = require('src/middlewares/authMiddleware');
const router = Router();

router.get('/', authMiddleware, userController.findAll);
router.put('/:id', authMiddleware, userController.update);
module.exports = router;
