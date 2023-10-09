"use client";

import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "ui/molecules/FormInput";

interface SignupData {
  email: string;
  username: string;
  nickname: string;
  password: string;
  birthDate: string;
}

export const emailPattern = {
  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/gi,
  message: "Enter a valid email address.",
};

// eslint-disable-next-line react/function-component-definition
const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: SignupData) => {
    console.log(data, errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="firstName"
        register={register}
        rules={{ required: "You must enter your last name." }}
        errors={errors}
      />
      <FormInput name="lastName" register={register} errors={errors} label="" />
      <FormInput name="email" required register={register} errors={errors} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
