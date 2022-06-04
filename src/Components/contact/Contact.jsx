import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8fiq3kr', 'service_8fiq3kr', form.current, 'OpAaYam1sESu9F203')

     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>davidkinyanjuikt157@gmail.com</h5>
            <a href="mailto:davidkinyanjuikt157@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messeger</h4>
            <h5>Vincent Kinyanjui</h5>
            <a href='https://m.me/vincent.kinyanjui' target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+254710868961</h5>
            <a href=" https://wa.me/+254710868961" target='_blank'>Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
        </div>
      </section>
  )
}

export default Contact
