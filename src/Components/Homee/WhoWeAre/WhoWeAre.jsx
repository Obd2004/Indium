import React from 'react'
import './WhoWeAre.scss'
import { Container } from 'reactstrap'
import WhoWeAreImg from '../../../assets/images/WhoWeAre.png'
import WhoWeImg2 from '../../../assets/images/whoWeImg2.png'
import { Link } from 'react-router-dom'
function WhoWeAre() {
    return (
        <div className='intro'>
            <Container>
                <div className="intro__wrapper">
                    <div className="intro__wrapper__left">
                        <img src={WhoWeAreImg} alt="" />
                        <h4>Technology investments as a differentiator</h4>
                        <p>No forced partnership technology here. We focus on the right <br /> solution to drive our clients’ business forward and employ a <br /> technology-agnostic approach for all needed stages of the <br /> activity cycle, allowing access to current, robust, and advanced <br /> solutions. Paramount to this is ensuring the security and <br /> compliant use of all information. In the end, it’s not just <br /> technology; we ensure our methodologies, staff, industry <br /> knowledge, and governance align with the technology to drive <br /> the right client results.</p>
                        <Link to='/services'>Get started</Link>
                    </div>
                    <div className="intro__wrapper__right">
                        <img src={WhoWeImg2} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhoWeAre