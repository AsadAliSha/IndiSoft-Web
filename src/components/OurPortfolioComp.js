import React, { useState } from 'react'
import { Button, Col, Row } from 'antd'
import OurPortfolioCard from './OurPortfolioCard'
// import Title from 'antd/es/skeleton/Title'
// import { Content } from 'antd/es/layout/layout'
// import PortfolioScreenShotsComp from '../components/PortfolioScreenShotsComp'

const OurPortfolioComp = () => {
  const [activeBtn, setActiveBtn] = useState('All')

  const clickHandler = (value) => {
    setActiveBtn(value)
  }

  const Data = [
    {
      title: 'App 1',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
    {
      title: 'Product 1',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
    {
      title: 'Branding 1',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
    {
      title: 'Books 1',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
    {
      title: 'App 2',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
    {
      title: 'Product 2',
      category: 'Web design',
      client: 'New Company',
      date: '2 February, 2022',
      url: 'www.example.com',
    },
  ]

  return (
    <div className='Portfolio-container'>
      <div className='width90 portfolio-main-wrapper'>
        <div className='Portfolio-main-heading'>
          <h1>Portfolio</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='portfolio-btn-container'>
          <div className='portfolio-btn-content'>
            <Button
              className={activeBtn === 'All' ? 'active-btn' : ''}
              onClick={() => clickHandler('All')}
            >
              <span>All</span>
            </Button>
          </div>
          <div className='portfolio-btn-content'>
            <Button
              className={activeBtn === 'App Design' ? 'active-btn' : ''}
              onClick={() => clickHandler('App Design')}
            >
              <span>App Design</span>
            </Button>
          </div>
          <div className='portfolio-btn-content'>
            <Button
              className={activeBtn === 'App Development' ? 'active-btn' : ''}
              onClick={() => clickHandler('App Development')}
            >
              <span>App Development</span>
            </Button>
          </div>
          <div className='portfolio-btn-content'>
            <Button
              className={activeBtn === 'Branding' ? 'active-btn' : ''}
              onClick={() => clickHandler('Branding')}
            >
              <span>Branding</span>
            </Button>
          </div>
          <div className='portfolio-btn-content'>
            <Button
              className={activeBtn === 'It Solutions' ? 'active-btn' : ''}
              onClick={() => clickHandler('It Solutions')}
            >
              <span>It Solutions</span>
            </Button>
          </div>
        </div>
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={8} md={8} xs={24} key={i}>
              {/* <div> */}
              <OurPortfolioCard
                title={data?.title}
                category={data?.category}
                client={data?.client}
                date={data?.date}
                url={data?.url}
              />
              {/* </div> */}
            </Col>
          ))}
          {/* <Col lg={8}>
            <OurPortfolioCard />
          </Col>
          <Col lg={8}>
            <OurPortfolioCard />
          </Col>
          <Col lg={8}>
            <OurPortfolioCard />
          </Col>
          <Col lg={8}>
            <OurPortfolioCard />
          </Col>
          <Col lg={8}>
            <OurPortfolioCard />
          </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default OurPortfolioComp
