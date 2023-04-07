import React from 'react'
import './WeAreTeach.scss'
import { Container } from 'reactstrap'
import weAreTeachImg from '../../../assets/images/AboutImgages/weAreTeachImg1.png'
import teachLogo from '../../../assets/images/AboutImgages/teachLogo.png'
function WeAreTeach() {
  return (
    <section id='tech' className='section'>
        <Container>
          <main className='section__main'>
            <div  className='section__main__left'>
              <img data-aos-duration="1000" data-aos="fade-right" src={teachLogo} alt="" />
              <h4 data-aos-duration="1000" data-aos="fade-up-right">Lorem ipsum dolor sit amet sit amet</h4>
              <p data-aos-duration="1000" data-aos="fade-up-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up-left" className='section__main__right'>
              <img src={weAreTeachImg} alt="" />
            </div>
          </main>
        </Container>
    </section>
  )
}

export default WeAreTeach