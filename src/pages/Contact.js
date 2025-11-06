import React from 'react'
import SubBanner from '../components/SubBanner'
import Contactimage from '../assets/contact.jpg'
import Footer from '../components/Footer'
import ContactUSComp from '../components/ContactUSComp'
import GoogleMap from '../components/GoogleMap'

const Contact = () => {
  return (
    <div>
      <SubBanner
        title={'Contact 24/7'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Contact'}
        image={Contactimage}
      />
      <ContactUSComp Heading={false} />
      <GoogleMap />
      <Footer />
    </div>
  )
}

export default Contact
