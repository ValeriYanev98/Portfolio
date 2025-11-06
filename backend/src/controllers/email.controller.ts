import type { Request, Response } from "express";
import { sendEmailService } from "../services/email.service.js";

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  try {
    sendEmailService(data);

    res.status(201).json({ success: true });
    return;
  } catch (error) {
    res.status(500).json({ error });
    return;
  }
};
