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
          <p className='info'>{info}</p>
          <button type="button" className="gsi-login-material-button">
            <div className="gsi-login-material-button-state"></div>
            <div className="gsi-login-material-button-content-wrapper">
              <div className="gsi-login-material-button-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ display: 'block' }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 
                    30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 
                    13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94
                    c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6
                    c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59
                    l-7.98-6.19C.92 16.46 0 20.12 0 24
                    c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6
                    c-2.15 1.45-4.92 2.3-8.16 2.3
                    -6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19
                    C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
              </div>
              <span className="gsi-login-material-button-contents">
                Continue with Google
              </span>
              <span style={{ display: 'none' }}>Sign in with Google</span>
            </div>
          </button>
          <button id='back-register' onClick={() => navigate('/register')}>Don't have an account? sign up</button>
        </form>
      </div>
    </div>
  )
}
