import type { Request, Response } from "express";
import authService from "./auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import "dotenv/config";

export const login = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const { identifier, password } = req.body;

    const result = await authService.login(
      identifier,
      password
    );

    res.cookie(
      "refreshToken",
      result.refreshToken,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
      }
    );

    res.json({
      success: true,
      accessToken: result.accessToken,
      user: result.user
    });

  }
);
