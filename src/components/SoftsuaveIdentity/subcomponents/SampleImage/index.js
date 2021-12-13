import React from 'react'
import image1 from './../../../../assets/images/image1.jpeg'
import image2 from './../../../../assets/images/image2.jpeg'
import image3 from './../../../../assets/images/image3.jpeg'
import'./style.css'

const SampleImage = () => {
    return (
       <div className='sampleImages'>
      <div className='img'><img src={image1} alt='' ></img></div> 
      <div className='img'><img  src={image2} alt='' ></img></div> 
      <div className='img'><img src={image3} alt='' ></img></div> 
        </div>
    )
}

export default SampleImage





