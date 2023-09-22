import styled from "styled-components";
import SideBar from "ui/organism/Sidebar";

interface LayoutTemplateProps {
  children: React.ReactNode;
}

const LayoutTemplateWrapper = styled.div`
  display: flex;
`;

const ChildWrapper = styled.div`
  flex: 1;
`;

export default function LayoutTemplate({ children }: LayoutTemplateProps) {
  return (
    <LayoutTemplateWrapper>
      <SideBar />
      <ChildWrapper>{children}</ChildWrapper>
    </LayoutTemplateWrapper>
  );
}
