import { Button } from 'antd'
import React from 'react'

const OurPricingCards = ({ Title, subtitle, Text }) => {
  return (
    <div className='ourpricing-card-wrap'>
      <div className='ourpricing-card-cont'>
        <h2>{Title}</h2>
      </div>
      <div className='ourpricing-card-states'>
        <p>
          <span>{subtitle}</span>
          {Text}
        </p>
      </div>
      <div className='ourpricing-card-list'>
        <p>Free Security Service</p>
        <p>1x Security Service</p>
        <p>Unlimited Security Service</p>
        <p>1x Dashboard Access</p>
        <p>3x Job Listings</p>
      </div>
      <div className='ourpricing-card-btn'>
        <Button>BUY NOW</Button>
      </div>
    </div>
  )
}

export default OurPricingCards
