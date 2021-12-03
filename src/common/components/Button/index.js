import React from "react";
import'./style.css'

function Button({ name, theme ,onClick}) {
  return (
    <button
      className={`${theme === "primary" ? "primary" : "secondary"}`} onClick={onClick}
    >
      {name}
    </button>
  );
}
export default Button;
