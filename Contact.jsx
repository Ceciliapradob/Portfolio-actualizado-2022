import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import './Contact.css'
import Curriculum from './cv.pdf'


const Contact = () => {
    const [input, setInput] = useState({
        user_name: "",
        user_email: "",
        user_message: ""
    });
    const [enviado, setEnviado]= useState(false)
    const [error, setError]=  useState(false)
    function HandleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    

    function sendEmail(e) {
        e.preventDefault();
        if (input.user_name && input.user_email && input.user_message) {
            emailjs
                .sendForm(
                    "service_06sbplg",
                    "template_z4s8kbw",
                    e.target,
                    "YNeCEgdNT4Pg6aoun"
                )
                .then((response) => console.log(response))
                .then((error) => console.log(error));
            setInput({
                user_name: "",
                user_email: "",
                user_message: ""
            })
            setEnviado(true)
            setTimeout( 
                function(){
                    setEnviado(false)   
                }, 4000
            ) 

        } else{
            setError(true)
            setTimeout( 
                function(){
                    setError(false)   
                }, 4000
            ) 
        }

    }


    return (
        <div>
            <div>
                <div className='contacto-titulo'>
                    <h2>Contacto</h2>
                    
                </div>
            </div>

            <div className='formulario'>
                <form className='form' onSubmit={sendEmail}>
                    
                    <input type="text"
                        onChange={HandleInput}
                        value={input.user_name} name="user_name" placeholder="Name" />
                    <input type="email"
                        onChange={HandleInput}
                        value={input.email} name="user_email" placeholder="Email" />
                    <textarea name="user_message"
                        onChange={HandleInput}
                        value={input.user_message} placeholder="Message" />
                    <button>Enviar</button>
                  

                    <span>{enviado && "Gracias por contactarme"}</span>
                    <span>{error && "Favor completa todos campos"}</span>

                </form>
            </div>

            <div className='cv'>
                <figure> <button className='curriculum'><a href={Curriculum} download>Dowland Cv</a></button></figure>
                <figure> <button className='github'><a href="#">Ir a Github</a></button></figure>
            </div>
        </div>

    );

}

export default Contact 