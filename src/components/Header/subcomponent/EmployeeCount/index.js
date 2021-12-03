import "./style.css";
import React from "react";

function Employeecount({count}) { 
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
