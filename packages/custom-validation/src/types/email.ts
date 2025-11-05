import * as z from "zod";
import type { EmailSchema } from "../schemas/email.js";

export type Email = z.infer<typeof EmailSchema>;
