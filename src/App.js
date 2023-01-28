import HomeScreen from "./HomeScreen";
import './App.css'
import {Routes,Route} from  'react-router'
import Profile from "./profile";
import Login from "./login";

function App() {
  const user = null
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
