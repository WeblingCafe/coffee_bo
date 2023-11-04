import styled from "styled-components";
import Button from "../Button";

export default function LogoutButton() {
  const handleClick = () => {
    console.log("로그아웃");
  };
  return (
    <Button width="lg" bgColor="white" onClick={handleClick}>
      버튼 테스트
    </Button>
  );
}
