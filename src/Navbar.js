import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
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
       <Link to='/' > <img className='nav-logo' 
             alt='netflix' 
             src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' /></Link>
        
      <Link to='/profile' >  <img className='nav-avatar'  
              alt='avatar'
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' /></Link>
    </div>

</div>
  )
}

export default Navbar