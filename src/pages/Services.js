import React from 'react'
import SubBanner from '../components/SubBanner'
import WhatwedoComp from '../components/WhatwedoComp'
import Footer from '../components/Footer'
import Servicesimage from '../assets/services.jpg'
// import Header from '../components/Header'
const Services = () => {
  return (
    <div>
      {/* <Header /> */}

      <SubBanner
        title={'Services'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Our Services'}
        image={Servicesimage}
      />
      <WhatwedoComp Heading={false} />
      <Footer />
    </div>
  )
}

export default Services
