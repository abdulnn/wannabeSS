import React from "react";
import "./style.css";


function EmployeeTable({employeeList}) {

  return( 
        <div className="Empoyee_table">
    
      <table id="table">
        <tr>
          <th>Name</th>
          <th>Dob</th>
          <th>Empid</th>
          <th>Deptname</th>
          <th>Deptid</th>
        </tr>
        
          {employeeList.map((emp) => {
            console.log(emp);
            return <tr key={emp.empid}>
              <td> {emp.name}</td>
              <td> {emp.dob}</td>
              <td>{emp.empid}</td>
              <td>{emp.dept}</td>
            </tr>
      
})}
          
        
      </table>
      
    </div>
   
  )
  
}

export default EmployeeTable;
