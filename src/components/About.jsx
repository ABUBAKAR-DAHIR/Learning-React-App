import React from 'react'
import '../styles/about.css'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from 'react'


export default function About() {
    // useEffect(() => {
    // Aos.init({
    //   duration: 1000,   // animation duration in ms
    //   once: true        // animate only once while scrolling down
    // });
  // }, []);
  return (
    <div id='about' className='about' data-aos="fade-up">
        <div className="about-content">
            <div><p>ReactLearn is a platform built to help beginners and enthusiasts dive into the world of modern web development using React. Whether you're just starting out or brushing up on concepts, ReactLearn offers hands-on tutorials, real-world projects, and simplified explanations to accelerate your learning.</p></div>
            <div><p>Our goal is to make learning fun, efficient, and practical — with a focus on clarity, clean code, and community-driven growth.</p></div>
            <div><p>Made with ❤️ by a passionate developer, this project is constantly evolving — just like you. Keep learning. Keep building.</p></div>
            <div><p>From beginner-friendly concepts to advanced techniques, ReactLearn aims to be your one-stop guide to mastering React — empowering you to build stunning, scalable web apps with confidence.</p></div>     
        </div>
    </div>
  )
}
