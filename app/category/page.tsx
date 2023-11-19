"use client";

import { PageTitleOrganism } from "ui/organism/PageTitleOrganism";
import { useRouter } from "next/navigation";

export default function Category() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/categoryDetail");
  };

  return (
    <div>
      <PageTitleOrganism flexDirection="row">
        <PageTitleOrganism.Title>카테고리 관리</PageTitleOrganism.Title>
        <PageTitleOrganism.TitleButton handleClick={handleClick}>
          카테고리 설정
        </PageTitleOrganism.TitleButton>
      </PageTitleOrganism>
    </div>
  );
}
