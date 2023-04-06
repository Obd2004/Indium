import React, { useContext, useEffect } from 'react'
import './WhoWeAre.scss'
import { Container } from 'reactstrap'
import WhoWeAreImg from '../../../assets/images/WhoWeAre.png'
import WhoWeImg2 from '../../../assets/images/whoWeImg2.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { Context } from '../../../Context/Context'
import { btn, whoWeAre } from '../../../Data/Data'
function WhoWeAre() {


    const { lan } = useContext(Context)


    Aos.init()
    return (
        <div className='intro'>
            <Container>
                <div className="intro__wrapper">
                    <div data-aos="fade-down" className="intro__wrapper__left">
                        <img src={WhoWeAreImg} alt="" />
                        <h4>{whoWeAre?.map((e) => e[`title_${lan}`])}</h4>
                        <p>{whoWeAre?.map((e) => e[`text_${lan}`])}</p>
                        {
                            btn?.map((e) => (
                                <Link key={e.id} to={e.href}>{e[`btn_${lan}`]}</Link>
                            ))
                        }
                    </div>
                    <div data-aos="fade-up" className="intro__wrapper__right">
                        <img src={WhoWeImg2} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhoWeAre