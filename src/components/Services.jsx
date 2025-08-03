import React from 'react'
import '../styles/services.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  return (
    <div id='services' className='services'>
        <hr />
        <div className="about-services">
            <h1>Services that we offer</h1>
            <div className="actual-services">
              <p><i className='fas fa-angles-right'></i>Teaching React</p>
              <p><i className='fas fa-angles-right'></i>Hands-on Projects</p>
              <p><i className='fas fa-angles-right'></i>1-on-1 Mentorship</p>
              <p><i className='fas fa-angles-right'></i>Debugging Help</p>
              <p><i className='fas fa-angles-right'></i>Career Guidance</p>
              <p><i className='fas fa-angles-right'></i>Portfolio Building</p>
            </div>
        </div>
    </div>
  )
}
