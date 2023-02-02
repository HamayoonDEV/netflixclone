import React, { useState } from 'react'
import './login.css'
import LoginScreen from './LoginScreen'

const Login = () => {
    const [signIn,setSignIn] = useState(false)
  return (
    <div className='login'>
        <div className='login-background' >
            <img className='login-logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='loginBackground' />
            <button onClick={()=>setSignIn(true)} className='signin' > Sign In </button>
            <div className='login-grediant' />
        </div>
        <div className='login-body' >
            
            {signIn ? (<LoginScreen/>) :(
                 <>
                 <h1>Unlimited films,Tv Programmes and more.</h1>
                 <h2>Watch anywhere.Cancel at any time.</h2>
                 <h3>Ready to watch?Enter your email to create or restart your membership.</h3>
                 <div className='login-input'>
                     <form>
                         <input type='email' placeholder = 'Email Address' />
                         <button onClick={()=>setSignIn(true)} className='getstarted' > Get Started</button>
                     </form>
                 </div>
                 </>
            ) }
           
        </div>
    </div>
  )
}

export default Login