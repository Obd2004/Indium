import React, { useContext, useEffect } from 'react'
import './Build.scss'
import { Container } from 'reactstrap'
import buildRight from '../../../assets/images/buildRight.png'
import buildLogo from '../../../assets/images/buildLogo.png'
import buildImg1 from '../../../assets/images/buildImg1.png'
import buildImg2 from '../../../assets/images/buildImg2.png'
import { build } from '../../../Data/Data'
import { Context } from '../../../Context/Context'
function Build() {
    const lang = ['uz', 'ru', 'en']
    const { lan, setLan } = useContext(Context)
  
  
    const handleChange = (event) => {
      setLan(event.target.value);
    };
  
    useEffect(() => {
      window.localStorage.setItem('lan', lan)
    }, [lan])

  return (
    <section className='build'>
        <Container>
            <main className="build__main">
                <div data-aos="fade-up-right" className="build__main__left">
                    <img src={buildRight} alt="" />
                </div>
                <div data-aos="fade-up-left" className="build__main__right">
                    <div className="build__main__right__logo">
                        <img  src={buildLogo} alt="" />
                    </div>
                    <main className='build__main__right__main'>
                        <div className="build__main__right__main__images">
                            <img src={buildImg1} alt="" />
                            <img src={buildImg2} alt="" />
                        </div>
                        <div className="build__main__right__main__rightt">
                            <div>
                                <h4>{build?.map((e)=> e[`title1_${lan}`])}</h4>
                                <p>{build?.map((e)=> e[`text1_${lan}`])}</p>
                            </div>
                            <div>
                                <h4> {build?.map((e)=> e[`title2_${lan}`])} </h4>
                                <p>{build?.map((e)=> e[`text2_${lan}`])}</p>
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