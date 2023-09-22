"use client";

import React from "react";
import Image from "next/image";
import { FieldValues, Controller, Control } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

export type Option = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  name: string;
  label: string;
  options: Option[];
  control: Control<FieldValues>;
}

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    width: "380px",
    border: state.isFocused ? "1px solid #2563EB" : "1px solid #E5E7EB",
    boxShadow: "none",
    borderRadius: "8px",
  }),
  indicatorsContainer: () => ({
    padding: "8px",
  }),
  indicatorSeparator: () => ({
    display: "none", // 이렇게 하면 indicatorSeparator가 보이지 않게 됩니다.
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "380px",
  }),
};

function Dropdown({ name, options, control }: SelectBoxProps) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={customStyles}
            value={options.find((option) => option.value === field.value)}
            onChange={(selectedOption) => field.onChange(selectedOption?.value)}
            components={{
              // eslint-disable-next-line react/no-unstable-nested-components
              DropdownIndicator: () => (
                <Image
                  alt="drop_down_arrow"
                  width={18}
                  height={18}
                  src="/icons/arrow_down_icon.svg"
                />
              ),
            }}
          />
        )}
        rules={{ required: true }}
      />
    </div>
  );
}

export default Dropdown;
