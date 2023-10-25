"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import FormInput from "ui/molecules/FormInput";
import { signIn, useSession } from "next-auth/react";
import Button from "ui/atoms/Button";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}

export const emailPattern = {
  value: /.+@snaps\.com$/,
  message: "Email must end with '@snaps.com'",
};

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LoginButton = styled.button`
  width: ${({ theme }) => theme.box.width.xl};
  height: ${({ theme }) => theme.box.height.xl};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 8px;
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

// eslint-disable-next-line react/function-component-definition
const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { user } = useSession();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    if (user) return;

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      // callbackUrl: "/",
    });
    if (result.error) {
      toast.error(result.error);
      // return;
    } else {
      router.push("/");
    }
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="email"
        required
        register={register}
        pattern={emailPattern}
        errors={errors}
        placeholder="이메일"
        width="xl"
      />
      <FormInput
        type="password"
        name="password"
        required
        register={register}
        errors={errors}
        placeholder="비밀번호"
        width="xl"
      />
      <LoginButton type="submit">로그인</LoginButton>
    </LoginFormWrapper>
  );
};

export default LoginForm;
