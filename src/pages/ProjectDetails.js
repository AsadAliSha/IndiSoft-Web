import React from 'react'
import SubBanner from '../components/SubBanner'
import Footer from '../components/Footer'
import CommonPage from '../assets/common-page.jpg'
import ProjectsComp from '../components/ProjectComp'

const ProjectDetails = () => {
  return (
    <div>
      <SubBanner
        title={'Project Details'}
        text={
          'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        page={'Projects Details'}
        image={CommonPage}
      />
      <ProjectsComp />
      <Footer />
    </div>
  )
}

export default ProjectDetails
