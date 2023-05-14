import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links10.css'

const NavigationLinks10 = (props) => {
  return (
    <nav className={`navigation-links10-nav ${props.rootClassName} `}>
      <span className="navigation-links10-text">{props.text}</span>
      <span className="navigation-links10-text1">{props.text1}</span>
      <span className="navigation-links10-text2">{props.text2}</span>
      <span className="navigation-links10-text3">{props.text3}</span>
      <span className="navigation-links10-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks10.defaultProps = {
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
  text1: 'Features',
  text: 'About',
  text4: 'Blog',
}

NavigationLinks10.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks10
