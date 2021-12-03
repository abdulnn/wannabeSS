import React from "react";

export default function Input({ type, placeholder, value ,options,onChange}) {

  if (type === "TF") {
    return <input placeholder={placeholder}  onChange={onChange} value={value}/>;
  }
  if (type === "date") {
    return <input type="date" placeholder={placeholder}  onChange={onChange} value={value}/>;
  }
  if (type === "empid") {
    return <input placeholder={placeholder} type="empid"  value={value} disabled/>;
  }
  if (type === "select") {
    return (
      <select onChange={onChange}>
        <option  disabled selected>
          {placeholder}
        </option>
        {
        options.map(optObj=> <option id={optObj.id}>{optObj.label}</option> )
        }
      </select>
    );
  }
}