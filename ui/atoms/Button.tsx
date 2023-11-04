import React from "react";
import styled from "styled-components";

interface ButtonStyleProps {
  width?: string;
  height?: string;
  fontWeight?: string;
  bgColor?: string;
}

interface ButtonProps extends ButtonStyleProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  width: ${({ width, theme }) => theme.box.width[width]};
  height: ${({ height, theme }) => theme.box.height[height]};
  font-weight: ${({ fontWeight, theme }) => theme.font.weight[fontWeight]};
  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};
  border-radius: 8px;
`;

export default function Button(props: ButtonProps) {
  const {
    onClick,
    width = "xl",
    height = "md",
    fontWeight,
    bgColor = "blueGray",
    children,
  } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ButtonWrapper
      width={width}
      height={height}
      fontWeight={fontWeight}
      bgColor={bgColor}
      onClick={handleClick}
    >
      {children}
    </ButtonWrapper>
  );
}
