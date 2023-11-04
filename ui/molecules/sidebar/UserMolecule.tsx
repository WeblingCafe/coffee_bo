import { useState } from "react";
import styled from "styled-components";
import { signOut } from "next-auth/react";
import UserButton from "ui/atoms/sidebar/UserButton";
import LogoutButton from "ui/atoms/sidebar/LogoutButton";

const UserMoleculeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

export default function UserMolecule() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    signOut();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserMoleculeWrapper>
      {isOpen && <LogoutButton handleClick={handleLogOut} />}
      <UserButton handleClick={handleClick} isOpen={isOpen} />
    </UserMoleculeWrapper>
  );
}
