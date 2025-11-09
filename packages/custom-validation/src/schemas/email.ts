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
    .min(20, { error: "Message too short, expected at least 20 characters." })
    .max(1000, { error: "Message too long!" }),
  botField: z.string().max(0, { error: "Nice try, BOT!" }), // honeypot check if there is bot trying to spam, he will try to fill all fields.
  loadTime: z.number().refine((val) => Date.now() - val > 3000), // if the form was submitted too fast, like less than 3 seconds, def a bot, since the textarea doesnt have autofill option.
});
