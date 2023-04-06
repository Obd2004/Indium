import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { Container } from 'reactstrap'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import { Nav } from '../Data/Data'
function Header() {

  const lang = ['uz', 'ru', 'en']
  const { lan, setLan } = useContext(Context)


  const handleChange = (event) => {
    setLan(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('lan', lan)
  }, [lan])

  return (
    <header >
      <Container>
        <nav className='navbar'>
          <div className="navbar__logo">
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <ul className="navbar__list">
            {
              Nav?.map((e)=>(
                <li className='list__item ' key={e.id}>
                  <Link to={e.href}>{e[`nav_${lan}`]}</Link>
                </li> 
              ))
            }
            <select className='' defaultValue={lan} onChange={handleChange}>
                  {
                    lang.map((e, i) => (
                      <option key={i} value={e}>{e}</option>
                    ))
                  }
              </select>
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header