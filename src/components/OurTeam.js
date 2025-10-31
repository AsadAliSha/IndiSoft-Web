import React from 'react'
import { Col, Row } from 'antd'
import OurTeamCards from './OurTeamCards'
import JhoneBi from '../assets/Jhone-Bi.jpg'
import SaniAwesome from '../assets/Sani-Awesome.jpg'
import AndrioWilli from '../assets/Andrio-Willi.jpg'
import AfaJonson from '../assets/Afa-Janson.jpg'

const OurTeam = () => {
  const Data = [
    {
      image: JhoneBi,
      Title: 'Jhone Bi',
      Text: 'Application Manager',
    },
    {
      image: SaniAwesome,
      Title: 'Sani Awesome',
      Text: 'Social Media',
    },
    {
      image: AndrioWilli,
      Title: 'Andrio Willi',
      Text: 'Content Writer',
    },
    {
      image: AfaJonson,
      Title: 'Afa Jonson',
      Text: 'Business Manager',
    },
  ]
  return (
    <div className='ourteam-container'>
      <div className='width90'>
        <div className='ourteam-main-heading'>
          <h1>Our Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={6} key={i}>
              <OurTeamCards image={data?.image} Title={data?.Title} Text={data?.Text} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default OurTeam
