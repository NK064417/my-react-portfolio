import React from 'react'
import './Contacts.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
const Contacts = () => {

const form = useRef();

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <container className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>banyankanyiso@gmail.com</h5>
            <a href='mailto:banyankanyiso@gmail.com'>Send a messege</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>banyankanyiso@gmail.com</h5>
            <a target='_blank' href='https://api.whatsapp.com/send?phone=0644174130'>Send a messege</a>
          </article>
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>banyankanyiso@gmail.com</h5>
            <a href='mailto:banyankanyiso@gmail.com'>Send a messege</a>
          </article>
        </div>
        <form ref={form} action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </container>
    </section>
  )
}

export default Contacts