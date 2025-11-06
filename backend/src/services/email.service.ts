import { Resend } from "resend";
import * as dotenv from "dotenv";
import { Email } from "custom-validation";

dotenv.config();

const EMAIL = process.env.EMAIL as string;
const RESEND_API_KEY = process.env.RESEND_API_KEY as string;

const resend = new Resend(RESEND_API_KEY);

export const sendEmailService = async (email: Email) => {
  const { data, error } = await resend.emails.send({
    from: "Valeri <valeri@valeriyanev.com>",
    to: "valeri.t.yanev@gmail.com",
    subject: "Hello World!",
    html: `HI there`,
  });

  if (error) {
    throw new Error("Failed to send email!");
  }
};
