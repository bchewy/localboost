import React from 'react'
import { Link } from 'react-router-dom'

import GalleryCard1 from '../components/gallery-card1'
import projectStyles from '../style.css'
import styles from './listings-categorisedpostings.css'

const ListingsCategorisedpostings = (props) => {
  return (
    <div className={styles['container']}>
      <header data-thq="thq-navbar" className={styles['navbar-interactive']}>
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className={styles['logo']}
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className={styles['desktop-menu']}
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className={styles['nav']}
          ></nav>
        </div>
        <Link to="/home" className={styles['navlink']}>
          How it works
        </Link>
        <div data-thq="thq-navbar-btn-group" className={styles['btn-group']}>
          <Link
            to="/sign-in"
            className={` ${styles['login']} ${projectStyles['button']} `}
          >
            Login
          </Link>
          <Link
            to="/home"
            className={` ${styles['register']} ${projectStyles['button']} `}
          >
            Join
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className={styles['nav1']}
          >
            <div className={styles['container1']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image']}
              />
              <div data-thq="thq-close-menu" className={styles['menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className={styles['nav2']}
            >
              <span className={styles['text']}>About</span>
              <span className={styles['text1']}>Features</span>
              <span className={styles['text2']}>Pricing</span>
              <span className={styles['text3']}>Team</span>
              <span className={styles['text4']}>Blog</span>
            </nav>
            <div className={styles['container2']}>
              <button
                className={` ${styles['login1']} ${projectStyles['button']} `}
              >
                Login
              </button>
              <button className={projectStyles['button']}>Register</button>
            </div>
          </div>
          <div className={styles['icon-group']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['blog']}>
        <h1 className={styles['text5']}>Suggested Listings</h1>
        <div className={styles['container3']}>
          <div className={styles['blog-post-card']}></div>
        </div>
        <div className={styles['container4']}>
          <div className={styles['container5']}></div>
        </div>
        <div className={styles['blog1']}>
          <div className={styles['container6']}></div>
          <div className={styles['gallery']}>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                rootClassName="rootClassName"
                subtitle="Marketing"
                title="Instagram posts"
                className={styles['component']}
              ></GalleryCard1>
            </Link>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName1"
                className={styles['component1']}
              ></GalleryCard1>
            </Link>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName2"
                className={styles['component2']}
              ></GalleryCard1>
            </Link>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName3"
                className={styles['component3']}
              ></GalleryCard1>
            </Link>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName4"
                className={styles['component4']}
              ></GalleryCard1>
            </Link>
            <Link to="/listingsfull_desc">
              <GalleryCard1
                image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName5"
                className={styles['component5']}
              ></GalleryCard1>
            </Link>
          </div>
          <Link
            to="/listingsbusiness_listings"
            className={` ${styles['navlink7']} ${projectStyles['button']} `}
          >
            View Your Posted Listings
          </Link>
        </div>
        <Link
          to="/listingsnologin"
          className={` ${styles['navlink8']} ${projectStyles['button']} `}
        >
          Back To Search
        </Link>
      </div>
    </div>
  )
}

export default ListingsCategorisedpostings

// import React from 'react'
// import { Link } from 'react-router-dom'

// import { Helmet } from 'react-helmet'

// import GalleryCard1 from '../components/gallery-card1'
// import './listings-categorisedpostings.css'

// const ListingsCategorisedpostings = (props) => {
//   return (
//     <div className="listings-categorisedpostings-container">
//       <Helmet>
//         <title>Listings-categorisedpostings - LocalBoost</title>
//         <meta
//           property="og:title"
//           content="Listings-categorisedpostings - LocalBoost"
//         />
//       </Helmet>
//       <header
//         data-thq="thq-navbar"
//         className="listings-categorisedpostings-navbar-interactive"
//       >
//         <img
//           alt="logo"
//           src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
//           className="listings-categorisedpostings-logo"
//         />
//         <div
//           data-thq="thq-navbar-nav"
//           data-role="Nav"
//           className="listings-categorisedpostings-desktop-menu"
//         >
//           <nav
//             data-thq="thq-navbar-nav-links"
//             data-role="Nav"
//             className="listings-categorisedpostings-nav"
//           ></nav>
//         </div>
//         <Link to="/" className="listings-categorisedpostings-navlink">
//           How it works
//         </Link>
//         <div
//           data-thq="thq-navbar-btn-group"
//           className="listings-categorisedpostings-btn-group"
//         >
//           <Link
//             to="/sign-in"
//             className="listings-categorisedpostings-login button"
//           >
//             Login
//           </Link>
//           <Link to="/" className="listings-categorisedpostings-register button">
//             Join
//           </Link>
//         </div>
//         <div
//           data-thq="thq-burger-menu"
//           className="listings-categorisedpostings-burger-menu"
//         >
//           <svg
//             viewBox="0 0 1024 1024"
//             className="listings-categorisedpostings-icon"
//           >
//             <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
//           </svg>
//         </div>
//         <div
//           data-thq="thq-mobile-menu"
//           className="listings-categorisedpostings-mobile-menu"
//         >
//           <div
//             data-thq="thq-mobile-menu-nav"
//             data-role="Nav"
//             className="listings-categorisedpostings-nav1"
//           >
//             <div className="listings-categorisedpostings-container1">
//               <img
//                 alt="image"
//                 src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
//                 className="listings-categorisedpostings-image"
//               />
//               <div
//                 data-thq="thq-close-menu"
//                 className="listings-categorisedpostings-menu-close"
//               >
//                 <svg
//                   viewBox="0 0 1024 1024"
//                   className="listings-categorisedpostings-icon02"
//                 >
//                   <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
//                 </svg>
//               </div>
//             </div>
//             <nav
//               data-thq="thq-mobile-menu-nav-links"
//               data-role="Nav"
//               className="listings-categorisedpostings-nav2"
//             >
//               <span className="listings-categorisedpostings-text">About</span>
//               <span className="listings-categorisedpostings-text1">
//                 Features
//               </span>
//               <span className="listings-categorisedpostings-text2">
//                 Pricing
//               </span>
//               <span className="listings-categorisedpostings-text3">Team</span>
//               <span className="listings-categorisedpostings-text4">Blog</span>
//             </nav>
//             <div className="listings-categorisedpostings-container2">
//               <button className="listings-categorisedpostings-login1 button">
//                 Login
//               </button>
//               <button className="button">Register</button>
//             </div>
//           </div>
//           <div className="listings-categorisedpostings-icon-group">
//             <svg
//               viewBox="0 0 950.8571428571428 1024"
//               className="listings-categorisedpostings-icon04"
//             >
//               <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
//             </svg>
//             <svg
//               viewBox="0 0 877.7142857142857 1024"
//               className="listings-categorisedpostings-icon06"
//             >
//               <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
//             </svg>
//             <svg
//               viewBox="0 0 602.2582857142856 1024"
//               className="listings-categorisedpostings-icon08"
//             >
//               <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
//             </svg>
//           </div>
//         </div>
//       </header>
//       <div className="listings-categorisedpostings-blog">
//         <h1 className="listings-categorisedpostings-text5">
//           Suggested Listings
//         </h1>
//         <div className="listings-categorisedpostings-container3">
//           <div className="listings-categorisedpostings-blog-post-card"></div>
//         </div>
//         <div className="listings-categorisedpostings-container4">
//           <div className="listings-categorisedpostings-container5"></div>
//         </div>
//         <div className="listings-categorisedpostings-blog1">
//           <div className="listings-categorisedpostings-container6"></div>
//           <div className="listings-categorisedpostings-gallery">
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 rootClassName="rootClassName"
//                 className="listings-categorisedpostings-component"
//               ></GalleryCard1>
//             </Link>
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
//                 rootClassName="rootClassName1"
//                 className="listings-categorisedpostings-component1"
//               ></GalleryCard1>
//             </Link>
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
//                 rootClassName="rootClassName2"
//                 className="listings-categorisedpostings-component2"
//               ></GalleryCard1>
//             </Link>
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
//                 rootClassName="rootClassName3"
//                 className="listings-categorisedpostings-component3"
//               ></GalleryCard1>
//             </Link>
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
//                 rootClassName="rootClassName4"
//                 className="listings-categorisedpostings-component4"
//               ></GalleryCard1>
//             </Link>
//             <Link to="/listings-fulldesc">
//               <GalleryCard1
//                 image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
//                 rootClassName="rootClassName5"
//                 className="listings-categorisedpostings-component5"
//               ></GalleryCard1>
//             </Link>
//           </div>
//         </div>
//         <Link
//           to="/listings-no-login"
//           className="listings-categorisedpostings-navlink7 button"
//         >
//           Back To Search
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ListingsCategorisedpostings




