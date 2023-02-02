import React from 'react'
import './profile.css'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profile' >
        <Navbar/>
        <div className='profileScreen' >
            <h1>Edit Profile</h1>
            <div className='profileScreen-info' >
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
            <div className='profileScreen-detail' >
                <h2 >Email:{ user.Email}</h2>
                <div className = "profileScreen-plans" >
                <button className='profileScreen-signOut' onClick={()=> auth.signOut()} > signOut</button>
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile