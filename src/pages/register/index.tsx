import RegisterForm from "./register-form";
import Button from "@/components/button";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/helpers";
import { pb } from "@/instances";
import { registerSchema, type RegisterFormData } from "./register.schema";

export default function Register() {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // console.log({ data });
    await pb
      .collection("users")
      .create({ email: data.email, password: data.password, passwordConfirm: data.confirm_password });
  };

  return (
    <div className="h-full flex justify-center items-center p-2">
      <div
        className={cn(
          "w-full p-2 space-y-6",
          "@2xl/root:px-4 @2xl/root:py-8 @2xl/root:w-96 @2xl/root:border @2xl/root:rounded-lg"
        )}
      >
        <div className="text-center space-y-3">
          <h2 className="font-medium text-2xl">Register new account</h2>

          <p className="text-sm text-muted-foreground">Fill the form to create your account</p>
        </div>

        <RegisterForm controller={form} onSubmit={form.handleSubmit(onSubmit)} />

        <p className="text-xs text-center">
          Already an account ?
          <Button variant="link" className="text-xs p-0 h-fit inline-block ml-1" asChild>
            <Link to="/login">Login here</Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
