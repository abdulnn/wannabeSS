import React from "react";
import "./style.css";
import Fields from "../../../../common/components/Fields";
import Button from "../../../../common/components/Button";
 
const options =[
  {value:'d1' ,label:'Technical'},
  {value:'d2' ,label:'non-Technical'},
  {value:'d3' ,label:'Accounts'}
] 
const theme=(
  {primary: 'Red'},
  {secondary: 'white'}
)

function EmployeeForm() {
  return (
    <div className="employee_form">
      <form id="employee_form">
        <Fields type="TF" placeholder="Enter name..." value="Name" />
        <Fields type="date" value="Dob" />
        <Fields type="text" placeholder="EXl102343" value="Emp Id" />
        <Fields type="select"  value="Department" placeholder='Select your option' options={options}/>

        <div className="buttons">
          <div className="addbutton">
            <Button name="add" variant="outlined" theme="primary"/>
          </div>
          <div className="cancelbutton">
            <Button name="cancel"  theme="secondary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;

