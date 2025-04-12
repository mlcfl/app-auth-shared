import Joi from "joi";

/**
 * Request
 */
export type SignUpReqSchema = {
	rules: boolean;
	cookie: boolean;
	personal: boolean;
};

export const signUpReqSchema = {
	body: Joi.object({
		rules: Joi.bool().equal(true).required(),
		cookie: Joi.bool().equal(true).required(),
		personal: Joi.bool().equal(true).required(),
	}),
};

/**
 * Response
 */
export type SignUpResSchema = {
	login: string;
	password: string;
};

export const signUpResSchema = Joi.object({
	login: Joi.string().required(),
	password: Joi.string().required(),
});
