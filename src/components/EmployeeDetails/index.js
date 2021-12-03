import EmployeeForm from './subcomponent/EmployeeForm';
import EmployeeTable from './subcomponent/EmployeeTable';
import './style.css';

 const EmployeeDetails = ({options})=>{
    return (
        <div className="employee_detail">
            <EmployeeForm />
            <EmployeeTable options={options}/>
        </div>
    )
}

export default EmployeeDetails;