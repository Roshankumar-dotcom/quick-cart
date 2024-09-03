import React from 'react'
import handIcon from '../Assets/handIcon.png'
import modelImage from '../Assets/modelsImage.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-side">
            <h2>New Arrivals only</h2>
            <div>
                <div className='hand-icon'>
                    <p>new</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="latest-button">
                <div>
                    Latest Collection
                </div>
            </div>
      </div>
      <div className="right-side">
        <img src={modelImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
