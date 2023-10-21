import TextField from "@/components/form/text-field";
import PasswordField from "@/components/form/password-field";
import Button from "@/components/button";

import type { UseFormReturn } from "react-hook-form";
import { cn } from "@/helpers";
import type { LoginFormData } from "./login.schema";
import LoaderButton from "@/components/loader-button";

interface LoginFormProps extends React.ComponentProps<"form"> {
  controller: UseFormReturn<LoginFormData>;
  isLoading: boolean;
}

export default function LoginForm({ controller, isLoading, className, ...formProps }: LoginFormProps) {
  return (
    <form className={cn("space-y-4", className)} {...formProps}>
      <TextField control={controller.control} name="email" label="Email" />

      <PasswordField control={controller.control} name="password" label="Password" />

      <Button type="submit" className="w-full">
        <LoaderButton isShow={isLoading} />
        Login
      </Button>
    </form>
  );
}
