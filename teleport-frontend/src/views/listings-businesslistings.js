import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard4 from '../components/blog-post-card4'
import './listings-businesslistings.css'

const ListingsBusinesslistings = (props) => {
  return (
    <div className="listings-businesslistings-container">
      <Helmet>
        <title>Listings-businesslistings - LocalBoost</title>
        <meta
          property="og:title"
          content="Listings-businesslistings - LocalBoost"
        />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="listings-businesslistings-navbar-interactive"
      >
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="listings-businesslistings-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="listings-businesslistings-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="listings-businesslistings-nav"
          ></nav>
        </div>
        <Link to="/" className="listings-businesslistings-navlink">
          How it works
        </Link>
        <div
          data-thq="thq-navbar-btn-group"
          className="listings-businesslistings-btn-group"
        >
          <Link
            to="/sign-in"
            className="listings-businesslistings-login button"
          >
            Login
          </Link>
          <Link
            to="/registration-company"
            className="listings-businesslistings-register button"
          >
            Join
          </Link>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="listings-businesslistings-burger-menu"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="listings-businesslistings-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="listings-businesslistings-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="listings-businesslistings-nav1"
          >
            <div className="listings-businesslistings-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="listings-businesslistings-image"
              />
              <div
                data-thq="thq-close-menu"
                className="listings-businesslistings-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="listings-businesslistings-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="listings-businesslistings-nav2"
            >
              <span className="listings-businesslistings-text">About</span>
              <span className="listings-businesslistings-text1">Features</span>
              <span className="listings-businesslistings-text2">Pricing</span>
              <span className="listings-businesslistings-text3">Team</span>
              <span className="listings-businesslistings-text4">Blog</span>
            </nav>
            <div className="listings-businesslistings-container2">
              <button className="listings-businesslistings-login1 button">
                Login
              </button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="listings-businesslistings-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="listings-businesslistings-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="listings-businesslistings-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="listings-businesslistings-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="listings-businesslistings-blog">
        <Link
          to="/listings-createbusinesslisting"
          className="listings-businesslistings-navlink1 button"
        >
          Post something!
        </Link>
        <h1 className="listings-businesslistings-text5">Your Listings</h1>
        <div className="listings-businesslistings-container3"></div>
        <div className="listings-businesslistings-container4">
          <div className="listings-businesslistings-container5"></div>
        </div>
        <div className="listings-businesslistings-blog1">
          <Link
            to="/project-dashboard-biz"
            className="listings-businesslistings-navlink2"
          >
            <BlogPostCard4
              date="JUNE 15"
              label="Excel"
              image_src="https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxleGNlbHxlbnwwfHx8fDE2ODM3MjE4MDk&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="How to use excel to stock take"
              rootClassName="rootClassName1"
              className="listings-businesslistings-component"
            ></BlogPostCard4>
          </Link>
          <div className="listings-businesslistings-container6">
            <Link
              to="/project-dashboard-biz"
              className="listings-businesslistings-navlink3"
            >
              <BlogPostCard4
                date="JUNE 13"
                label="Website Creation"
                image_src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxvbmxpbmUlMjB3ZWJzaXRlfGVufDB8fHx8MTY4MzcyMTcxMA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Online website design "
                rootClassName="rootClassName2"
                className="listings-businesslistings-component1"
              ></BlogPostCard4>
            </Link>
            <Link
              to="/project-dashboard-biz"
              className="listings-businesslistings-navlink4"
            >
              <BlogPostCard4
                label="Social Media"
                image_src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxpbmNyZWFzZXxlbnwwfHx8fDE2ODM3MjE3NzY&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="How to increase views"
                rootClassName="rootClassName3"
                className="listings-businesslistings-component2"
              ></BlogPostCard4>
            </Link>
          </div>
          <Link
            to="/project-dashboard-biz"
            className="listings-businesslistings-navlink5"
          >
            <BlogPostCard4
              date="JULY 10"
              label="Digitalisation"
              image_src="https://images.unsplash.com/photo-1524237492620-14fcdd03ce16?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDk4fHxvbmxpbmUlMjBtZW51fGVufDB8fHx8MTY4MzcyMTc1OQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Creating online menu"
              rootClassName="rootClassName4"
              className="listings-businesslistings-component3"
            ></BlogPostCard4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListingsBusinesslistings
