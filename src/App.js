import HomeScreen from "./HomeScreen";
import './App.css'
import {Routes,Route} from  'react-router'
import Profile from "./profile";
import Login from "./login";
import { useEffect } from "react";
import { auth } from "./firebase";
import {useDispatch, useSelector} from 'react-redux'
import { login,logout, selectUser } from "./features/userSlice";


function App() {
const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(()=>{
       const unSubscribe =  auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          //loggedin
          dispatch(login({
            uid:userAuth.uid,
            Email:userAuth.email
          }))

        }else{
          //loggedout
          dispatch(logout())
        }
      })
      return unSubscribe
  },[dispatch])
  return (
    <div className="app">
      {!user ? <Login/> :(
         <Routes>      
         <Route path="/" element = {  <HomeScreen/>}  /> 
         <Route path="/profile"  element = {<Profile/>}/>
          </Routes>
  

      ) }
     
      
    </div>
  );
}
export default App;
