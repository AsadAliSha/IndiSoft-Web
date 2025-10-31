import React from 'react'
import SubBanner from '../components/SubBanner'
import Packageimage from '../assets/packages.jpg'
import OurPricing from '../components/OurPricing'
import Footer from '../components/Footer'
const Pricing = () => {
  return (
    <div>
      <SubBanner
        title={'Our Packages'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Our Packages'}
        image={Packageimage}
      />
      <OurPricing hideTitle={true} />
      <Footer />
    </div>
  )
}

export default Pricing
