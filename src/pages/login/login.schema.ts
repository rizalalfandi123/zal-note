import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must contain at least 8 characters" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
