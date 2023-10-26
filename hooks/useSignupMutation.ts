import { axiosClient, ServerResponse } from "apis/index";
import { SignupData } from "ui/organism/signup/SignupForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// post api
const signup = async (param: SignupData) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/register`;

  const { data } = await axiosClient.post<ServerResponse<any>>(
    "v1/auth/register",
    {
      email: param.email,
      username: param.username,
      nickname: param.nickname,
      password: param.password,
      birthDate: param.birthDate,
      // team: "FRONTEND",
    },
  );

  return data;
};

export default function useSignupMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: (form: SignupData) => signup(form),
    onSuccess: async (data) => {
      toast.success("회원가입에 성공했습니다. 로그인을 해주세요.");
      router.push("/signin");
      // 성공하면 자동 로그인 후 main으로
      // const res = await signIn("credentials", {
      //   email: data?.email,
      //   password: data?.password,
      // });
      // if (res.error) {
      //   toast.error(res.error);
      // } else {
      //   router.push("/");
      // }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
