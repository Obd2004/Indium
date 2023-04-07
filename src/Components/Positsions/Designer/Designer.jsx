import React from 'react'
import './Designer.scss'
import { Container } from 'reactstrap'
import designLogo from '../../../assets/images/possitsion/designLogo.png'
function Designer() {
  return (
    <div className='designer'>
      <Container>
        <div className="designer__title">
          <img src={designLogo} alt="" />
          <p>As a UX / UI Designer, you’ll possess the creative vision that will cater to the need and requirements of our clients. Hence, you will be in charge of defining design objectives and opportunities, conducting UX and user research, building visual language, designing high-converting experiences, and work with our developers on a daily basis to ensure we are delivering creative work that sets a new standard in the field.</p>
        </div>
        <ul className='designer__list1'>
          <li className='item1'>
            <h4>What are we looking for?</h4>
          </li>
          <li className='item item2'>
            <p> Ability to develop UI mockups and prototypes</p>
          </li>
          <li className='item'>
            <p>Creating original graphic designs e.g. images, sketches and tables.</p>
          </li>
          <li className='item'>
            <p>Preparing and presenting rough drafts to internal teams and key stakeholders.</p>
          </li>
          <li className='item'>
            <p>Crafting the UX journey and proposed functionality to enable software developers to bring to life intuitively usable product features and functionality.</p>
          </li>
          <li className='item'> 
            <p>Collaborating with the technical designer, architect and software development team of each of the products to align on the implementation of new features and functionality.</p>
          </li>
          <li className='item'>
            <p>Finding creative ways to solve UX problems (e.g. usability, findability) within the constraints of existing products and their technical design.</p>
          </li>
          <li className='item1'>
            <b>The successful candidate will possess the following skills and capabilities:</b>
          </li>
        </ul>
        <ul className='designer__list2'>
          <li className='item1'>
            <b>Requirements:</b>
          </li>
          <li className='item'>
            <p>3+ years’ experience as a UI / UX designer on complex web applications, mobile experience is a plus</p>
          </li>
          <li className='item'>
            <p>English working proficiency</p>
          </li>
          <li className='item'>
            <p>Excellent verbal and written communication skills</p>
          </li>
          <li className='item'>
            <p>Excellent visual design skills</p>
          </li>
          <li className='item'>
            <p>Wireframing and UI prototyping</p>
          </li>
          <li className='item'>
            <p>Ability to communicate effectively with teams working remotely</p>
          </li>
          <li className='item'>
            <p>Creative thinker with a vision</p>
          </li>
          <li className='item'>
            <p>Attention to detail and aesthetics</p>
          </li>
          <li className='item'>
            <p>Motivation to work on a product with true purpose</p>
          </li>
          <li className='item'>
            <p>Experience with Sketch or similar tools</p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Designer