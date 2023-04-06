import React from 'react'
import './Sound.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
function Sound() {
  return (
    <div className='sound'>
        <Container>
          <div className='sound__main'>
            <h4>Sounds Great?! Let’s work together!</h4>
            <button><Link to='/contact'>Contact Us</Link></button>
          </div>
        </Container>
    </div>
  )
}

export default Sound