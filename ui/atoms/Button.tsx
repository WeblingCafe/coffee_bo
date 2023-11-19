import React from "react";
import styled from "styled-components";

interface ButtonStyleProps {
  width?: string;
  height?: string;
  fontWeight?: string;
  padding?: string;
  bgColor?: string;
}

interface ButtonProps extends ButtonStyleProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  width: ${({ width, theme }) => theme.box.width[width] || "fit-content"};
  height: ${({ height, theme }) => theme.box.height[height] || "100%"};
  font-weight: ${({ fontWeight, theme }) => theme.font.weight[fontWeight]};
  padding: ${({ padding }) => padding && padding};

  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};
  border-radius: 8px;
`;

export default function Button(props: ButtonProps) {
  const {
    onClick,
    width,
    height,
    fontWeight,
    padding,
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
      padding={padding}
      fontWeight={fontWeight}
      bgColor={bgColor}
      onClick={handleClick}
    >
      {children}
    </ButtonWrapper>
  );
}
