import React from "react";
import styled from "styled-components";
import Text from "ui/atoms/Text";
import Button from "ui/atoms/Button";
import DatePickerAtom from "ui/atoms/DatePicker";

interface PageTitleOrganismProps extends TitleWrapperProps {
  children: React.ReactNode;
}

interface TitleWrapperProps {
  flexDirection: "column" | "row";
}

const TitleWrapper = styled.div<TitleWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  justify-content: ${({ flexDirection }) =>
    flexDirection === "row" ? "space-between" : "none"};
  gap: ${({ flexDirection }) => (flexDirection === "column" ? "24px" : 0)};
`;

// eslint-disable-next-line import/prefer-default-export
export function PageTitleOrganism({
  children,
  flexDirection = "row",
}: PageTitleOrganismProps) {
  return <TitleWrapper flexDirection={flexDirection}>{children}</TitleWrapper>;
}
function Title({ children }: { children: React.ReactNode }) {
  return <Text fontSize="xxl">{children}</Text>;
}

interface TitleButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function TitleButton({ children, handleClick }: TitleButtonProps) {
  return (
    <Button padding="16px" onClick={handleClick}>
      {children}
    </Button>
  );
}

interface TitleDatePickerProps {
  onChange: () => void;
}

function TitleDatePicker({ onChange }: TitleDatePickerProps) {
  return <DatePickerAtom onChange={onChange} />;
};



PageTitleOrganism.Title = Title;
PageTitleOrganism.TitleButton = TitleButton;
PageTitleOrganism.TitleDatePicker = TitleDatePicker;
