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


export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}
