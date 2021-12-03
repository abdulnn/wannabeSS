import EmployeeForm from './subcomponent/EmployeeForm';
import EmployeeTable from './subcomponent/EmployeeTable';
import './style.css';

 const EmployeeDetails = ({count,setCount, employeeList, setEmployeeList})=>{
    return (
        <div className="employee_detail">
            <EmployeeForm count={count} setCount={setCount} setEmployeeList={setEmployeeList} employeeList={employeeList}/>
            <EmployeeTable employeeList={employeeList}/>
        </div>
    )
}

export default EmployeeDetails;