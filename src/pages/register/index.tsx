import toast from "react-hot-toast";
import RegisterForm from "./register-form";
import Button from "@/components/button";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/helpers";
import { registerSchema, type RegisterFormData } from "./register.schema";
import { useRegisterUser } from "@/services";

export default function Register() {
  const navigate = useNavigate();

  const form = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const { mutate: register, isPending } = useRegisterUser({
    onSuccess: (_res, formData) => {
      navigate("/login", { state: formData });
      form.reset();
    },
    onError: () => {
      toast.error("Failed to register");
    },
  });

  return (
    <div className="h-full flex justify-center items-center p-2">
      <div className={cn("w-full p-2 space-y-6", "md:px-4 md:py-8 md:w-96 md:border md:rounded-lg")}>
        <div className="text-center space-y-3">
          <h2 className="font-medium text-2xl">Register new account</h2>

          <p className="text-sm text-muted-foreground">Fill the form to create your account</p>
        </div>

        <RegisterForm isLoading={isPending} controller={form} onSubmit={form.handleSubmit((data) => register(data))} />

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
