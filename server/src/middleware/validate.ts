import { ZodObject } from "zod";
import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: z.treeifyError(result.error),
      });
    }

    req.body = result.data;

    next();
  };
