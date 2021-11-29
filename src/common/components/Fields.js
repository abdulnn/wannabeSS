import React from "react";
import Input from "./Input";
import Label from "./Label";

function Feilds({ type, placeholder, value, options }) {
  return (
    <>
      <Label value={value} />
      <Input type={type} placeholder={placeholder} value={""} options={options} />
    </>
  );
}

export default Feilds;
