"use client";

import styled from "styled-components";
import Text from "ui/atoms/Text";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  padding: 28px 24px 12px 24px;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Text fontSize="lg">WEBLING CAFE</Text>
      <Text fontSize="xxs" color="lightGray">
        Admin
      </Text>
    </LogoWrapper>
  );
}
