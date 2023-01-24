import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
 const [show,handelshow] = useState(false);

 const transitionScrollBar = ()=>{
    if(window.scrollY > 100){
        handelshow(false)
    }
    else{
        handelshow(true)
    }
 }
useEffect(()=>{
    window.addEventListener("scroll",transitionScrollBar)
    return () => window.removeEventListener("scroll",transitionScrollBar)
},[])

  return (
<div className={`navbar  ${show && "nav-black"}`} >
    <div className='nav-contents' >        
        <img className='nav-logo' 
             alt='netflix' 
             src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
        
        <img className='nav-avatar'  
              alt='avatar'
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
    </div>

</div>
  )
}

export default Navbar