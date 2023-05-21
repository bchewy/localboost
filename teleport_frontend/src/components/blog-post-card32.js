import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card32.css'

const BlogPostCard32 = (props) => {
  return (
    <div className={`blog-post-card32-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card32-image"
      />
      <div className="blog-post-card32-container">
        <span className="blog-post-card32-text">{props.label}</span>
        <h1 className="blog-post-card32-text1">{props.title}</h1>
        <div className="blog-post-card32-container1">
          <span className="blog-post-card32-text2">{props.description}</span>
          <span className="blog-post-card32-text3">Read More</span>
        </div>
        <span className="blog-post-card32-text4">{props.author}</span>
      </div>
    </div>
  )
}

BlogPostCard32.defaultProps = {
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  label: 'ENTERPRISE',
  image_alt: 'image',
  author: 'by Jon Doe 5 hours ago',
}

BlogPostCard32.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard32
