import React from 'react'
import './Build.scss'
import { Container } from 'reactstrap'
import buildRight from '../../../assets/images/buildRight.png'
import buildLogo from '../../../assets/images/buildLogo.png'
import buildImg1 from '../../../assets/images/buildImg1.png'
import buildImg2 from '../../../assets/images/buildImg2.png'
function Build() {
  return (
    <section className='build'>
        <Container>
            <main className="build__main">
                <div className="build__main__left">
                    <img src={buildRight} alt="" />
                </div>
                <div className="build__main__right">
                    <div className="build__main__right__logo">
                        <img src={buildLogo} alt="" />
                    </div>
                    <main className='build__main__right__main'>
                        <div className="build__main__right__main__images">
                            <img src={buildImg1} alt="" />
                            <img src={buildImg2} alt="" />
                        </div>
                        <div className="build__main__right__main__rightt">
                            <div>
                                <h4>Our Mission & Vision </h4>
                                <p>As experienced professionals in the field of  <br /> software development, user experience, and <br /> marketing performance, we are aware of the hard <br /> work, dedication, and overall diligence required to <br /> prosper in modern-day business.</p>
                            </div>
                            <div>
                                <h4> Our Approach </h4>
                                <p>As a result, we offer our clients with the <br /> development of CRM cloud systems, bespoke <br /> website development and design, project and R&D <br /> management, custom development, and system <br /> integration.</p>
                            </div>
                        </div>
                    </main>
                </div> 
            </main>
        </Container>
    </section>  
  )
}

export default Build