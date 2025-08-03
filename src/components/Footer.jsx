    import React from 'react'
    import '../styles/footer.css'

    export default function Footer() {
    return (
        <div id='footer' className='footer'>
            <p>© {new Date().getFullYear} ReactLearn. All rights reserved</p>
            <div className='socials'>
                <a href=""><i className='fab fa-github'></i></a>
                <a href=""><i className='fab fa-linkedin'></i></a>
                <a href=""><i className='fab fa-x'></i></a>
            </div>
        </div>
    )
    }
