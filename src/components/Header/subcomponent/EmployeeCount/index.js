import "./style.css";
import { useState } from "react";

function Employeecount() {
  const [count, setCount] = useState(0);
  return (
    <div className="employeeCount">
      <div className="employeeCount-text">
        <span>wannable employee count </span>
      </div>
      <div className="employeeCount-no">
        <p>{count}</p>
      </div>
    </div>
  );
}

export default Employeecount;
