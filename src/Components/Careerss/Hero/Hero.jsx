import React from 'react'
import './Hero.scss'
import { Container } from 'reactstrap'
function Hero() {
    return (
        <div className='careersHero'>
            <Container>
                <div className='careersHero__main'>
                    <h4>Lorem ipsum dolor sit amet sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span className='careersHero__main__scroll_down'>
                        <a href='#team'><i className="bi bi-arrow-down"></i></a>
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default Hero