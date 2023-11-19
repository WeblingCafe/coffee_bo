import React, { useState } from "react";
import styled from "styled-components";
import Text from "ui/atoms/Text";
import Button from "ui/atoms/Button";
import DatePickerAtom from "ui/atoms/DatePicker";
import dayjs from "dayjs";

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
  return (
    <Text fontSize="xxl" color="black" fontWeight="bold">
      {children}
    </Text>
  );
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
  onChange: (value: Date) => void;
}

function TitleDatePicker({ onChange }: TitleDatePickerProps) {
  const [selectedDate, setSelectDate] = useState<Date>();

  const handleChangeDate = (value: Date) => {
    setSelectDate(value);

    onChange(selectedDate);
  };

  return (
    <DatePickerAtom onChange={handleChangeDate} selectedDate={selectedDate} />
  );
}

interface TitleDateRangePickerProps {
  handleStartDateChange: (value: Date) => void;
  handleEndtDateChange: (value: Date) => void;
}

const DateRangePickerWrapper = styled.div`
  display: flex;
`;

function TitleDateRangePicker({
  handleStartDateChange,
  handleEndtDateChange,
}: TitleDateRangePickerProps) {
  return (
    <DateRangePickerWrapper>
      <div>조회기간</div>
      <TitleDatePicker onChange={handleStartDateChange} />
      <div> ~ </div>
      <TitleDatePicker onChange={handleEndtDateChange} />
    </DateRangePickerWrapper>
  );
}

PageTitleOrganism.Title = Title;
PageTitleOrganism.TitleButton = TitleButton;
PageTitleOrganism.TitleDatePicker = TitleDatePicker;
PageTitleOrganism.TitleDateRangePicker = TitleDateRangePicker;
