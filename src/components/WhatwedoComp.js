import React from 'react'
import { Row, Col } from 'antd'
import { FaPencilAlt, FaTachometerAlt, FaRecycle, FaRegHandshake } from 'react-icons/fa'
import { GrPieChart, GrTasks } from 'react-icons/gr'

import CardComp from '../components/CardComp'

const WhatwedoComp = ({ Heading = true }) => {
  const Data = [
    {
      icon: <FaPencilAlt />,
      Title: 'Project creation',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <GrPieChart />,
      Title: 'Software Development',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <GrTasks />,
      Title: 'Project Management',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaTachometerAlt />,
      Title: 'Project Impliment',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaRecycle />,
      Title: 'Software Update',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaRegHandshake />,
      Title: '24/7 Support',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]

  return (
    <div className='whatwedo-container'>
      <div className='width90'>
        {Heading && (
          <div className='whatwedo-main-heading'>
            <h2>What we do?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        )}
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={8} key={i}>
              {/* <div > */}
              <CardComp icon={data?.icon} Title={data?.Title} Text={data?.Text} />
              {/* </div> */}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default WhatwedoComp
