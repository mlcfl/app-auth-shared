import { z } from "zod";
import type { ApiSchema } from "@shared/all";
import { loginField } from "./fields";

export const restoreSchema = {
	req: {
		body: z.object({
			login: loginField,
		}),
	},
	res: null,
} satisfies ApiSchema;

export type RestoreReqBodySchema = z.infer<typeof restoreSchema.req.body>;
