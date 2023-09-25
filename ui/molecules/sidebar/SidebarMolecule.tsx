"use client";

import styled, { css } from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Text from "ui/atoms/Text";

interface ContentProps {
  link?: string;
  content: string;
  color?: string;
}

interface SidebarMoleculeProps {
  title?: ContentProps;
  content1: ContentProps;
  content2?: ContentProps;
}

const SidebarMoleculeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`;

const TextWrapper = styled(Link)<{ isfocus?: boolean }>`
  padding: 12px;

  ${({ isfocus }) =>
    isfocus &&
    css`
      background-color: ${({ theme }) => theme.color.gray};
    `}
`;

export default function SidebarMolecule({
  title,
  content1,
  content2,
}: SidebarMoleculeProps) {
  const pathname = usePathname();
  return (
    <SidebarMoleculeWrapper>
      {title && (
        <TextWrapper href={title.link}>
          <Text color={title.color}>{title.content}</Text>
        </TextWrapper>
      )}
      {content1 && (
        <TextWrapper href={content1.link} isfocus={content1.link === pathname}>
          <Text color={content1.color}>{content1.content}</Text>
        </TextWrapper>
      )}
      {content2 && (
        <TextWrapper href={content2.link} isfocus={content2.link === pathname}>
          <Text color={content2.color}>{content2.content}</Text>
        </TextWrapper>
      )}
    </SidebarMoleculeWrapper>
  );
}
