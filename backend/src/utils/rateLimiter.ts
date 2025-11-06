import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 1,
  standardHeaders: true,
  legacyHeaders: false,
  ipv6Subnet: 60,
});
