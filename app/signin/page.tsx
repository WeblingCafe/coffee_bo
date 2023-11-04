"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Text from "ui/atoms/Text";
import LoginForm from "ui/organism/signin/LoginForm";
import Button from "ui/atoms/Button";

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
  height: fit-content;
  padding: 50px 0;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.03);
`;

export default function Login() {
  const router = useRouter();
  const onChangeRotuer = () => {
    router.push("/signup");
  };

  return (
    <LoginLayout>
      <LoginBox>
        <Text color="black" fontWeight="bold">
          WEBLING CAFE
        </Text>
        <Text fontSize="xxxl" color="black" fontWeight="bold">
          회원 로그인
        </Text>
        <LoginForm />
        <Button
          width="xl"
          height="xl"
          fontWeight="bold"
          onClick={onChangeRotuer}
        >
          회원가입
        </Button>
      </LoginBox>
    </LoginLayout>
  );
}
