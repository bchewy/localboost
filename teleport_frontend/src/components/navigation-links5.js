import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links5.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={`navigation-links5-nav ${props.rootClassName} `}>
      <span className="navigation-links5-text">{props.text}</span>
      <span className="navigation-links5-text1">{props.text1}</span>
      <span className="navigation-links5-text2">{props.text2}</span>
      <span className="navigation-links5-text3">{props.text3}</span>
      <span className="navigation-links5-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  text1: 'Features',
  text: 'About',
  text2: 'Pricing',
  rootClassName: '',
  text4: 'Blog',
  text3: 'Team',
}

NavigationLinks5.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks5
