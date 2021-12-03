import React, {useState, useContext} from "react";
import "./style.css";
import Fields from "../../../../common/components/Fields";
import Button from "../../../../common/components/Button";
import { EmployeeContext } from "../../../../context/EmployeeContext";



const options =[
  {id:'d1' ,label:'Technical'},
  {id:'d2' ,label:'non-Technical'},
  {id:'d3' ,label:'Accounts'}
] 

export default function EmployeeForm({setEmployeeList, employeeList,setCount}) {
const value = useContext(EmployeeContext)
let employees = value.employees;
const [formvar, setFormvar]=useState({name:'',dob:'',empid:'',dept:''})
const updateName = (e) => {
  setFormvar(
    {...formvar,name:e.currentTarget.value}
  )
}

const updateDob = (e) => {
  setFormvar(
    {...formvar,dob:e.currentTarget.value}
  )
}

const updateDept = (e) => {
  setFormvar(
    {...formvar,dept:e.currentTarget.value, empid:formvar.empid.concat("emp", Date.now())}
  )
}

const addEmp = e => {
  e.preventDefault();
  alert(JSON.stringify(formvar))
   employees = employeeList;
  employees.push(formvar)
  setEmployeeList([...employees]);
  console.log(employeeList.lenth)
}

 const clearScreen = (e) =>{
  e.preventDefault()
  setFormvar(
    {name:'',dob:'',dept:'',empid:''}
  )
}

  return (
    <div className="employee_form">
      <form id="employee_form">
        <Fields type="TF" placeholder="Enter name..." name="Name" onChange={updateName} value={formvar.name}/>
        <Fields type="date" name="Dob" onChange={updateDob} value={formvar.dob}/>
        <Fields type="empid" placeholder="emp1024487343" name="Emp Id" value={formvar.empid}/>
        <Fields type="select"  name="Department" placeholder='Select your option' options={options} onChange={updateDept}/>
        <div className="buttons">
          <div className="addbutton">
            <Button name="add"  theme="primary" onClick={addEmp}/>
          </div>
          <div className="cancelbutton">
            <Button name="cancel"  theme="secondary" onClick={clearScreen}/>
          </div>
        </div>
      </form>
    </div>
  );
}

