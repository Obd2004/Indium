import React from 'react'
import './System.scss'
import { Container } from 'reactstrap'
import systemLogo from '../../../assets/images/Services/systemLogo.png'
import rightImg from '../../../assets/images/Services/systemRight.png'
function System() {
  return (
    <section id='system' className='system'>
      <Container>
        <main  data-aos-duration="1000" data-aos="flip-left" className='system__main'>
          <div  className="system__main__left">
            <img src={systemLogo} alt="" />
            <h4>System Integration</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

          </div>
          <div className="system__main__right">
            <img src={rightImg} alt="" />
          </div>
        </main>
      </Container>
    </section>
  )
}

export default System