import React from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className='login'>
      <div className="login-holder">
        <form action="">
          <h2>Login</h2>
          <input type="text" name="username" id="username" placeholder='Username'/>
          <input type="password" name="password" id="password" placeholder='Password'/>
          <a href="">forgot password?</a>
          <button id='login'>login</button>
          <button id='back-register' onClick={() => navigate('/register')}>sign up</button>
        </form>
      </div>
    </div>
  )
}
