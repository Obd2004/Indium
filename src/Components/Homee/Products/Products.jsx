import React, { useContext, useEffect } from 'react'
import './Products.scss'
import { Container } from 'reactstrap'
import productsLogo from '../../../assets/images/productsLogo.png'
import productsCard1 from '../../../assets/images/productsCard1.png'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { products } from '../../../Data/Data'
function Products() {
  const lang = ['uz', 'ru', 'en']
  const { lan, setLan } = useContext(Context)


  const handleChange = (event) => {
    setLan(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('lan', lan)
  }, [lan])

  return (
    <div className='products'>
      <Container>
        <main className="products__logo">
          <img data-aos-duration="1000" data-aos="fade-down-right" src={productsLogo} alt="" />
        </main>
        <ul className="products__cards">
          <li data-aos="fade-up" data-aos-duration="1000" className='item1'>
            <div className='card1__logo'>
              <img src={productsCard1} alt="" />
            </div>
            <h4>{products?.map((e)=> e[`title_${lan}`])}</h4>
            <p>{products?.map((e)=> e[`text_${lan}`])}</p>
            <Link to='/about#products'>Read More</Link>
          </li>
          <li className='item2'>
            <div className='card2__logo'>
              <img src={productsCard1} alt="" />
            </div>
            <h4>{products?.map((e)=> e[`title_${lan}`])}</h4>
            <p>{products?.map((e)=> e[`text_${lan}`])}</p>
            <Link to='/about'>Read More</Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="1000" className='item3'>
            <div className='card1__logo'>
              <img src={productsCard1} alt="" />
            </div>
            <h4>{products?.map((e)=> e[`title_${lan}`])}</h4>
            <p>{products?.map((e)=> e[`text_${lan}`])}</p>
            <Link to='/about'>Read More</Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Products