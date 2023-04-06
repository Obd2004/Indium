
import { useContext, useEffect, useRef } from 'react'
import './SayHi.scss'
import { Container } from 'reactstrap'
import { Context } from '../../../Context/Context'
import { sayHi } from '../../../Data/Data'
function SayHi() {
  const inp1Value = useRef()
  const inp2Value = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inp1Value.current.value == 0 || inp1Value.current.value > 14 ){
      inp1Value.current.style.border = '1px solid red'
    }if(inp2Value.current.value == 0 || inp2Value.current.value > 21){
      inp2Value.current.style.border = '1px solid red'
    }else{
      inp1Value.current.style.border = '1px solid green'
      inp2Value.current.style.border = '1px solid green'
    }
    e.target.value  = ''



  }

  const {lan} = useContext(Context)
  useEffect(() => {
    window.localStorage.setItem('lan', lan)
  }, [lan])

  return (
    <div className='sayhi'>
      <Container>
        <section className='sayhi__sec'>
          <form onSubmit={handleSubmit} className='sayhi__sec__form'>
            <div className='sayhi__sec__form__title'>
              <h3>{sayHi?.map((e)=> e[`title_${lan}`])}</h3>
              <p>{sayHi?.map((e)=> e[`text_${lan}`])}</p>
            </div>
            <main className='sayhi__sec__form__main'>
              <label htmlFor="name">My name is</label>
              <input ref={inp1Value} className='inp1' type="text"  placeholder='Full name' />
              <label htmlFor="My_email_is">My email is</label>
              <input ref={inp2Value} type="email" className='inp1'  placeholder='Email' />
              <label htmlFor="mass">Your message</label>
              <textarea placeholder='I want to say that...' />
              <div className='sayhi__sec__form__main__btn'>
                <button type='submit'>send massage</button>
              </div>
            </main>
          </form>
        </section>
      </Container>
    </div>
  )
}

export default SayHi