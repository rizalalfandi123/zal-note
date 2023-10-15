import { z } from "zod";

const passwordField = z.string().min(8, { message: "Password must contain at least 8 characters" });

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: passwordField,
    confirm_password: passwordField,
  })
  .superRefine((values, context) => {
    if (values.password !== values.confirm_password) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is not match",
        path: ["confirm_password"],
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
