import React from 'react'
import SubBanner from '../components/SubBanner'
import AboutComp from '../components/AboutComp'
import Footer from '../components/Footer'

import aboutImage from '../assets/aboutimage.jpg'

const About = () => {
  return (
    <div>
      <SubBanner
        title={'About Us'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'About Us'}
        image={aboutImage}
      />
      <AboutComp hideTitle={true} />
      <Footer />
    </div>
  )
}

export default About
