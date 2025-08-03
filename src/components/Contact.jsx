    import React from 'react'
    import '../styles/contact.css'

    export default function Contact() {
    return (
        <div id='contact'>
            <hr/>
            <div className='contact'>
                <div className="contact-form">
                    <div className="wrapper">
                        <h2>Contact Us</h2>
                        <form action="">
                            <input type="email" name="" id="" placeholder='e-mail'/>
                            <textarea name="" id="" placeholder='message...' rows={10}></textarea>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
                <img src="/contactimg.jpg" alt="" />
            </div>
        </div>
        
    )
    }
