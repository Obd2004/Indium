import React from 'react'
import './Footer.scss'
import Aos from 'aos'
function Footer() {
  Aos.init()
  return (
    <div data-aos="fade-up" className='footer'>
        <h1>Footer</h1>
    </div>
  )
}

export default Footer