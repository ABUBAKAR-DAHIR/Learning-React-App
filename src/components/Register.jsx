import React, { useState } from 'react'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom'
import { registerUser, loginUser } from '../services/authService'

export default function SignIn() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatedPassword] = useState("")
  const [info, setInfo] = useState("")

  function backLoginClick(e){
    e.preventDefault()
    navigate('/login')
  }

  async function handleRegister() {

    if(password !== repeatPassword){
      setInfo("passwords do not match")
      // alert("passwords do not match")
      return
    }

    try{
      const response = await registerUser(email, password);
      console.log(response);
      setInfo(response.message)
      setEmail("")
      setPassword("")
      setRepeatedPassword("")
    }
    catch(error){
      setInfo(error.message || "Something went wrong")
      console.log(error);
      
    }
  }

  return (
    <div>
        <div className="register-holder">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h2>Register</h2>
          <input type="text" name="username" id="username" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" name="password" id="repeat-password" placeholder='Repeat Password' value={repeatPassword} onChange={(e) => setRepeatedPassword(e.target.value)}/>
          <button id='register' type='button' onClick={handleRegister}>register</button>
          <p>{info}</p>
          <button id='back-login' type='button' onClick={(e) => backLoginClick(e)}>Already have an account? sign in</button>
        </form>
      </div>
    </div>
  )
}
