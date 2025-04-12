import Joi from "joi";

/**
 * Request
 */
export type SignInReqSchema = {
	login: string;
	password: string;
};

export const signInReqSchema = {
	body: Joi.object({
		login: Joi.string()
			.length(16)
			.pattern(/^[0-9]{16}$/)
			.required()
			.messages({
				"string.empty": "Login cannot be empty",
			}),
		password: Joi.string().min(8).max(1024).required(),
	}),
};
