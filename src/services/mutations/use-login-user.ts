import { pb } from "@/instances";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { type RecordAuthResponse, type RecordModel } from "pocketbase";
import { type LoginFormData } from "@/pages/login/login.schema";

type Options = UseMutationOptions<RecordAuthResponse<RecordModel>, unknown, LoginFormData>;

export function useLoginUser(options?: Options) {
  return useMutation<RecordAuthResponse<RecordModel>, unknown, LoginFormData>({
    mutationKey: ["LOGIN_USER"],
    mutationFn: (data) => pb.collection("users").authWithPassword(data.email, data.password),
    ...(options ?? {}),
  });
}
