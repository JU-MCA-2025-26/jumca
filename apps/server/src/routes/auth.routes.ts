import { Router } from "express";
import { login } from "@server/controllers/auth.controller";
import { validate } from "@server/middleware/validate";
import { loginSchema } from "@shared/validators";

const router = Router();

router.post("/login", validate(loginSchema), login);

export default router;
