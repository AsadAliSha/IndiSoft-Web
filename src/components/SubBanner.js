import React from 'react'
import { Col, Row } from 'antd'
import Header from './Header'
const SubBanner = ({ title, text, page, image }) => {
  return (
    <div className='subbanner-container'>
      <Header />
      <div className='container'>
        <div className='width90'>
          <Row>
            <Col lg={12}>
              <div className='banner-content'>
                <h1>{title}</h1>
                <p>{text}</p>
              </div>

              <div className='banner-nav'>
                <h3>Home</h3>
                <span>/</span>
                <h4>{page}</h4>
              </div>
            </Col>
            <Col lg={12}>
              <div className='subbanner-wrap'>
                <div className='subbanner-image'>
                  <img src={image} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SubBanner
