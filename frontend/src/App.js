import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css'
import Home from "./Container/Home/Home"
import Login from "./Container/Login/Login"
import Authentication from "./Container/Authentication/Authentication" ; 
import SignUp from './Container/SignUp/SignUP'
import axios from 'axios'
const App = () => {

  const [warningMessage , setWarningMessage] = useState("There is nothing in warning state") ; 
  useEffect(()=>{
    const fetchData = async()=>{
      const req = await axios.get("http://localhost:5000/api/auth/authentication")
      console.log("collected messgae is : ",req.data.message) ; 
      setWarningMessage(req.data.message) ; 
    } 
    fetchData() ; 
},[]) ; 


  return (
    <div>
        <Router>
          <Home warningMessage={warningMessage} setWarningMessage={setWarningMessage} />
          <Routes>
            <Route path="/sign_up" element={<SignUp setWarningMessage={setWarningMessage}/>}></Route>
            <Route path="/login" element={<Login warning={setWarningMessage}/>}></Route>
            <Route path="/Authentication" element={<Authentication warning={setWarningMessage}/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
