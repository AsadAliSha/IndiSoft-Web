import React from 'react'

const BlogsCard = ({ Image, Title, Subtitle, Text, Date }) => {
  return (
    <div className='blog-wrapper'>
      <div className='blog-image'>
        <img src={Image} />
      </div>
      <div className='blog-content'>
        <h2>{Title}</h2>
        <a href='#'>{Subtitle}</a>
        <p>{Text}</p>
        <span>{Date}</span>
      </div>
    </div>
  )
}

export default BlogsCard
