import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <select multiple required className="component-select">
        <option value="AI Content Creation" className="">
          AI Content Creation
        </option>
        <option value="Marketing" className="">
          Marketing
        </option>
        <option value="Website Creation" className="">
          Website Creation
        </option>
        <option value="Social Media" className="">
          Social Media
        </option>
        <option value="Excel" className="">
          Excel
        </option>
        <option value="Branding" className="">
          Branding
        </option>
      </select>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
