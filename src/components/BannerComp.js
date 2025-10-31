import { Button, Col, Row, Modal } from 'antd'
import React, { useState } from 'react'
import Clientimage from '../assets/client-image.png'
import { IoPlay } from 'react-icons/io5'

const BannerComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  //   const handleOk = () => {
  //     setIsModalOpen(false)
  //   }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div className='banner-container'>
      {/* <div className='width90'> */}
      <Row>
        <Col lg={12} md={8}>
          <div className=''>
            <div className='banner-content'>
              <h2>Software</h2>
              <h3>Development</h3>
              <p>
                Our business is helping you grow your business. We offer Best Web & Applications
                Solutions, Project Management, Software Update, Google Cloud, SEO optmization,
                Social Media Services...
              </p>
            </div>
          </div>
          <Col lg={12} md={8}>
            <div className='banner-wrapper'>
              <div className='banner-button'>
                <Button>
                  <span>Get Started</span>
                </Button>
              </div>
              <div className='button-modal'>
                <>
                  <Button type='transparent' onClick={showModal}>
                    <div className='banner-wrap'>
                      <div className='banner-btn-icon'>
                        <IoPlay />
                      </div>
                      <span>Watch Video</span>
                    </div>
                  </Button>
                  <Modal
                    //   title='Basic Modal'
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    //   onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    {/* <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p> */}
                    <iframe
                      width='705'
                      height='510'
                      src='https://www.youtube.com/embed/ZV16ev0n9J8?si=NuRX7EauLuxp-M7_'
                      title='YouTube video player'
                      // frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      // referrerpolicy='strict-origin-when-cross-origin'
                      allowfullscreen
                    ></iframe>
                  </Modal>
                </>
              </div>
            </div>
          </Col>
        </Col>
        <Col lg={12} md={8}>
          <div className='banner-image'>
            <img src={Clientimage} />
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  )
}

export default BannerComp
