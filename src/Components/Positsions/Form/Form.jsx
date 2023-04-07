import React from 'react'
import './Form.scss'
import { Container } from 'reactstrap'
function Form() {
  return (
    <div className='form'>
      <Container>
        <form action="#" className="form__main">
          <div className='form__main__list1'>
            <input type="text" placeholder='Full name' />
            <input type="email" placeholder='Email' />
          </div>
          <div className='form__main__list2'>
            <input className='inp1' type="text" placeholder='Phone' />
            <div>
                <i onClick={() => document.querySelector(".upload").click()} class="bi bi-upload">
                  <input
                    className='upload'
                    type="file"
                    accept='image/*'
                    hidden
                  />
                </i>
              <label 
              onClick={() => document.querySelector(".upload").click()} 
              htmlFor="#">UpLoad CV</label>
            </div>
          </div>
          <div className='form__main__list3'>
            <textarea placeholder='Cover letter' />
          </div>
          <div className='form__main__btn'>
            <button >SEND APPLICATION</button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Form