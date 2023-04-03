import React from 'react'
import './Products.scss'
import { Container } from 'reactstrap'
import productsLogo from '../../../assets/images/productsLogo.png'
import productsCard1 from '../../../assets/images/productsCard1.png'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div className='products'>
        <Container>
            <main className="products__logo">
                <img src={productsLogo} alt="" />
            </main>
            <ul className="products__cards">
                <li className='item1'>
                    <div className='card1__logo'>
                      <img src={productsCard1} alt="" />
                    </div>
                    <h4>System Integration</h4>
                    <p>In today’s digital world, the ability to effectively <br /> integrate across different systems, data sources, <br /> and channels is fundamental. Indium <br /> technologies has a long history of successfully <br /> and efficiently integrating a variety of <br /> client-based systems</p>
                    <Link to='services'>Read More</Link>
                </li>
                <li className='item2'>
                    <div className='card2__logo'>
                      <img src={productsCard1} alt="" />
                    </div>
                    <h4>System Integration</h4>
                    <p>In today’s digital world, the ability to effectively <br /> integrate across different systems, data sources, <br /> and channels is fundamental. Indium <br /> technologies has a long history of successfully <br /> and efficiently integrating a variety of <br /> client-based systems</p>
                    <Link to='services'>Read More</Link>
                </li>
                <li className='item3'>
                    <div className='card1__logo'>
                      <img src={productsCard1} alt="" />
                    </div>
                    <h4>System Integration</h4>
                    <p>In today’s digital world, the ability to effectively <br /> integrate across different systems, data sources, <br /> and channels is fundamental. Indium <br /> technologies has a long history of successfully <br /> and efficiently integrating a variety of <br /> client-based systems</p>
                    <Link to='services'>Read More</Link>
                </li>
            </ul>
        </Container>
    </div>
  )
}

export default Products