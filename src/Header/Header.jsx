import React from 'react'
import './Header.scss'
import { Container } from 'reactstrap'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <Container>
        <nav className='navbar'>
          <div className="navbar__logo">
            <Link  to='/'><img src={logo} alt="" /></Link>
          </div>
          <ul className="navbar__list">
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
            <li className='navbar__list__item7'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header