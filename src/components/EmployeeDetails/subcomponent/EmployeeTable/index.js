import React, { useContext } from "react";
import "./style.css";
import { EmployeeContext } from "../../../../context/EmployeeContext";

function EmployeeTable() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="Empoyee_table">
      <table id="table">
        <tr>
          <th>Name</th>
          <th>Dob</th>
          <th>Empid</th>
          <th>Deptname</th>
        </tr>

        {employees.map((emp) => {
          return (
            <tr key={emp.formvar.empid}>
              <td> {emp.formvar.name}</td>
              <td> {emp.formvar.dob}</td>
              <td>{emp.formvar.empid}</td>
              <td>{emp.formvar.dept}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default EmployeeTable;
