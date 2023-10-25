import { axiosClient, ServerResponse } from "apis";
import { SignupData } from "ui/organism/signup/SignupForm";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

// post api
const signup = async (param: SignupData) => {
  const { data } = await axiosClient.post<ServerResponse<any>>(
    "v1/auth/register",
    param,
  );

  return data;
};

export default function useSignupMutation() {
  return useMutation({
    mutationFn: (form: SignupData) => signup(form),
    onSuccess: async (data) => {
      // 성공하면 자동 로그인 후 main으로
      console.log("signup_success_data", data);
      // await signIn("credentials", {
      // email: data.email,
      // password: data.password,
      // });
    },
    onError: (error: any) => {
      console.log("signup_error", error);
      // toast.error(error.response.data.message);
    },
  });
}
