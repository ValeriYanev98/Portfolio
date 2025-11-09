import type { Request, Response } from "express";
import { sendEmailService } from "../services/email.service.js";
import { Email } from "custom-validation";
import { sanitizeInput } from "../utils/sanitizer.js";

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  const { data }: { data: Email } = req.body;

  const rawMessage = data.message;

  const sanitizedMessage = sanitizeInput(rawMessage); // sanitize the message.

  const sanitizedData: Email = {
    botField: data.botField,
    email: data.email,
    loadTime: data.loadTime,
    message: sanitizedMessage,
    name: data.name,
  };

  try {
    sendEmailService(sanitizedData);

    res.status(201).json({ success: true });
    return;
  } catch (error) {
    res.status(500).json({ error });
    return;
  }
};
