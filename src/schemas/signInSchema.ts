import { z } from "zod";
import type { ApiSchema } from "@shared/all";
import { loginField, passwordField } from "./fields";

export const signInSchema = {
	req: {
		body: z.object({
			login: loginField,
			password: passwordField,
		}),
	},
	res: null,
} satisfies ApiSchema;

export type SignInReqBodySchema = z.infer<typeof signInSchema.req.body>;
