import "./style.css";
import { useState } from "react";

function Employeecount() {
  const [count, setCount] = useState(4);
  return (
    <div className="employeeCount">
      <div className="employeeCount_text">
        wannable employee count
      </div>
      <div className="employeeCount_no">
        {count}
      </div>
    </div>
  );
}

export default Employeecount;
