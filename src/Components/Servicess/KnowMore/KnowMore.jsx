import React from 'react'
import './KnowMore.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
function KnowMore() {
  return (
    <div className='know'>
        <Container>
          <div className='know__main'>
            <h4>You need to know more?! lET’S talk now!</h4>
            <button><Link to='/contact'> GET IN TOUCH</Link></button>
          </div>
        </Container>
    </div>
  )
}

export default KnowMore