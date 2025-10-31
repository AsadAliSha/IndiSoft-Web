import React from 'react'
import { Row, Col } from 'antd'
import AboutusImage from '../assets/aboutusImage.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import AboutUs from './AboutUs'

const AboutComp = (hideTitle = false) => {
  const Data = [
    {
      Text: 'TDD',
      width: '22%',
    },
    {
      Text: 'Python',
      width: '40%',
    },
    {
      Text: 'C#',
      width: '50%',
    },
    {
      Text: 'CSS3',
      width: '75%',
    },
    {
      Text: 'HTML5',
      width: '98%',
    },
    {
      Text: 'JQuery',
      width: '98%',
    },
    {
      Text: 'React',
      width: '88%',
    },
    {
      Text: 'Javascripts',
      width: '40%',
    },
    {
      Text: 'Angular Js',
      width: '70%',
    },
    {
      Text: 'Cloud Server',
      width: '98%',
    },
  ]
  return (
    <div className='about-container'>
      <div className='width90'>
        {!hideTitle && (
          <div className='about-main-heading'>
            <h2>About US</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        )}
        <Row gutter={[20, 20]}>
          <Col lg={12}>
            {Data?.map((data, i) => (
              <div key={i} style={{ marginBottom: '38px' }}>
                <AboutUs Text={data?.Text} width={data?.width} />
              </div>
            ))}
          </Col>

          <Col lg={12}>
            <div className='aboutus-wrap'>
              <img src={AboutusImage} />
            </div>
            <div className='aboutus-tag'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
              </p>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Sed quia consequuntur magni dolores eos qui ratione</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Sed quia consequuntur magni dolores eos qui ratione</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Consectetur, adipisci velit, sed quia non numquam</p>
              </div>
            </div>
            <div className='aboutus-cont'>
              <div className='aboutus-icon'>
                <FaArrowRightLong />
              </div>
              <div className='aboutus-collaspe'>
                <p>Rempora incidunt ut labore et dolore magnam aliquam</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutComp
