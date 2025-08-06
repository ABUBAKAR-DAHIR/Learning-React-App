import React, { useState } from 'react'
import '../styles/contact.css'
import { sendMessage } from '../services/message'

export default function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [info, setInfo] = useState("")
    const [visible, setVisible] = useState(false)
    const [errorbg, setErrorbg] = useState(false)

    async function handleMessage(e) {
        e.preventDefault()
        try{
            if(email === "" || message === "") {
                console.log("Please fill in all inputs");
                setInfo("Please fill in all inputs")
                setVisible(true)
                setErrorbg(true)
                setTimeout(() => {
                    setVisible(false)
                    setErrorbg(false)
                }, 3000);
                return
            }
            const response = await sendMessage(email, message)
            setEmail("")
            setMessage("")
            console.log(response)
            // setInfo(response.message.charAt(0).toUpperCase()+response.message.slice(1) + ". We'll process your message and respond accordingly!")
            setInfo(response.message.charAt(0).toUpperCase()+response.message.slice(1) + ". Thank you!")
            setVisible(true)
            setErrorbg(false)
            setTimeout(() => {
                setVisible(false)
            }, 3000);
            return response.data
        }
        catch(error){
            setInfo(error.message || "Something is wrong")
            setVisible(true)
            setErrorbg(true)
            setTimeout(() => {
                setVisible(false)
                setErrorbg(false)
            }, 3000);
            console.log(error);   
        }
    }

return (
    <div id='contact' data-aos="fade-up">
        <hr/>
        <div className='contact'>
            <div className="contact-form">
                <div className="wrapper">
                    <h2>Contact Us</h2>
                    <form action="">
                        <input type="email" name="" id="" placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea name="" id="" placeholder='message...' rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <p className={`info-message ${visible ? 'visible':"hide"} ${errorbg? "error": "success"}`} >{info}</p>
                        <button onClick={(e) => handleMessage(e)}>submit</button>
                    </form>
                </div>
            </div>
            <img src="/contactimg.jpg" alt="" />
        </div>
    </div>
    
)
}
