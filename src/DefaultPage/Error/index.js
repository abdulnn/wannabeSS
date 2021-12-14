import React from 'react'
import image from './../../assets/images/error.png'
import './style.css'

const Error = () => {
    return (
            <div className='errorimage'>
                <h1>Error (you have found a page that does'nt exist) </h1>                
               <img src={image} alt='' />
            </div>
    )
}
export default Error
