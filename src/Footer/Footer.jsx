import React from 'react'
import './Footer.scss'
import Aos from 'aos'
import { Container } from 'reactstrap'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  Aos.init()
  return (
    <div className='footer'>
      <Container>
        <footer className='footer__section'>
          <div className="footer__section__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="footer__section__list">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/careers'>Careers</Link>
            </li>
            <li className='footer__section__list__item7'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  )
}

export default Footer