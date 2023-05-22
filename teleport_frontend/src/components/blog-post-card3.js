import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <span className="blog-post-card3-text">{props.label}</span>
        <h1 className="blog-post-card3-text1">{props.title}</h1>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text2">{props.description}</span>
          <span className="blog-post-card3-text3">Read More</span>
        </div>
        <span className="blog-post-card3-text4">{props.author}</span>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  author: 'by Jon Doe 5 hours ago',
  title: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  label: 'ENTERPRISE',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

BlogPostCard3.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard3
