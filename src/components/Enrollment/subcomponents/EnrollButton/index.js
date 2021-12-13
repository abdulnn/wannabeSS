import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import Button from '../../../../common/components/Button'

function EnrollButton() {
    const navigate = useNavigate();


    const onClickHandler = (e) => {
      e.preventDefault()
        navigate('/employee_enroll');
    }

    return (
      
        <div className='enrollbutton'>
        <Button name='Enroll me...' customClass='enroll' onClick={onClickHandler}/>

        </div>
    )
}
export default EnrollButton