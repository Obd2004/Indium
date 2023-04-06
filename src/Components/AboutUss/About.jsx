import React from 'react'
import './About.scss'
import Hero from './Hero/Hero'
import WeAreTeach from './WeAreTeach/WeAreTeach'
import WeAreDigital from './WeAreDigital/WeAreDigital'
import Products from './Products/Products'
import Sound from './Sound/Sound'
function About() {
  return (
    <div>
      <Hero/>
      <WeAreTeach/>
      <WeAreDigital/>
      <Products/>
      <Sound/>
    </div>
  )
}

export default About