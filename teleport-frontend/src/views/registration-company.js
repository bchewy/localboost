import React from 'react'

import { Helmet } from 'react-helmet'

import './registration-company.css'

const RegistrationCompany = (props) => {
  return (
    <div className="registration-company-container">
      <Helmet>
        <title>Registration-company - LocalBoost</title>
        <meta property="og:title" content="Registration-company - LocalBoost" />
      </Helmet>
      <h1>Register as a Company</h1>
      <form className="registration-company-form">
        <div className="registration-company-container01">
          <div className="registration-company-container02">
            <div className="registration-company-container03">
              <div className="registration-company-container04">
                <label className="registration-company-text01">
                  First Name
                </label>
                <label className="registration-company-text02">Last Name</label>
                <label className="registration-company-text03">Email</label>
                <label className="registration-company-text04">Password</label>
                <label className="registration-company-text05">
                  <span>Confirm</span>
                  <br></br>
                  <span>Password</span>
                </label>
                <label className="registration-company-text09">
                  What do you need?
                </label>
              </div>
            </div>
            <div className="registration-company-container05">
              <div className="registration-company-container06">
                <div className="registration-company-container07">
                  <div className="registration-company-container08">
                    <div className="registration-company-container09">
                      <div className="registration-company-container10">
                        <input
                          type="text"
                          placeholder="placeholder"
                          className="input"
                        />
                        <input
                          type="text"
                          placeholder="placeholder"
                          className="registration-company-textinput1 input"
                        />
                        <input
                          type="text"
                          placeholder="placeholder"
                          className="registration-company-textinput2 input"
                        />
                        <input
                          type="text"
                          placeholder="placeholder"
                          className="registration-company-input input"
                        />
                        <input
                          type="text"
                          placeholder="placeholder"
                          className="registration-company-input1 input"
                        />
                      </div>
                    </div>
                    <select multiple className="registration-company-select">
                      <option value="Option 1" selected>
                        Website Design
                      </option>
                      <option value="Option 2">Mobile App Design</option>
                      <option value="Option 3">Social Media Marketing</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationCompany
