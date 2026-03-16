import { z } from "zod";
import type { ApiSchema } from "@shared/all";
import { loginField, passwordField } from "./fields";

export const signUpSchema = {
	req: {
		body: z.object({
			rules: z.literal(true),
			cookie: z.literal(true),
			personal: z.literal(true),
		}),
	},
	res: z.object({
		login: loginField,
		password: passwordField,
	}),
} satisfies ApiSchema;

export type SignUpReqBodySchema = z.infer<typeof signUpSchema.req.body>;
export type SignUpResSchema = z.infer<typeof signUpSchema.res>;
