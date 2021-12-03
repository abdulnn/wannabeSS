import Softsuavelogo from './subcomponent/Softsuavelogo';
import Employeecount from './subcomponent/EmployeeCount';
import './style.css';
const Header=({employeeList})=> {
    return (
        <div className='header'>
            <Softsuavelogo />
            <Employeecount employeeList={employeeList}/>
        </div>
    )
}

export default Header;