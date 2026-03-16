import { z } from "zod";

export const passwordField = z.string().min(8).max(1024);
