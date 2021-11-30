import React from "react";
import'./style.css'

function Button({ name, theme }) {
  return (
    <button
      className={`button ${theme === "primary" ? "primary" : "secondary"}`}
    >
      {name}
    </button>
  );
}
export default Button;
