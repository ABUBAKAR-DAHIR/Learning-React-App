import React from 'react'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()

  function backLoginClick(e){
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div>
        <div className="register-holder">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h2>Register</h2>
          <input type="text" name="username" id="username" placeholder='Username'/>
          <input type="password" name="password" id="password" placeholder='Password'/>
          <input type="password" name="password" id="repeat-password" placeholder='Repeat Password'/>
          <button id='register' type='button'>register</button>
          <button id='back-login' type='button' onClick={(e) => backLoginClick(e)}>sign in</button>
        </form>
      </div>
    </div>
  )
}
