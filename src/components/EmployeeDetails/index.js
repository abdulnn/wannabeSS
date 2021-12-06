import EmployeeForm from './subcomponent/EmployeeForm';
import EmployeeTable from './subcomponent/EmployeeTable';
import './style.css';

 const EmployeeDetails = ()=>{
    return (
        <div className="employee_detail">
            <EmployeeForm />
            <EmployeeTable />
        </div>
    )
}

export default EmployeeDetails;