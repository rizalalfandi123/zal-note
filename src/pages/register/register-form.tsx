import TextField from "@/components/form/text-field";
import PasswordField from "@/components/form/password-field";
import Button from "@/components/button";
import LoaderButton from "@/components/loader-button";

import type { UseFormReturn } from "react-hook-form";
import type { RegisterFormData } from "./register.schema";
import { cn } from "@/helpers";

interface LoginFormProps extends React.ComponentProps<"form"> {
  controller: UseFormReturn<RegisterFormData>;
  isLoading: boolean;
}

export default function RegisterForm({ controller, className, isLoading, ...formProps }: LoginFormProps) {
  return (
    <form className={cn("space-y-4", className)} {...formProps}>
      <TextField control={controller.control} name="email" label="Email" />

      <PasswordField control={controller.control} name="password" label="Password" />

      <PasswordField control={controller.control} name="confirm_password" label="Confirm Password" />

      <Button type="submit" className="w-full">
        <LoaderButton isShow={isLoading} />
        Register
      </Button>
    </form>
  );
}
