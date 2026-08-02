import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "@/routes/auth.routes.js";
import { errorHandler } from "@/middleware/errorHandler.js";

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
