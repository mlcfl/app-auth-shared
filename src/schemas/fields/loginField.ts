import { z } from "zod";

export const loginField = z
	.string()
	.length(16)
	.regex(/^[0-9]{16}$/, "Login must be 16 digits");
