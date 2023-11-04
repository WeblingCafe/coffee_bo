import Button from "../Button";

interface LogoutButtonProps {
  handleClick: () => void;
}

export default function LogoutButton({ handleClick }: LogoutButtonProps) {
  return (
    <Button width="lg" bgColor="white" onClick={handleClick}>
      버튼 테스트
    </Button>
  );
}
