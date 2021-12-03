import Softsuavelogo from './subcomponent/Softsuavelogo';
import Employeecount from './subcomponent/EmployeeCount';
import './style.css';
const Header=({empCount})=> {
    return (
        <div className='header'>
            <Softsuavelogo />
            <Employeecount count={empCount}/>
        </div>
    )
}

export default Header;