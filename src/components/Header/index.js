import Softsuavelogo from './subcomponent/Softsuavelogo';
import Employeecount from './subcomponent/EmployeeCount';
import './style.css';
const Header=({isCoutVisible})=> {
  
    return (
        <div className='header'>
            <Softsuavelogo />
            {isCoutVisible?<Employeecount />:''}
        </div>)
       
        }

export default Header;