import React from 'react'
import './ContactUss.scss'
import Form from './Form/Form'
import contactBg from '../../assets/images/Contact/contactBg.png'
function ContactUss() {
  return (
    <div className='contactUs'>
      <img className='contactUs__bg' src={contactBg} alt="" />
        <Form/>
    </div>
  )
}

export default ContactUss