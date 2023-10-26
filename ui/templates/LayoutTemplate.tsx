// "use client";

import styled from "styled-components";
import SideBar from "ui/organism/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

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
  const { data, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // REFACTOR: 로딩중일때, 로딩 UI 필요
  if (status === "loading") return null;

  // 분기처리를 컴포넌트를 통채로 하는게 더 자연스러워 보여서 아래의 로직으로 변경
  if ((data && pathname === "/signin") || (data && pathname === "/signup")) {
    router.push("/");
    return null;
  }

  if (data) {
    return (
      <LayoutTemplateWrapper>
        <SideBar />
        <ChildWrapper>{children}</ChildWrapper>
      </LayoutTemplateWrapper>
    );
  }

  if (!data) {
    return (
      <LayoutTemplateWrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </LayoutTemplateWrapper>
    );
  }
}
