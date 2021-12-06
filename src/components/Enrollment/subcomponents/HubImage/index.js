import React from 'react'
import landimage from'./../../../../assets/images/wannaillus.svg'
import './style.css'

function HubImage() {
    return (
        <div className="landingimage">
        <img src={landimage} width='100%' height='100%' alt="" />
        </div>
    )
}
export default HubImage   