import { Role } from "./Role.js";
import type { ApiResponse } from "./ApiResponse.js";

interface LoginData {
  accessToken: string;
  user: {
    id: string;
    rollNumber: string;
    email: string;
    password: string;
    fullName: string;
    role: Role;
    batch: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type LoginResponse = ApiResponse<Partial<LoginData>>;
