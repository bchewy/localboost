import React from 'react'

import { Helmet } from 'react-helmet'

import './registration-student.css'

const RegistrationStudent = (props) => {
  return (
    <div className="registration-student-container">
      <Helmet>
        <title>Registration-student - LocalBoost</title>
        <meta property="og:title" content="Registration-student - LocalBoost" />
      </Helmet>
      <h1>
        <span>Register as a Student</span>
        <br></br>
      </h1>
      <form className="registration-student-form">
        <div className="registration-student-container1">
          <div className="registration-student-container2">
            <label className="registration-student-text03">First Name</label>
            <label className="registration-student-text04">Last Name</label>
            <label className="registration-student-text05">Email</label>
            <label className="registration-student-text06">Password</label>
            <label className="registration-student-text07">
              <span>Confirm</span>
              <br></br>
              <span>Password</span>
            </label>
            <label className="registration-student-text11">
              <span>Select</span>
              <br></br>
              <span>your skills</span>
            </label>
            <label className="registration-student-text15">
              <span>Upload</span>
              <br></br>
              <span>certifications/</span>
              <br></br>
              <span>transcripts</span>
            </label>
            <label className="registration-student-text21">
              <span>Link your</span>
              <br></br>
              <span>portfolio</span>
              <br></br>
              <span>(optional)</span>
            </label>
            <label className="registration-student-text27">
              <span>Upload your</span>
              <br></br>
              <span>portfolio</span>
              <br></br>
              <span>(optional)</span>
            </label>
          </div>
        </div>
        <div className="registration-student-container3">
          <div className="registration-student-container4">
            <div className="registration-student-container5">
              <div className="registration-student-container6">
                <div className="registration-student-container7">
                  <div className="registration-student-container8">
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="registration-student-textinput1 input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="registration-student-textinput2 input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="registration-student-input input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="registration-student-input1 input"
                    />
                  </div>
                </div>
                <select
                  multiple
                  required
                  className="registration-student-select"
                >
                  <option value="Option 1">Website Design</option>
                  <option value="Option 2">Mobile App Design</option>
                  <option value="Option 3">Social Media Marketing</option>
                </select>
              </div>
              <textarea
                placeholder="To be change to an upload button"
                className="registration-student-textarea textarea"
              ></textarea>
            </div>
            <input
              type="text"
              placeholder="placeholder"
              className="registration-student-textinput3 input"
            />
          </div>
          <textarea
            placeholder="To be change to an upload button"
            className="registration-student-textarea1 textarea"
          ></textarea>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationStudent
