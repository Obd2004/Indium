import React from 'react'
import './Hero.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function Hero() {
    Aos.init()
    return (
        <div className='hero'>
            <Container>
                <div data-aos="fade-up" className='main'>
                    <h4 >DISCOVER A WORLD OF OPPORTUNITIES</h4>
                    <p>We empower a diverse IT service-oriented workforce where strong individuals are unified by a <br /> clear common purpose – to deliver excellence and high level of customer satisfaction.</p>
                    <Link to="/services" >Get started</Link>
                </div>
            </Container>
            <div className='hero__blur'></div>
        </div>
    )
}

export default Hero