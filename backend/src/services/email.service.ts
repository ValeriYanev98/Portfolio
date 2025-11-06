import { Resend } from "resend";
import * as dotenv from "dotenv";
import { Email } from "custom-validation";

dotenv.config();

const EMAIL = process.env.EMAIL as string;
const RESEND_API_KEY = process.env.RESEND_API_KEY as string;

const resend = new Resend(RESEND_API_KEY);

export const sendEmailService = async (email: Email) => {
  const { data, error } = await resend.emails.send({
    from: "Portfolio <no-reply@valeriyanev.com>",
    to: "valeri.t.yanev@gmail.com",
    subject: `Reach out from - ${email.email}`,
    html: `
  <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
    <h3>New reach out from: ${email.name} &lt;${email.email}&gt;</h3>
    <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />
    <p>${email.message}</p>
  </div>
`,
  });

  if (error) {
    throw new Error("Failed to send email!");
  }
};
