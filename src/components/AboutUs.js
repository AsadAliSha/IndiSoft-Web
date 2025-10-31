import React from 'react'

const AboutUs = ({ width, Text }) => {
  return (
    <div>
      <div className='about-col'>
        <div className='about-content'>
          <h3 style={{ width: width }}>{Text}</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
