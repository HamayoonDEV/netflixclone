import React from 'react'
import './Banner.css'

const Banner = () => {
    function truncate(string,n){
        return string.length > n ? string.substr(0,n-1) + "..." : string;
    }
  return (
    <header className='banner' > 

    <div className='banner-content'>
        <h1 className='banner-title' > movie name</h1>
        <div className='banner-buttons' >
            <button className='banner-button'>play</button>
            <button className='banner-button' >My list</button>
        </div>
        <h1 className='banner-description'> 
        {truncate(`this is my description`,150)}
         </h1>
    </div>
    <div className='banner-fadebutton' />
    </header>
  )
}

export default Banner