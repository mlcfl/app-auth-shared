import Joi from "joi";

/**
 * Request
 */
export type RestoreReqSchema = {
	login: string;
};

export const restoreReqSchema = {
	body: Joi.object({
		login: Joi.string()
			.length(16)
			.pattern(/^[0-9]{16}$/)
			.required(),
	}),
};
