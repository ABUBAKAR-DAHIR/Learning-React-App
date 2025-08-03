import React, { useState } from 'react'
import '../styles/header.css'
import Auth from './Auth'

export default function Header() {
  const [menuOpen, setMenu] = useState(false);

  function hideMenu(){
    setMenu(false)
  }

  function showMenu(){
    setMenu(true)
  }


  return (
    <nav id='header' className='header'>
        <h2>ReactLearn</h2>

        
        <div className='menu'>
          {
            (menuOpen)? <i className='fas fa-times' onClick={() => {setMenu(false); }}></i>: 
            <i className='fas fa-bars' onClick={() => {setMenu(true); }}></i>
          }
          
        </div>
        <ul className={menuOpen? 'open': ''}>  
            <a href="#header"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#contact"><li>Contact</li></a>
            <div className='auths'>
              <li><Auth name="Sign In"/></li>
              <li><Auth name="Log In"/></li>
            </div>
        </ul>
    </nav>
  )
}
