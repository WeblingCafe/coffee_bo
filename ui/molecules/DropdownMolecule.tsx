"use client"

import React from "react";
import { useForm } from "react-hook-form";
import Dropdown, { Option } from "ui/atoms/Dropdown";

type FormData = {
  gender: string;
  country: string;
};

// eslint-disable-next-line import/prefer-default-export
export function DropdownMolecule() {
  const { handleSubmit, control } = useForm<FormData>();

  // 예시
  const genderOptions: Option[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const countryOptions: Option[] = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Dropdown
        name="gender"
        label="Gender"
        options={genderOptions}
        control={control}
      />
      <Dropdown
        name="country"
        label="Country"
        options={countryOptions}
        control={control}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
