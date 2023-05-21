import React from 'react'
import { Link } from 'react-router-dom'

import './registration-initial.css'

const RegistrationInitial = (props) => {
  return (
    <div className="registration-initial-container">
      <h1 className="registration-initial-text">I am joining as a</h1>
      <div className="registration-initial-container1">
        <div className="registration-initial-container2">
          <h1>Student</h1>
          <span className="registration-initial-text02">
            Looking to boost a business
          </span>
          <ul className="registration-initial-ul list">
            <li className="list-item">
              <span className="registration-initial-text03">
                Utilize your digital knowledge
              </span>
            </li>
            <li className="list-item">
              <span className="registration-initial-text04">
                Work on end-to-end projects with small businesses
              </span>
            </li>
            <li className="list-item">
              <span className="registration-initial-text05">
                Receive compensation
              </span>
            </li>
          </ul>
          <Link
            to="/registration-student"
            className="registration-initial-navlink button"
          >
            Join now
          </Link>
        </div>
        <div className="registration-initial-container3">
          <h1>Business</h1>
          <span className="registration-initial-text07">
            Get your business boosted
          </span>
          <ul className="registration-initial-ul1 list">
            <li className="list-item">
              <span className="registration-initial-text08">
                Create innovative digital solutions with qualified students
              </span>
            </li>
            <li className="list-item">
              <span className="registration-initial-text09">
                Fuss-free project tracking
              </span>
            </li>
            <li className="list-item">
              <span className="registration-initial-text10">
                Low-cost digital solutions
              </span>
            </li>
          </ul>
          <Link
            to="/registration-company"
            className="registration-initial-navlink1 button"
          >
            Join now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrationInitial
