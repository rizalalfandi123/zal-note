import { pb } from "@/instances";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { type RegisterFormData } from "@/pages/register/register.schema";
import { type RecordModel } from "pocketbase";

type Options = UseMutationOptions<RecordModel, unknown, RegisterFormData>;

export function useRegisterUser(options?: Options) {
  return useMutation<RecordModel, unknown, RegisterFormData>({
    mutationKey: ["REGISTER_USER"],
    mutationFn: (data) =>
      pb
        .collection("users")
        .create({ email: data.email, password: data.password, passwordConfirm: data.confirm_password }),
    ...(options ?? {}),
  });
}
