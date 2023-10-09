// "use client";

import styled from "styled-components";
import SideBar from "ui/organism/Sidebar";
import { useSession } from "next-auth/react";

interface LayoutTemplateProps {
  children: React.ReactNode;
}

const LayoutTemplateWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ChildWrapper = styled.div`
  flex: 1;
`;

export default function LayoutTemplate({ children }: LayoutTemplateProps) {
  const { data } = useSession();
  console.log("data", data);
  // data가 없으면 다른 router 접근 못하게 막을까 고민!

  return (
    <LayoutTemplateWrapper>
      {data && <SideBar />}
      <ChildWrapper>{children}</ChildWrapper>
    </LayoutTemplateWrapper>
  );
}
