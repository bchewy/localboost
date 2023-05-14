import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-In - LocalBoost</title>
        <meta property="og:title" content="Sign-In - LocalBoost" />
      </Helmet>
      <h1>
        <br></br>
        <span>Sign In</span>
        <br></br>
        <br></br>
      </h1>
      <form className="sign-in-form">
        <div className="sign-in-container1">
          <label className="sign-in-text05">Username</label>
          <label className="sign-in-text06">Password</label>
        </div>
        <div className="sign-in-container2"></div>
        <div className="sign-in-container3">
          <div className="sign-in-container4">
            <input
              type="text"
              placeholder="placeholder"
              className="sign-in-textinput input"
            />
            <input
              type="text"
              placeholder="placeholder"
              className="sign-in-textinput1 input"
            />
          </div>
          <span className="sign-in-text07">Forgot password?</span>
          <button className="sign-in-button button">Login</button>
        </div>
      </form>
      <span className="sign-in-text08">OR</span>
      <div className="sign-in-container5">
        <div className="sign-in-container6">
          <div className="sign-in-container7">
            <button className="sign-in-button1 button">Google</button>
            <button className="sign-in-button2 button">Apple</button>
          </div>
          <button className="sign-in-button3 button">Singpass</button>
        </div>
        <button className="button">Facebook</button>
      </div>
      <span className="sign-in-text09">
        <span>
          New to LocalBoost?
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sign-in-text11">Join Now</span>
      </span>
    </div>
  )
}

export default SignIn
