import React from 'react'

import PropTypes from 'prop-types'

import './feature-card11.css'

const FeatureCard11 = (props) => {
  return (
    <div className={`feature-card11-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card11-text">{props.title}</h2>
      <span>{props.studentdesc}</span>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card11-image"
      />
    </div>
  )
}

FeatureCard11.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  studentdesc: '<student description & relevant skills>',
  rootClassName: '',
  title: 'student 1',
}

FeatureCard11.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  studentdesc: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard11
