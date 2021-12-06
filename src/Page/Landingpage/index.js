import React from 'react'
import Enrollment from '../../components/Enrollment'
import SoftsuaveIdentity from '../../components/SoftsuaveIdentity'
import './style.css'

const LandingPage = () => {
    return (
        <div className='landingpage'>
            <Enrollment />
            <SoftsuaveIdentity />
        </div>
    )
}

export default LandingPage
