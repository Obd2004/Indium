import React, { useContext } from 'react'
import './Hero.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { hero } from '../../../Data/Data'
import { Context } from '../../../Context/Context'
import { btn } from '../../../Data/Data'

function Hero() {
    const {lan} = useContext(Context)
    Aos.init()
    return (
        <div className='hero'>
            <Container>
                        <div  data-aos="fade-down" data-aos-duration="1000" className='main'>
                            <h4>{hero?.map((e) => e[`title_${lan}`])}</h4>
                            <p>{hero?.map((e)=> e[`text_${lan}`])}</p>
                            {
                                btn?.map((e)=>(
                                    <Link key={e.id} to={e.href}>{e[`btn_${lan}`]}</Link>
                                ))
                            }
                        </div>
            </Container>
            <div className='hero__blur'></div>
        </div>
    )
}

export default Hero