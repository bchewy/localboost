import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links7.css'

const NavigationLinks7 = (props) => {
  return (
    <nav className={`navigation-links7-nav ${props.rootClassName} `}>
      <span className="navigation-links7-text">{props.text}</span>
      <span className="navigation-links7-text1">{props.text1}</span>
      <span className="navigation-links7-text2">{props.text2}</span>
      <span className="navigation-links7-text3">{props.text3}</span>
      <span className="navigation-links7-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks7.defaultProps = {
  rootClassName: '',
  text: 'About',
  text4: 'Blog',
  text1: 'Features',
  text2: 'Pricing',
  text3: 'Team',
}

NavigationLinks7.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks7
