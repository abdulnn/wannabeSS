import React from 'react'
import image1 from './../../../../assets/images/image1.jpeg'
import image2 from './../../../../assets/images/image2.jpeg'
import image3 from './../../../../assets/images/image3.jpeg'
import'./style.css'

const SampleImage = () => {
    return (
        <div className='sampleImages'>
           <img src={image1} alt='' ></img>
      <div className='image2'><img src={image2} alt='' ></img></div>
       <img src={image3} alt='' ></img>
        </div>
    )
}

export default SampleImage
