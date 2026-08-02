import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "@server/routes/auth.routes";
import { errorHandler } from "@server/middleware/errorHandler";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Error handling
app.use(errorHandler);

export default app;
