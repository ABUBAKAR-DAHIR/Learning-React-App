import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import Contact from './Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'
import Login from './Login'
import Register from './Register'


export default function AppContent() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])
  const location = useLocation()


  const isAuthPageRendering = location.pathname === '/register' || location.pathname === '/login'

  return (
    <>
    {!isAuthPageRendering && <Header/>}
    

    {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'></Link>
        <Link to='/contact'></Link>
        <Link to="/login">Login</Link>
        <Link to="/register">register</Link>
    </nav> */}
    <Routes>
      <Route path='/' element={
        <>
          <Home/>
          <About/>
          <Services/>
          <Contact/>
        </>
      }></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    {!isAuthPageRendering && <Footer/>}
    </>
  )
}
