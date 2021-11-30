import Softsuavelogo from './subcomponent/Softsuavelogo';
import Employeecount from './subcomponent/EmployeeCount';
import './style.css';
const Header=()=>{
    return (
        <div className='header'>
            <Softsuavelogo/>
            <Employeecount/>
        </div>
    )
}

export default Header;