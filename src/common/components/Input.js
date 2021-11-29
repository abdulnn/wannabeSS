import React from "react";

export default function Input({ type, placeholder, value ,options }) {
  if (type === "TF") {
    return <input placeholder={placeholder} />;
  }
  if (type === "date") {
    return <input type="date" placeholder={placeholder} />;
  }
  if (type === "text") {
    return <input placeholder={placeholder} disabled />;
  }
  if (type === "select") {
    return (
      <select>
        <option  disabled selected>
          {placeholder}
        </option>
        {
        options.map(optObj=> <option value={optObj.value}>{optObj.label}</option> )
        }
      </select>
    );
  }
}