import React,{useContext} from "react";
import "./style.css";
import { EmployeeContext } from "../../../../context/EmployeeContext";


function EmployeeTable({options}) {
  const [employees] = useContext(EmployeeContext)
  
  return( 
        <div className="Empoyee_table">
    
      <table id="table">
        <tr>
          <th>Name</th>
          <th>Dob</th>
          <th>Empid</th>
          <th>Deptname</th>
        </tr>
    
            {employees.map((emp) => {
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
