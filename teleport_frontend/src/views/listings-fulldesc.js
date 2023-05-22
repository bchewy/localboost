import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './listings-fulldesc.css'

const ListingsFulldesc = (props) => {
  return (
    <div className="listings-fulldesc-container">
      <Helmet>
        <title>Listings-fulldesc - LocalBoost</title>
        <meta property="og:title" content="Listings-fulldesc - LocalBoost" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="listings-fulldesc-navbar-interactive"
      >
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="listings-fulldesc-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="listings-fulldesc-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="listings-fulldesc-nav"
          ></nav>
        </div>
        <Link to="/" className="listings-fulldesc-navlink">
          How it works
        </Link>
        <div
          data-thq="thq-navbar-btn-group"
          className="listings-fulldesc-btn-group"
        >
          <Link to="/sign-in" className="listings-fulldesc-login button">
            Login
          </Link>
          <Link
            to="/registration-student"
            className="listings-fulldesc-register button"
          >
            Join
          </Link>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="listings-fulldesc-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="listings-fulldesc-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="listings-fulldesc-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="listings-fulldesc-nav1"
          >
            <div className="listings-fulldesc-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="listings-fulldesc-image"
              />
              <div
                data-thq="thq-close-menu"
                className="listings-fulldesc-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="listings-fulldesc-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="listings-fulldesc-nav2"
            >
              <span className="listings-fulldesc-text">About</span>
              <span className="listings-fulldesc-text01">Features</span>
              <span className="listings-fulldesc-text02">Pricing</span>
              <span className="listings-fulldesc-text03">Team</span>
              <span className="listings-fulldesc-text04">Blog</span>
            </nav>
            <div className="listings-fulldesc-container2">
              <button className="listings-fulldesc-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="listings-fulldesc-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="listings-fulldesc-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="listings-fulldesc-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="listings-fulldesc-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="listings-fulldesc-container3">
        <input
          type="text"
          placeholder="Search Job..."
          className="listings-fulldesc-textinput input"
        />
        <Link
          to="/listings-categorisedpostings"
          className="listings-fulldesc-navlink1 button"
        >
          Search!
        </Link>
      </div>
      <div className="listings-fulldesc-blog">
        <h1 className="listings-fulldesc-text05">Description</h1>
        <div className="listings-fulldesc-blog-post-card">
          <img
            src="https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fG1hcmtldGluZ3xlbnwwfHx8fDE2ODM4NzM1NjN8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
            loading="eager"
            className="listings-fulldesc-image1"
          />
          <div className="listings-fulldesc-container4">
            <span className="listings-fulldesc-text06">
              <span>MARKETING</span>
              <br></br>
            </span>
            <span className="listings-fulldesc-text09">
              <span>
                Help to increase views on Instagram account and increase sales
              </span>
              <br></br>
              <br></br>
              <span>Category / Skills: ......</span>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <div className="listings-fulldesc-container5">
              <div className="listings-fulldesc-profile">
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;w=200"
                  image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                  className="listings-fulldesc-image2"
                />
                <span className="listings-fulldesc-text17">Jon Doe</span>
              </div>
              <span className="listings-fulldesc-text18">5 min read</span>
            </div>
          </div>
          <Link
            to="/listings-studentsaved"
            className="listings-fulldesc-navlink2 button"
          >
            Save
          </Link>
        </div>
        <div className="listings-fulldesc-container6">
          <div className="listings-fulldesc-blog-post-card1"></div>
        </div>
        <Link
          to="/listings-student"
          className="listings-fulldesc-register2 button"
        >
          Back
        </Link>
        <div className="listings-fulldesc-container7">
          <div className="listings-fulldesc-container8"></div>
        </div>
        <Link
          to="/project-dashboard-student"
          className="listings-fulldesc-navlink3 button"
        >
          Apply
        </Link>
      </div>
    </div>
  )
}

export default ListingsFulldesc
