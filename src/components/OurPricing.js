import React from 'react'
import { Col, Row } from 'antd'
import OurPricingCards from '../components/OurPricingCards'

const OurPricing = (hideTitle = false) => {
  const Data = [
    {
      Title: 'Personal',
      subtitle: '$10/',
      Text: 'Mo',
    },
    {
      Title: 'Business',
      subtitle: '$40/',
      Text: 'Mo',
    },
    {
      Title: 'Enterprise',
      subtitle: '$77/',
      Text: 'Mo',
    },
  ]
  return (
    <div className='ourpricing-container'>
      <div className='width90'>
        {!hideTitle && (
          <div className='ourpricing-main-heading'>
            <h1>Our Pricing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        )}
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={8} key={i}>
              <OurPricingCards Title={data?.Title} subtitle={data?.subtitle} Text={data?.Text} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default OurPricing
