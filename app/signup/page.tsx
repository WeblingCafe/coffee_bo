"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import Text from "ui/atoms/Text";
import SignupForm from "ui/organism/signup/SignupForm";

const LoginLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 452px;
  width: 100%;
  height: 100%;
  min-height: 466px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.03);
`;

export default function Signup() {
  return (
    <LoginLayout>
      <LoginBox>
        <Text color="black" fontWeight="bold">
          WEBLING CAFE
        </Text>
        <Text fontSize="xxxl" color="black" fontWeight="bold">
          회원가입
        </Text>
        <SignupForm />
      </LoginBox>
    </LoginLayout>
  );
}
