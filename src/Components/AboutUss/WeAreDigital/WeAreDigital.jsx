import React from 'react'
import './WeAreDigital.scss'
import { Container } from 'reactstrap'
import weAredigitalImg from '../../../assets/images/AboutImgages/weAredigitalImg.png'
import dgLogo from '../../../assets/images/AboutImgages/dgLogo.png'
function WeAreDigital() {
  return (
    <div className='digital'>
      <Container>
        <main className='digital__wrapper'>
          <div data-aos-duration="1000" data-aos="fade-up-right" className='digital__wrapper__left'>
            <img src={weAredigitalImg} alt="" />
          </div>
          <div className='digital__wrapper__right'>
            <div>
              <img data-aos-duration="1000" data-aos="fade-left" className='digital__wrapper__right__logo' src={dgLogo} alt="" />
            </div>
            <h4 data-aos-duration="1000" data-aos="fade-up-left">Lorem ipsum dolor sit amet sit amet</h4>
            <p data-aos-duration="1000" data-aos="fade-up-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </main>
      </Container>
    </div>
  )
}

export default WeAreDigital