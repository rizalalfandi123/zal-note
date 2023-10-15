import React from "react";
import TextField, { type TextFieldProps } from "@/components/form/text-field";
import Button from "@/components/button";

import type { FieldValues, FieldPath } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/helpers";

export default function PasswordField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: TextFieldProps<TFieldValues, TName>) {
  const [isHide, setIsHide] = React.useState<boolean>(true);
  const [isReadOnly, setIsReadOnly] = React.useState<boolean>(true);
  const Icon = isHide ? Eye : EyeOff;

  return (
    <div className="relative">
      <TextField
        type={isHide ? "password" : "text"}
        readOnly={isReadOnly}
        onFocus={() => setIsReadOnly(false)}
        {...props}
      />
      <Button
        variant="ghost"
        type="button"
        className={cn("absolute right-2 top-6 w-7 h-7 p-0", "focus:ring-0 focus:ring-offset-0")}
        onClick={() => setIsHide(!isHide)}
      >
        <Icon className="w-5 h-5" />
      </Button>
    </div>
  );
}
