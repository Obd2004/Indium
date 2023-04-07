import React from 'react'
import './Hero.scss'
import { Container } from 'reactstrap'
import Aos from 'aos'
function Hero() {
  Aos.init()
  return (
    <div className='aboutHero'>
        <Container>
          <div data-aos-duration="1000" data-aos="fade-down" className='aboutHero__main'>
            <h4>Lorem ipsum dolor sit amet sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span className='aboutHero__main__scroll_down'>
              <a href='#tech'><i className="bi bi-arrow-down"></i></a>
            </span>
          </div>
        </Container>
    </div>
  )
}

export default Hero