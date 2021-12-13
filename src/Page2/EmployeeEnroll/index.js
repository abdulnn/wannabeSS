import React from 'react'
import EmployeeDetails from '../../components/EmployeeDetails'
import Introduction from '../../components/Introduction'
import './style.css';

const Employee_Enroll = () => {
    return (
        <div className='Employeewebpage'>
            <Introduction />
            <hr className="divider"></hr>s
            <EmployeeDetails />
        </div>
    )
}

export default Employee_Enroll
