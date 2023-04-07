import React from 'react'
import './ItServices.scss'
import leftImg from '../../../assets/images/Services/ItServicesLeft.png'
import logo from '../../../assets/images/Services/ItServicesLogo.png'
import { Container } from 'reactstrap'
function ItServices() {
  return (
    <section className='servicesIt'>
      <Container>
        <main className='servicesIt__main'>
          <div className="servicesIt__main__left">
            <img src={leftImg} alt="" />
          </div>
          <div className="servicesIt__main__right">
            <img src={logo} alt="" />
            <h4>IT Services</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </main>
      </Container>
    </section>
  )
}

export default ItServices