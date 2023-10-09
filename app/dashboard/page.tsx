"use client";

import Input from "ui/atoms/Input";
import RegistrationForm from "ui/organism/signin/LoginForm";
import { DropdownMolecule } from "ui/molecules/DropdownMolecule";

export default function Dashboard() {
  return (
    <>
      <Input id="test1" name="test1" placeHolder="리나테스트1" />
      <Input
        id="test2"
        name="test2"
        placeHolder="리나테스트2"
        styleType="search"
      />
      <RegistrationForm />
      <DropdownMolecule />
    </>
  );
}
