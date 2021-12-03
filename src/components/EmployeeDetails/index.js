import EmployeeForm from './subcomponent/EmployeeForm';
import EmployeeTable from './subcomponent/EmployeeTable';
import './style.css';

 const EmployeeDetails = ({employeeList, setEmployeeList})=>{
    return (
        <div className="employee_detail">
            <EmployeeForm setEmployeeList={setEmployeeList}/>
            <EmployeeTable employeeList={employeeList}/>
        </div>
    )
}

export default EmployeeDetails;