"use client";

import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  color?: string;
  children: React.ReactNode;
}

const TextWrapper = styled.p<TextProps>`
  font-size: ${({ fontSize, theme }) => theme.font.size[fontSize]};
  color: ${({ color, theme }) => theme.color[color]};
`;

export default function Text({
  fontSize = "md",
  color = "white",
  children,
}: TextProps) {
  return (
    <TextWrapper fontSize={fontSize} color={color}>
      {children}
    </TextWrapper>
  );
}
