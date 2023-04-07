import React from 'react'
import './Form.scss'
import { Container } from 'reactstrap'
function Form() {
  return (
    <div className='contactForm'>
        <Container>
          <form className='contactForm__form' action="#">
            <div className="contactForm__form__title">
              <h4>Contact Us</h4>
              <p>For further questions, including partnership opportunities, please email hello@indium-technologies.com or contact using our contact form.</p>
            </div>
            <div className='contactForm__form__inputs'>
              <input type="text" placeholder='Full Name'/>
              <input type="text" placeholder='Email'/>
            </div>
            <div className='contactForm__form__area'>
              <textarea placeholder='I want to say that...'/>
              <button>SEND MESSAGE</button>
            </div>
          </form>
        </Container>
    </div>
  )
}

export default Form