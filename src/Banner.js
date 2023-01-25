import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <header className='banner' > 

    <div className='banner-content'>
        <h1 className='banner-title' > movie name</h1>
        <div className='banner-buttons' >
            <button className='banner-button'>play</button>
            <button className='banner-button' >My list</button>
        </div>
        <h1 className='banner-description'> 
        this is a test description
         </h1>
    </div>
    <div className='banner-fadebutton' />
    </header>
  )
}

export default Banner