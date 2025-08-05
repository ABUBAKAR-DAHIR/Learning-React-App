import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'


export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])
  return (
    <Router>
    <Header/>

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
    <Footer/>
    </Router>
  )
}
