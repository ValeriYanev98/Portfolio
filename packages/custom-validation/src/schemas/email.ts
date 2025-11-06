import * as z from "zod";

export const EmailSchema = z.object({
  name: z
    .string({ error: "Not a string!" })
    .regex(/^[\x20-\x7A]*$/, { error: "Only normal characters!" })
    .min(2, { error: "Name too short!" })
    .max(122, { error: "Name too long!" }),
  email: z.email({ error: "Not an email!" }),
  message: z
    .string({ error: "Not a string" })
    .regex(/^[\x20-\x7A]*$/, { error: "Only normal characters!" })
    .min(20, { error: "Message too short, expected at least 20 characters." })
    .max(1000, { error: "Message too long!" }),
});
