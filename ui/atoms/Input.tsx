"use client";

import { FC, forwardRef } from "react";
import styled, { css } from "styled-components";
import { BoxTypeProps } from "types/theme";

export interface InputProps extends BoxTypeProps {
  // eslint-disable-next-line react/require-default-props
  id?: string;
  // eslint-disable-next-line react/require-default-props
  name?: string;
  // eslint-disable-next-line react/require-default-props
  placeHolder?: string;
  // eslint-disable-next-line react/require-default-props
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

// eslint-disable-next-line react/display-name
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "xl",
      height = "md",
      id,
      name,
      placeHolder,
      styleType = "normal",
      ...props
    },
    ref,
  ) => {
    return (
      <InputWrapper
        width={width}
        height={height}
        // placeholder={placeHolder}
        type="text"
        id={id}
        styleType={styleType}
        name={name}
        {...props}
      />
    );
  },
);

export default Input;
