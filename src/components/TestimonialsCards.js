import React from 'react'

const TestimonialsCards = ({ Image, Title, Subtitle, icon, Text }) => {
  return (
    <div className='card-wrapper'>
      <div className='client-image'>
        <img src={Image} />
        <div className='client-content'>
          <h3>{Title}</h3>
          <h4>{Subtitle}</h4>
          {icon}
        </div>
        <div className='client-text'>
          <p>{Text}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCards
