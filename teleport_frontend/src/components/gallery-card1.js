import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_alt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  title: 'Project Title',
}

GalleryCard1.propTypes = {
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard1
