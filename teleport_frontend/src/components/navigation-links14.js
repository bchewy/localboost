import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links14.css'

const NavigationLinks14 = (props) => {
  return (
    <nav className={`navigation-links14-nav ${props.rootClassName} `}>
      <span className="navigation-links14-text">{props.text}</span>
      <span className="navigation-links14-text1">{props.text1}</span>
      <span className="navigation-links14-text2">{props.text2}</span>
      <span className="navigation-links14-text3">{props.text3}</span>
      <span className="navigation-links14-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks14.defaultProps = {
  text1: 'Features',
  rootClassName: '',
  text4: 'Blog',
  text: 'About',
  text3: 'Team',
  text2: 'Pricing',
}

NavigationLinks14.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks14
