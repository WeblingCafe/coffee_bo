import React, { Children } from "react";
import styled from "styled-components";

interface AuthenticationTemplateProps {
  children: React.ReactNode;
}

const AuthenticationLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function AuthenticationTemplate({
  children,
}: AuthenticationTemplateProps) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
