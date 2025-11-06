import React from 'react'
import SubBanner from '../components/SubBanner'
import Publishimage from '../assets/Publishimage.jpg'
import Footer from '../components/Footer'
import BlogsComp from '../components/BlogsComp'

const Blogs = () => {
  return (
    <div>
      {' '}
      <SubBanner
        title={'Latest Blogs'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Blogs - News'}
        image={Publishimage}
      />
      <BlogsComp />
      <Footer />
    </div>
  )
}

export default Blogs
