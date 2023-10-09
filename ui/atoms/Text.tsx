"use client";

import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  children: React.ReactNode;
}

const TextWrapper = styled.p<TextProps>`
  font-size: ${({ fontSize, theme }) => theme.font.size[fontSize]};
  font-weight: ${({ fontWeight, theme }) => theme.font.weight[fontWeight]};
  color: ${({ color, theme }) => theme.color[color]};
`;

export default function Text({
  fontSize = "md",
  fontWeight = "normal",
  color = "white",
  children,
}: TextProps) {
  return (
    <TextWrapper fontSize={fontSize} color={color} fontWeight={fontWeight}>
      {children}
    </TextWrapper>
  );
}
