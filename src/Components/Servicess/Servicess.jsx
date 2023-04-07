import React from 'react'
import './Servicess.scss'
import Hero from './Hero/Hero'
import ItServices from './ItServices/ItServices'
import KnowMore from './KnowMore/KnowMore'
import Procces from './Procces/Procces'
import System from './System/System'
function Servicess() {
  return (
    <div>
        <Hero/>
        <System/>
        <ItServices/>
        <Procces/>
        <KnowMore/>
    </div>
  )
}

export default Servicess