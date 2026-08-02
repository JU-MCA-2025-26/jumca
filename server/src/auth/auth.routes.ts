import { Router } from "express";
import { login } from "./auth.controller.js";
import { validate } from "../middleware/validate.js";
import { loginSchema } from "./auth.validation.js";

const router = Router();

router.post("/login", validate(loginSchema), login);

export default router;
