import React, { useState } from 'react'
import './SayHi.scss'
import { Container } from 'reactstrap'
function SayHi() {

  return (
    <div className='sayhi'>
      <Container>
        <section className='sayhi__sec'>
          <form className='sayhi__sec__form'>
            <div className='sayhi__sec__form__title'>
              <h3>Say Hi!</h3>
              <p>We’d like to talk with you.</p>
            </div>
            <main className='sayhi__sec__form__main'>
              <label htmlFor="name">My name is</label>
              <input type="text" required placeholder='Full name' />
              <label htmlFor="My_email_is">My email is</label>
              <input type="email" required placeholder='Email' />
              <label htmlFor="mass">Your message</label>
              <textarea placeholder='I want to say that...' />
              <div className='sayhi__sec__form__main__btn'>
                <button type='button'>send massage</button>
              </div>
            </main>
          </form>
        </section>
      </Container>
    </div>
  )
}

export default SayHi