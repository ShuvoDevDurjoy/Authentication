import axios from "axios"
import "./SignUp.css"
import { useState } from "react"
const SignUp = ({setWarningMessage}) => {

  const [name , setName] = useState() ; 
  const [email, setEmail] = useState() ; 
  const [password, setPassword] = useState() ; 

  const submitted = async(setWarningMessage)=>{
    
    await axios.post("http://localhost:5000/api/auth/signup",{name,email,password}).then((response)=>{
      setWarningMessage(response.data.message) ; 
    }) 
  }
  return (
    <div className='sign_up_container'>
      <div className="sign_up_content">
        <div className="sign_up_name gap-2 fl">
          <p>Username : </p>
          <input type="text" onChange={(event)=>{
            setName(event.target.value)
          }} value={name}/>
        </div>
        <div className="sign_up_mail gap-2 fl">
          <p>Email : </p>
          <input type="email" name="mail" id="sing_up_mail" onChange={(event)=>{
            setEmail(event.target.value)
          }} value={email}/>
        </div>
        <div className="sign_up_password gap-2 fl">
          <p>Password : </p>
          <input type="password" name="pass" id="sign_up_password" onChange={(event)=>{
            setPassword(event.target.value) ; 
          }} value={password}/>
        </div>
        <div className="sign_up_submit">
          <button className="sign_up_submit_button" onClick={()=>{
            submitted(setWarningMessage)
          }}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
