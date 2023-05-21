import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links6.css'

const NavigationLinks6 = (props) => {
  return (
    <nav className={`navigation-links6-nav ${props.rootClassName} `}>
      <span className="navigation-links6-text">{props.text}</span>
      <span className="navigation-links6-text1">{props.text1}</span>
      <span className="navigation-links6-text2">{props.text2}</span>
      <span className="navigation-links6-text3">{props.text3}</span>
      <span className="navigation-links6-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks6.defaultProps = {
  text4: 'Blog',
  text3: 'Team',
  text2: 'Pricing',
  text: 'About',
  rootClassName: '',
  text1: 'Features',
}

NavigationLinks6.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks6
