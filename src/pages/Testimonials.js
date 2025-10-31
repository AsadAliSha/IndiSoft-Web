import React from 'react'
import SubBanner from '../components/SubBanner'
import Footer from '../components/Footer'
import Testimonialimage from '../assets/testimonials.jpg'

const Testimonials = () => {
  return (
    <div>
      <SubBanner
        title={'What people say?'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Our Testimonials'}
        image={Testimonialimage}
      />
      <Footer />
    </div>
  )
}

export default Testimonials
