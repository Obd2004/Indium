import React from 'react'
import './Team.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
function Team() {
  return (
    <div id='team' className='team'>
      <Container>
        <div className="team__main">
          <div className="team__main__title">
            <h2>join our team of <br /> professionals</h2>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
          <ul className="team__main__table">
            <li>
              <h4>UI/UX Designer</h4>
              <Link to='/opencareers'>
                <h5>More details
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </h5>
              </Link>
            </li>
            <li>
              <h4>Full-Stack Developer</h4>
              <Link to='/opencareers'>
                <h5>More details
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </h5>
              </Link>
            </li>
            <li>
              <h4>Automation QA</h4>
              <Link to='/opencareers'>
                <h5>More details
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </h5>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Team