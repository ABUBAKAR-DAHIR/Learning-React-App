import React, { useState } from 'react'
import '../styles/header.css'
import Auth from './Auth'
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenu] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id)=>{
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior: 'smooth'})
  }

  function handleNavClick(sectionId){
    setMenu(false)

    if(location.pathname === '/'){
      scrollToSection(sectionId)
    }
    else{
      navigate('/')
      setTimeout(()=>{
        scrollToSection(sectionId)
      }, 100)
    }
  }

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
            <a href="#header" onClick={() => handleNavClick('header')}><li>Home</li></a>
            <a href="#about" onClick={() => handleNavClick('about')}><li>About</li></a>
            <a href="#services" onClick={() => handleNavClick('services')}><li>Services</li></a>
            <a href="#contact" onClick={() => handleNavClick('contact')}><li>Contact</li></a>
            <div className='auths'>
              <li><Link to='/register' className='li'onClick={() => setMenu(false)}><Auth name="Sign In"/></Link></li>
              <li><Link to='/login' className='li'onClick={() => setMenu(false)}><Auth name="Log In"/></Link></li>
            </div>
        </ul>
    </nav>
  )
}
