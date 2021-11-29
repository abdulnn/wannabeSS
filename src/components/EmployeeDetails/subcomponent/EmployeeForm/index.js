import React from "react";
import "./style.css";
import Fields from "../../../../common/components/Fields";
import Button from "../../../../common/components/Button";
 

const options =[
  {value:'d1' ,label:'Technical'},
  {value:'d2' ,label:'non-Technical'},
  {value:'d3' ,label:'Accounts'}
] 

function EmployeeForm() {
  return (
    <div className="employee-details">
      <form id="employee-form">
        <Fields type="TF" placeholder="Enter name..." value="Name" />
        <Fields type="date" value="Dob" />
        <Fields type="text" placeholder="EXl102343" value="Emp Id" />
        <Fields type="select"  value="Department" placeholder='Select your option' options={options}/>

        <div className="buttons">
          <div className="addbutton">
            <Button name="add" />
          </div>
          <div className="cancelbutton">
            <Button name="cancel" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;