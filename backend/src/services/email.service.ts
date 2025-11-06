import { Resend } from "resend";
import * as dotenv from "dotenv";
import { Email } from "custom-validation";

dotenv.config();

const EMAIL = process.env.EMAIL as string;
const RESEND_API_KEY = process.env.RESEND_API_KEY as string;

const resend = new Resend(RESEND_API_KEY);

export const sendEmailService = (data: Email) => {
  resend.emails.send({
    from: data.email,
    to: EMAIL,
    subject: "Hello World!",
    html: `HI there`,
  });
};
