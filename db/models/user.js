// db/models/user.js
'use strict';
const {
	Model, Sequelize, DataTypes,
} = require('sequelize');

const sequelize = require('db/connect.js');
const bcrypt = require('bcrypt');

class User extends Model {
	static associate(models) {
	}
}
const props =
{
	id: {
		type: DataTypes.BIGINT.UNSIGNED,
		autoIncrement: true,
		primaryKey: true,
	},
	roles: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 2,
		field: 'roles',
	},
	permissions: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		field: 'permissions',
	},
	name: {
		type: DataTypes.STRING(255),
		allowNull: false,
		unique: true,
		field: 'name',
	},
	email: {
		type: DataTypes.STRING(255),
		unique: true,
		field: 'email',
	},
	phone: {
		type: DataTypes.STRING(20),
		field: 'phone',
	},
	password: {
		type: DataTypes.STRING(255),
		field: 'password',
	},
	rememberToken: {
		type: DataTypes.STRING(100),
		field: 'remember_token',
	},
	emailVerifiedAt: {
		type: DataTypes.DATE,
		field: 'email_verified_at',
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
		field: 'created_at',
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: Sequelize.NOW,
		field: 'updated_at',
	},
	phoneVerifiedAt: {
		type: DataTypes.DATE,
		field: 'phone_verified_at',
	},
	verificationToken: {
		type: DataTypes.STRING(255),
		field: 'verification_token',
	},
	refreshToken: {
		type: DataTypes.STRING(255),
		field: 'refreshToken',
	},
	refreshTokenEnd: {
		type: DataTypes.DATE,
		field: 'refreshTokenEnd',
	},
}
User.init(props, {
	sequelize,
	tableName: 'users',
});

User.beforeCreate(async (user) => {
	user.password = await bcrypt.hash(user.password, 10);
});

User.beforeUpdate(async (user) => {
	if (user.changed('password')) {
		user.password = await bcrypt.hash(user.password, 10);
	}
});

/**
 * @typedef {import('sequelize').Model & props} User
 */
module.exports = User;
