import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { Email } from "custom-validation";

dotenv.config();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

export const sendEmailService = (data: Email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: GMAIL_USER,
    subject: "Hello",
    text: "HI there!",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email: ", err);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};
