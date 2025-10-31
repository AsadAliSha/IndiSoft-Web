import React from 'react'
const BlogCards = ({ Image, Title, subtitle, Text, Date }) => {
  return (
    <div className='blog-cards-wrap'>
      <div className='blog-cards-image'>
        <img src={Image} />
      </div>
      <div className='blog-cards-content'>
        <p>{Title}</p>
        <a>{subtitle}</a>
        <p>{Text}</p>
        <span>{Date}</span>
      </div>
    </div>
  )
}

export default BlogCards
