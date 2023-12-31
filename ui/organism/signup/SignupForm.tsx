"use client";

import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import useSignupMutation from "hooks/useSignupMutation";
import styled from "styled-components";
import FormInput from "ui/molecules/FormInput";
import * as yup from "yup";

export interface SignupData extends PwdConfirmProps {
  email?: string;
  username?: string;
  nickname?: string;
  password?: string;
  birthDate?: string;
}

interface PwdConfirmProps {
  passwordConfirm?: string;
}

const SignupWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SignupButton = styled.button`
  width: ${({ theme }) => theme.box.width.xl};
  height: ${({ theme }) => theme.box.height.xl};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 8px;
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

// eslint-disable-next-line react/function-component-definition
const SignupForm: React.FC = () => {
  const { isLoading, mutate: signupMuate, isSuccess } = useSignupMutation();

  const formSchema = yup.object({
    email: yup
      .string()
      .matches(/.+@snaps\.com$/, "이메일은 반드시 '@snaps.com'로 끝나야합니다.")
      .required("이메일을 입력해주세요"),

    username: yup.string().required("본명을 입력해주세요"),
    nickname: yup
      .string()
      .required("회사에서 사용하는 영어이름을 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
    birthDate: yup
      .string()
      .matches(
        /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
        "1900-00-00형식으로 입력해주세요",
      )
      .required("생년월일을 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupData>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: SignupData) => {
    signupMuate(data);
  };

  return (
    <SignupWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="email"
        register={register}
        errors={errors}
        placeholder="이메일"
        width="xl"
      />
      <FormInput
        name="username"
        register={register}
        errors={errors}
        placeholder="이름"
        width="xl"
      />
      <FormInput
        name="nickname"
        register={register}
        errors={errors}
        placeholder="회사닉네임으로 작성해주세요.(ex.bible)"
        width="xl"
      />
      <FormInput
        type="password"
        name="password"
        register={register}
        errors={errors}
        placeholder="비밀번호"
        width="xl"
      />
      <FormInput
        type="password"
        name="passwordConfirm"
        register={register}
        errors={errors}
        placeholder="비밀번호확인"
        width="xl"
      />
      <FormInput
        name="birthDate"
        register={register}
        errors={errors}
        placeholder="생년월일"
        width="xl"
      />
      <SignupButton type="submit">회원가입</SignupButton>
    </SignupWrapper>
  );
};

export default SignupForm;
