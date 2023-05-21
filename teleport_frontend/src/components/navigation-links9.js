import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links9.css'

const NavigationLinks9 = (props) => {
  return (
    <nav className={`navigation-links9-nav ${props.rootClassName} `}>
      <span className="navigation-links9-text">{props.text}</span>
      <span className="navigation-links9-text1">{props.text1}</span>
      <span className="navigation-links9-text2">{props.text2}</span>
      <span className="navigation-links9-text3">{props.text3}</span>
      <span className="navigation-links9-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks9.defaultProps = {
  text: 'About',
  text1: 'Features',
  text3: 'Team',
  text4: 'Blog',
  rootClassName: '',
  text2: 'Pricing',
}

NavigationLinks9.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks9
