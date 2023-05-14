import React from 'react'

import PropTypes from 'prop-types'

import './button.css'

const Button = (props) => {
  return (
    <div className="button-container">
      <button className="button-button button">
        <span>{props.text}</span>
      </button>
    </div>
  )
}

Button.defaultProps = {
  text: 'Mentee',
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
