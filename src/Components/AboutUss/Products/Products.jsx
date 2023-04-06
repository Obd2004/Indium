import React from 'react'
import './Products.scss'
import { Container } from 'reactstrap'
import productLogo from '../../../assets/images/AboutImgages/productLogo.png'
import card1 from '../../../assets/images/AboutImgages/card1.png'
import card2 from '../../../assets/images/AboutImgages/card2.png'
import card3 from '../../../assets/images/AboutImgages/card3.png'
function Products() {
  return (
    <div id='products' className='products'>
      <Container>
        <div className='products__logo'>
          <img src={productLogo} alt="" />
        </div>
        <ul className='products__list'>
          <li className='card1'>
            <img src={card1} alt="" />
            <h5>System Integration</h5>
            <p>In today’s digital world, the ability to effectively integrate across different systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully and efficiently integrating a variety of client-based systems</p>
          </li>
          <li className='card2'>
            <img src={card2} alt="" />
            <h5>IT Services</h5>
            <p>While you focus on delivering the best products or services you can to your customers, we provide the support you need to keep up with industry demands and emerging trends</p>
          </li>
          <li className='card3'>
            <img src={card3} alt="" />
            <h5>Process Optimization</h5>
            <p>Improve efficiencies by leveraging methodology and productivity tools. Re-energize workforce management to identify saving opportunities, optimize contacts or enhance front-/back-office productive output</p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Products