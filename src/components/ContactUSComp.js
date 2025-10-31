import React from 'react'
import { Button, Col, Input, Row } from 'antd'
// import TextArea from 'antd/es/input/TextArea'

const ContactUSComp = () => {
  return (
    <div className='ourcontact-container'>
      <div className='width90'>
        <div className='ourcontact-main-heading'>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Row gutter={[20, 20]}>
          <Col lg={12}>
            <div className='ourcontact-input-wrap'>
              <div className='ourcontact-input'>
                <Input placeholder='Name*' className='placename' />
                <Input placeholder='Eamil*' className='placename' />
              </div>
            </div>
            <div className='oucontact-subject-input'>
              <Input placeholder='Subjects' className='placename' />
            </div>
            <div className='message-input'>
              <textarea className='text-area' placeholder='Write Your Message*' rows={9} />
            </div>
            <div className='input-btn'>
              <Button>Send Message</Button>
            </div>
          </Col>
          <Col lg={12}>
            <div className='ourcontact-information'>
              <div className='contact-information-box'>
                <h3>Address:</h3>
                <p>11 West Town</p>
                <p>PBo 12345, United States</p>
              </div>
              <div className='contact-information-box'>
                <h3>Phone:</h3>
                <p>+1 1234 56 789</p>
                <p>+1 1234 56 780</p>
              </div>
              <div className='contact-information-box'>
                <h3>Email:</h3>
                <p>info@example.com</p>
                <p>email@example.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContactUSComp
