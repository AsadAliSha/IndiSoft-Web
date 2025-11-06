import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Services from '../pages/Services'
import About from '../pages/About'
import Pricing from '../pages/Pricing'
import Testimonials from '../pages/Testimonials'
import Projects from '../pages/Projects'
import ProjectDetails from '../pages/ProjectDetails'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import FAQs from '../pages/FAQs'
// import PrivateWrapper from './PrivateRoutes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uncommit next line to apply token security */}
        {/* <Route element={<PrivateWrapper />}> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projectdetails' element={<ProjectDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<Navigate to='/' />} />
        {/* </Route> */}

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
