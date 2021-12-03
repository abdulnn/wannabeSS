import "./style.css";
import React, {useContext} from "react";
import {EmployeeContext} from '../../../../context/EmployeeContext'

function Employeecount() { 
  const [employees] = useContext(EmployeeContext)

  const count=(employees).length
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
