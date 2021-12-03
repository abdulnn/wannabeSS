import React from "react";
import Input from "./Input";
import Label from "./Label";

function Feilds({ type, placeholder, value, name, options,onChange }) {
  return (
    <>
      <Label name={name} />
      <Input type={type} placeholder={placeholder} value={value} name={name} options={options} onChange={onChange}/>
    </>
  );
}

export default Feilds;
