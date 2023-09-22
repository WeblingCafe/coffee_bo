"use client";

import React from "react";
import styled, { css } from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { BoxTypeProps } from "types/theme";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "ui/atoms/FormErrorMessage";

interface InputProps extends InputStyleProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors: any;
}

export interface InputStyleProps extends BoxTypeProps {
  styleType?: "normal" | "search";
}

const InputWrapper = styled.input<InputProps>`
  width: ${({ theme, width }) => theme.box.width[width]};
  height: ${({ theme, height }) => theme.box.height[height]};
  padding: 8px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 8px;

  ${({ styleType }) =>
    styleType === "search" &&
    css`
      background-image: url("/icons/search_icon.svg");
      background-repeat: no-repeat;
      background-size: 18px;
      background-position: 97% 50%;
    `}
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.color.blue}`};
  }
`;

const FormInput: React.FC<InputProps> = ({
  name,
  label,
  register,
  errors,
  styleType = "normal",
  width = "lg",
  height = "md",
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputWrapper
        id={name}
        {...register(name, {
          // 해당 내용 props로 만들어주기
          required: "This is required.",
        })}
        styleType={styleType}
        width={width}
        height={height}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  );
};

export default FormInput;
