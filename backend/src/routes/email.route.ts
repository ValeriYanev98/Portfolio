import express from "express";
import { sendEmail } from "../controllers/email.controller.js";
import { validateEmail } from "../middleware/validateEmail.js";

const router = express.Router();

router.post("/", validateEmail, sendEmail);

export { router as mailRouter };
