import express from "express";
import * as dotenv from "dotenv";
import { mailRouter } from "./routes/email.route.js";
import cors from "cors";
import { limiter } from "./utils/rateLimiter.js";
import helmet from "helmet";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1); // Reads the correct client IP address.

app.use(helmet());
app.use(cors({ origin: ["https://www.valeriyanev.com", "localhost:5173"], optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(limiter);

app.use("/send-email", mailRouter);

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
