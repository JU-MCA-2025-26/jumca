import type { Request, Response } from "express";
import authService from "@server/services/auth.service";
import { asyncHandler } from "@server/utils/asyncHandler";
import "dotenv/config";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { identifier, password } = req.body;

  const result = await authService.login(identifier, password);

  res.cookie("refreshToken", result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.json({
    success: true,
    accessToken: result.accessToken,
    user: result.user,
  });
});
