import React from 'react'
import './Procces.scss'
import { Container } from 'reactstrap'
import proccesLogo from '../../../assets/images/Services/proccesLogo.png'
import proccesRight from '../../../assets/images/Services/proccesRight.png'
function Procces() {
  return (
    <section className='procces'>
      <Container>
        <main className='procces__main'>
          <div className="procces__main__left">
            <img src={proccesLogo} alt="" />
            <h4>Process Optimization</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

          </div>
          <div className="procces__main__right">
            <img src={proccesRight} alt="" />
          </div>
        </main>
      </Container>
    </section>
  )
}

export default Procces