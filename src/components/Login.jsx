import React, { useState } from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router'
import { loginUser } from '../services/authService'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [info, setInfo] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    try{
      const response = await loginUser(email, password)
      setInfo(response)
      setEmail("")
      setPassword("")
      console.log(response)
    }
    catch(error){
      setInfo(error)
      console.log(error);
      
    }
  }

  return (
    <div className='login'>
      <div className="login-holder">
        <form action="">
          <h2>Login</h2>
          <input type="text" name="username" id="username" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <a href="">forgot password?</a>
          <button id='login' onClick={(e) => handleLogin(e)}>login</button>
          <p>{info}</p>
          <button id='back-register' onClick={() => navigate('/register')}>sign up</button>
        </form>
      </div>
    </div>
  )
}
