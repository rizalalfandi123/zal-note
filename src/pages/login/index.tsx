import LoginForm from "./login-form";
import LabelSeparator from "@/components/label-separator";
import Button from "@/components/button";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/helpers";
import { Google } from "@/components/icons";
import { pb } from "@/instances";
import { loginSchema, type LoginFormData } from "./login.schema";

export default function Login() {
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await pb.collection("users").authWithPassword(data.email, data.password);
  };

  const loginWithGoogle = async () => {
    pb.authStore.clear();
    await pb.collection("users").authWithOAuth2({ provider: "google" });
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
          <h2 className="font-medium text-2xl">Login to your account</h2>

          <p className="text-sm text-muted-foreground">Choose your method to login into your account</p>
        </div>

        <LoginForm controller={form} onSubmit={form.handleSubmit(onSubmit)} />

        <p className="text-xs text-center">
          Dont have an account ?
          <Button variant="link" className="text-xs p-0 h-fit inline-block ml-1" asChild>
            <Link to="/register">Register here</Link>
          </Button>
        </p>

        <LabelSeparator>or continue with</LabelSeparator>

        <Button variant="outline" className="w-full" onClick={loginWithGoogle}>
          <Google className="h4 w-4 inline-block mr-2" /> Google
        </Button>
      </div>
    </div>
  );
}
