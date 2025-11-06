import React from 'react'
import SubBanner from '../components/SubBanner'
import Faqimage from '../assets/Faqimage.jpg'
import Footer from '../components/Footer'
import FaqsComp from '../components/FaqsComp'

const FAQs = () => {
  return (
    <div>
      <SubBanner
        title={'F.A. Questions'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Faqs'}
        image={Faqimage}
      />
      <FaqsComp />
      <Footer />
    </div>
  )
}

export default FAQs
