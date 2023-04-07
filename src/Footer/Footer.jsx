import React, { useContext, useEffect } from 'react'
import './Footer.scss'
import Aos from 'aos'
import { Container } from 'reactstrap'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Nav } from '../Data/Data'
import { Context } from '../Context/Context'
function Footer() {
  
  const { lan } = useContext(Context)

  Aos.init()
  return (
    <div className='footer'>
      <Container>
        <footer className='footer__section'>
          <div className="footer__section__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="footer__section__list">
            {
              Nav?.map((e) => (
                <li className='list__item ' key={e.id}>
                  <Link to={e.href}>{e[`nav_${lan}`]}</Link>
                </li>
              ))
            }
          </ul>
        </footer>
      </Container>
    </div>
  )
}

export default Footer