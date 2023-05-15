import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './gp-chat-sample-interaction.css'

const GPTChatSampleInteraction = (props) => {
  return (
    <div className="gp-chat-sample-interaction-container">
      <Helmet>
        <title>GPTChat-sample-interaction - LocalBoost</title>
        <meta
          property="og:title"
          content="GPTChat-sample-interaction - LocalBoost"
        />
      </Helmet>
      <header data-role="Header" className="gp-chat-sample-interaction-header">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="gp-chat-sample-interaction-image"
        />
        <div className="gp-chat-sample-interaction-nav">
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        </div>
        <div className="gp-chat-sample-interaction-btn-group">
          <button className="gp-chat-sample-interaction-login button">
            Login
          </button>
          <button className="button">Register</button>
        </div>
        <div
          data-role="BurgerMenu"
          className="gp-chat-sample-interaction-burger-menu"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="gp-chat-sample-interaction-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="MobileMenu"
          className="gp-chat-sample-interaction-mobile-menu"
        >
          <div className="gp-chat-sample-interaction-nav1">
            <div className="gp-chat-sample-interaction-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="gp-chat-sample-interaction-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="gp-chat-sample-interaction-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="gp-chat-sample-interaction-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="gp-chat-sample-interaction-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="gp-chat-sample-interaction-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="gp-chat-sample-interaction-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>


    {/* Header section */}

      <h1>Chat with our AI</h1>
      <span>
        Talk to the AI about your problem, and help find realistic, suitable
        solutions.
      </span>
    {/* End Header  */}
    {/* Begin Chat Logs*/}

      <div className="gp-chat-sample-interaction-container2">
        {/* User's first chat message */}
        <div className="gp-chat-sample-interaction-row-container">
          <svg
            viewBox="0 0 731.4285714285713 1024"
            className="gp-chat-sample-interaction-icon10"
          >
            <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
          </svg>
          <h3>You</h3>
          <span className="gp-chat-sample-interaction-text03">
            I&apos;m a small business owner running my own e-commerce website
            selling shirts, and street wear, I want to bring on someone to help
            me create a simple website that is breath-taking, and looks sleek.
            How do i begin?
          </span>
        </div>

        <div className="gp-chat-sample-interaction-row-container1">
          <span className="gp-chat-sample-interaction-text04">
            <span>
              To create a breath-taking, sleek e-commerce website, first define
              your goals for the site. Hire a web designer with e-commerce
              experience and clearly communicate your vision and brand
              aesthetics. Decide on a platform like
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="gp-chat-sample-interaction-text06">
              WordPress or Shopify
            </span>
            <span>
              , and plan your site structure with a focus on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="gp-chat-sample-interaction-text08">
              user experience (UX)
            </span>
            <span>
              {' '}
              and search engine
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="gp-chat-sample-interaction-text10">
              optimization (SEO
            </span>
            <span>
              ). Once a prototype is built, review and revise as needed,
              thoroughly test the website on various devices and browsers, and
              then launch and promote your new site on your marketing channels.
              Remember, ongoing updates and improvements are key to keeping your
              website current and engaging.
            </span>
            <br></br>
            <br></br>
            <span>Need help by a credible, LocalBoost student?</span>
            <br></br>
          </span>
          <h3 className="gp-chat-sample-interaction-text16">LocalBoostAI</h3>
        </div>
        {/* Populate students field */}
        <div className="gp-chat-sample-interaction-row-container2">
          <div className="gp-chat-sample-interaction-container3">
            <h1>Jack Jones</h1>
            <span>
              <span>Student at NP</span>
              <br></br>
              <span>Year 3</span>
              <br></br>
              <span>Information Technology Student</span>
              <br></br>
            </span>
            <button className="button">Portfolio</button>
          </div>
          <div className="gp-chat-sample-interaction-container4">
            <h1>Tay Tan</h1>
            <span>
              <span>Student at NUS</span>
              <br></br>
              <span>Year 1</span>
              <br></br>
              <span>Business Student</span>
              <br></br>
            </span>
            <button className="button">Portfolio</button>
          </div>
          <div className="gp-chat-sample-interaction-container5">
            <h1>Kim Kaol</h1>
            <span>
              <span>Student at SMU</span>
              <br></br>
              <span>Year 2</span>
              <br></br>
              <span>Information Systems Student</span>
              <br></br>
            </span>
            <button className="button">Portfolio</button>
          </div>
        </div>
      </div>

      {/* Form Section Chat input  */}
      <div className="gp-chat-sample-interaction-container6">
        <input
          type="text"
          required
          autoFocus
          placeholder="Type your message here"
          className="gp-chat-sample-interaction-textinput textarea input"
        />
        <button className="gp-chat-sample-interaction-button3 button">
          Send
        </button>
      </div>
    </div>
  )
}

export default GPTChatSampleInteraction
