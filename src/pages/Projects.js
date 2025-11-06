import React from 'react'
import SubBanner from '../components/SubBanner'
import Footer from '../components/Footer'
import CommonPage from '../assets/common-page.jpg'
// import OurPortfolioCard from '../components/OurPortfolioCard'
import OurPortfolioComp from '../components/OurPortfolioComp'

const Projects = () => {
  return (
    <div>
      <SubBanner
        title={'Projects / Portfolio'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Projects'}
        image={CommonPage}
      />
      <OurPortfolioComp Heading={false} />
      <Footer />
    </div>
  )
}

export default Projects
