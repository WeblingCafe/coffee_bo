import { useState } from "react";
import styled from "styled-components";
import UserText from "ui/atoms/sidebar/UserButton";
import UserButton from "ui/atoms/sidebar/LogoutButton";

const UserMoleculeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

export default function UserMolecule() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <UserMoleculeWrapper>
      {isOpen && <UserButton />}
      <UserText handleClick={handleClick} isOpen={isOpen} />
    </UserMoleculeWrapper>
  );
}
