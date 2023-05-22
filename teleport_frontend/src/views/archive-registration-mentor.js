import React from 'react'

import { Helmet } from 'react-helmet'

import './archive-registration-mentor.css'

const ARCHIVEDRegistrationMentor = (props) => {
  return (
    <div className="archive-registration-mentor-container">
      <Helmet>
        <title>ARCHIVEDRegistration-mentor - LocalBoost</title>
        <meta
          property="og:title"
          content="ARCHIVEDRegistration-mentor - LocalBoost"
        />
      </Helmet>
      <h1>
        <span>Register as a Mentor</span>
        <br></br>
      </h1>
      <button className="archive-registration-mentor-button button">
        Student
      </button>
      <button className="archive-registration-mentor-button1 button">
        Mentor
      </button>
      <button className="archive-registration-mentor-button2 button">
        Company
      </button>
      <form className="archive-registration-mentor-form">
        <div className="archive-registration-mentor-container1">
          <div className="archive-registration-mentor-container2">
            <label className="archive-registration-mentor-text03">
              First Name
            </label>
            <label className="archive-registration-mentor-text04">
              Last Name
            </label>
            <label className="archive-registration-mentor-text05">Email</label>
            <label className="archive-registration-mentor-text06">
              Password
            </label>
            <label className="archive-registration-mentor-text07">
              <span>Confirm</span>
              <br></br>
              <span>Password</span>
            </label>
            <label className="archive-registration-mentor-text11">
              <span>Select</span>
              <br></br>
              <span>your skills</span>
            </label>
            <label className="archive-registration-mentor-text15">
              <span>Upload</span>
              <br></br>
              <span>certifications/</span>
              <br></br>
              <span>transcripts</span>
            </label>
            <label className="archive-registration-mentor-text21">
              <span>Link your</span>
              <br></br>
              <span>portfolio</span>
              <br></br>
              <span>(optional)</span>
            </label>
            <label className="archive-registration-mentor-text27">
              <span>Upload your</span>
              <br></br>
              <span>portfolio</span>
              <br></br>
              <span>(optional)</span>
            </label>
          </div>
        </div>
        <div className="archive-registration-mentor-container3">
          <div className="archive-registration-mentor-container4">
            <div className="archive-registration-mentor-container5">
              <div className="archive-registration-mentor-container6">
                <div className="archive-registration-mentor-container7">
                  <div className="archive-registration-mentor-container8">
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="archive-registration-mentor-textinput1 input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="archive-registration-mentor-textinput2 input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="archive-registration-mentor-input input"
                    />
                    <input
                      type="text"
                      placeholder="placeholder"
                      className="archive-registration-mentor-input1 input"
                    />
                  </div>
                </div>
                <select multiple className="archive-registration-mentor-select">
                  <option value="Option 1" selected>
                    Website Design
                  </option>
                  <option value="Option 2">Mobile App Design</option>
                  <option value="Option 3">Social Media Marketing</option>
                </select>
              </div>
              <textarea
                placeholder="To be change to an upload button"
                className="archive-registration-mentor-textarea textarea"
              ></textarea>
            </div>
            <input
              type="text"
              placeholder="placeholder"
              className="archive-registration-mentor-textinput3 input"
            />
          </div>
          <textarea
            placeholder="To be change to an upload button"
            className="archive-registration-mentor-textarea1 textarea"
          ></textarea>
        </div>
      </form>
      <button className="button">Submit</button>
    </div>
  )
}

export default ARCHIVEDRegistrationMentor
