import { type FieldValues, type ControllerProps, type FieldPath, Controller } from "react-hook-form";

import Input, { type InputProps } from "@/components/input";
import Label from "@/components/label";
import { cn } from "@/helpers";

export interface TextFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends Omit<ControllerProps<TFieldValues, TName>, "render">,
    Omit<InputProps, "name" | "defaultValue"> {
  label?: string;
  containerClassname?: string;
}

export default function TextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: TextFieldProps<TFieldValues, TName>) {
  const { control, name, defaultValue, disabled, label, containerClassname, ...inputProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field, fieldState }) => {
        return (
          <fieldset className={cn("space-y-1.5", containerClassname)}>
            {label && (
              <Label htmlFor={field.name} className="block">
                {label}
              </Label>
            )}
            
            <Input id={field.name} {...inputProps} {...field} />

            {fieldState.error?.message && <span className="text-destructive text-xs">{fieldState.error?.message}</span>}
          </fieldset>
        );
      }}
    />
  );
}
