"use client";

import styled from "styled-components";
import SidebarMolecule from "ui/molecules/sidebar/SidebarMolecule";
import Logo from "ui/atoms/\bsidebar/Logo";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.box.width.lg};
  background-color: ${({ theme }) => theme.color.black};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 0.12;
`;

export default function SideBar() {
  return (
    <SidebarWrapper>
      <Logo />
      <Line />
      <SidebarMolecule
        title={{
          link: "/",
          content: "메뉴",
          color: "placeholderGray",
        }}
        content1={{
          link: "/category",
          content: "카테고리관리",
        }}
        content2={{
          link: "/menu",
          content: "메뉴관리",
        }}
      />
      <Line />
      <SidebarMolecule
        title={{
          link: "/",
          content: "정산",
          color: "placeholderGray",
        }}
        content1={{
          link: "/sales",
          content: "매출조회",
        }}
        content2={{
          link: "/salesList",
          content: "정산내역",
        }}
      />
      <Line />
      <SidebarMolecule
        content1={{
          link: "/order",
          content: "주문",
        }}
      />
      <SidebarMolecule
        content1={{
          link: "/notice",
          content: "공지사항",
        }}
      />
    </SidebarWrapper>
  );
}
