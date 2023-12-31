/* eslint-disable react/function-component-definition */

"use client";

import React from "react";
import styled, { css } from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { BoxTypeProps } from "types/theme";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "ui/atoms/FormErrorMessage";

export interface PatternProps {
  value: RegExp;
  message: string;
}

export interface InputStyleProps extends BoxTypeProps {
  // eslint-disable-next-line react/require-default-props
  styleType?: "normal" | "search";
}
interface InputProps extends InputStyleProps {
  name: string;
  pattern?: PatternProps;
  required?: boolean | string;
  placeholder: string;
  type?: string;
  label?: string;
  register?: UseFormRegister<any>;
  errors?: any;
}

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputWrapper = styled.input<InputStyleProps>`
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
  type = "text",
  placeholder,
  pattern,
  required = "입력해주세요",
  label,
  register,
  errors,
  styleType = "normal",
  width = "xl",
  height = "md",
}) => {
  return (
    <FormInputWrapper>
      <label htmlFor={name}>{label}</label>
      <InputWrapper
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name, {
          pattern: pattern,
          required: required,
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
    </FormInputWrapper>
  );
};

export default FormInput;
