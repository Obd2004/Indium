import React from 'react'
import './Homee.scss'
import Hero from './Hero/Hero'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import Build from './Build/Build'
import SayHi from './SayHi/SayHi'
import Products from './Products/Products'
function Homee() {
  return (
    <div className='homee'>
      <Hero/>
      <WhoWeAre/>
      <Build/>
      <Products/>
      <SayHi/>
    </div>
  )
}

export default Homee