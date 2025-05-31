// src/requests/UserRequest.js
const Joi = require('joi');

class UserRequest {
	static validateUpdate(data) {
		const schema = Joi.object({
			id: Joi.number()
				.optional()
				.positive()
				.messages({
					'number.base': 'ID должен быть числом.', // Если ID не является числом
					'number.positive': 'ID должен быть положительным числом.', // Если ID отрицательное
					'number.integer': 'ID должен быть целым числом.', // Если ID не целое число
				}),
			name: Joi.string()
				.max(100)
				.optional()
				.messages({
					'string.base': `"name" должен быть строкой`,
					'string.empty': `"name" не может быть пустым`,
					'string.max': `"name" не может превышать {#limit} символов`,
				}),
			email: Joi.string()
				.email()
				.max(100)
				.required()
				.messages({
					'string.base': `"email" должен быть строкой`,
					'string.empty': `"email" не может быть пустым`,
					'string.email': `"email" должен быть действительным адресом электронной почты`,
					'string.max': `"email" не может превышать {#limit} символов`,
					'any.required': `"email" является обязательным`
				}),
			phone: Joi.string()
				.max(15)
				.regex(/^\+[0-9]{10,13}$/)
				.optional()
				.messages({
					'string.base': `"phone" должен быть строкой`,
					'string.max': `"phone" не может превышать {#limit} символов`,
					'string.pattern.base': `"phone" должен быть в формате +XXXXXXXXXX`,
				}),
			password: Joi.string()
				.min(6)
				.optional()
				.messages({
					'string.base': `"password" должен быть строкой`,
					'string.min': `"password" должен содержать как минимум {#limit} символов`,
				}),
		});

		return schema.validate(data, { abortEarly: false });
	}
}

module.exports = UserRequest;
