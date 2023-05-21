import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links15.css'

const NavigationLinks15 = (props) => {
  return (
    <nav className={`navigation-links15-nav ${props.rootClassName} `}>
      <span className="navigation-links15-text">{props.text}</span>
      <span className="navigation-links15-text1">{props.text1}</span>
      <span className="navigation-links15-text2">{props.text2}</span>
      <span className="navigation-links15-text3">{props.text3}</span>
      <span className="navigation-links15-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks15.defaultProps = {
  text4: 'Blog',
  rootClassName: '',
  text: 'About',
  text1: 'Features',
  text3: 'Team',
  text2: 'Pricing',
}

NavigationLinks15.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks15
