import HeaderComp from '../components/HeaderComp'
import WhatwedoComp from '../components/WhatwedoComp'
import AboutComp from '../components/AboutComp'
import OurPortfolioComp from '../components/OurPortfolioComp'
import SoftwareDevolopmentComp from '../components/SoftwareDevelopmentComp'
import TestimonialsComp from '../components/TestimonialsComp'
import OurTeam from '../components/OurTeam'
import OurPricing from '../components/OurPricing'
import Blog from '../components/Blog'
import ContactUSComp from '../components/ContactUSComp'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <HeaderComp />
      <WhatwedoComp />
      <AboutComp />
      <OurPortfolioComp />
      <SoftwareDevolopmentComp />
      <TestimonialsComp />
      <OurTeam />
      <OurPricing />
      <Blog />
      <ContactUSComp />
      <Footer />
    </div>
  )
}

export default Dashboard
