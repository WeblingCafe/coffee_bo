"use client";

import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import Text from "ui/atoms/Text";
import { useSession } from "next-auth/react";

interface UserTextProps {
  handleClick: () => void;
  isOpen: boolean;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const UserButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserText = styled.span`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.color.lightGray};
`;

const UserButtonArrow = styled(Image)<{ isOpen: boolean }>`
  transition: transform 1s ease; /* 변환 속성에 대한 애니메이션 추가, 1초 동안 천천히 회전. */
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${rotateAnimation} 1s ease
        `
      : "none"};
`;

export default function UserButton({ handleClick, isOpen }: UserTextProps) {
  const { data } = useSession();
  const USERNAME = data?.user?.responseObject?.username;

  return (
    <UserButtonWrapper onClick={handleClick}>
      <UserText>{USERNAME}님</UserText>
      <UserButtonArrow
        width="16"
        height="16"
        src="/icons/arrow_down_Icon.svg"
        isOpen={isOpen}
      />
    </UserButtonWrapper>
  );
}
