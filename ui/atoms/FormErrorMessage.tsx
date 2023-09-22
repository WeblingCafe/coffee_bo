"use client"
import styled from "styled-components";

type FormErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.blue};
`;

// eslint-disable-next-line import/prefer-default-export
export function FormErrorMessage({ children }: FormErrorMessageProps) {
  return <ErrorMessage>{children}</ErrorMessage>;
}
