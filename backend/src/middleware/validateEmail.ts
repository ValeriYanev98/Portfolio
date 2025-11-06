import type { NextFunction, Request, Response } from "express";
import * as z from "zod";
import { EmailSchema } from "custom-validation";

export const validateEmail = (req: Request, res: Response, next: NextFunction): void => {
  const { data } = req.body;

  try {
    EmailSchema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const issues = err.issues;
      res.status(400).json({ error: issues });
      return;
    }
  }

  next();
};
