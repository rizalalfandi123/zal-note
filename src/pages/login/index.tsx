import React from "react";
import LoginForm from "./login-form";
import LabelSeparator from "@/components/label-separator";
import Button from "@/components/button";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/helpers";
import { Google } from "@/components/icons";
import { pb } from "@/instances";
import { loginSchema, type LoginFormData } from "./login.schema";
import { useLoginUser } from "@/services";

export default function Login() {
  const navigate = useNavigate();

  const location = useLocation();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useLoginUser({
    onSuccess: () => {
      navigate("/app/notes");
      form.reset();
    },
    onError: () => {
      toast.error("Failed to login");
    },
  });

  const loginWithGoogle = async () => {
    pb.authStore.clear();

    await pb.collection("users").authWithOAuth2({ provider: "google" });

    navigate("/app/notes");
  };

  React.useEffect(() => {
    if (location.state) {
      form.setValue("email", location.state.email);
      form.setValue("password", location.state.password);
    }
  }, []);

  return (
    <div className="h-full flex justify-center items-center p-2">
      <div className={cn("w-full p-2 space-y-6", "md:px-4 md:py-8 md:w-96 md:border md:rounded-lg")}>
        <div className="text-center space-y-3">
          <h2 className="font-medium text-2xl">Login to your account</h2>

          <p className="text-sm text-muted-foreground">Choose your method to login into your account</p>
        </div>

        <LoginForm controller={form} onSubmit={form.handleSubmit((data) => login(data))} isLoading={isPending} />

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
