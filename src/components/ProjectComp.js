import React from 'react'
import { Button, Carousel, Col, Row } from 'antd'
import Development from '../assets/Development.jpg'
import Mobile from '../assets/Mobile.jpg'
import Branding from '../assets/branding.jpg'
import Books from '../assets/Books.jpg'
import JhoneWilsson from '../assets/JhoneWilsson.jpg'
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const ProjectComp = () => {
  //   const contentStyle = {
  //     margin: 0,
  //     height: '160px',
  //     color: '#fff',
  //     lineHeight: '160px',
  //     textAlign: 'center',
  //     background: '#364d79',
  //     Width: '100%',
  //   }
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <div className='project-container'>
      <div className='width90'>
        <div>
          <Row gutter={[20, 20]}>
            <Col lg={12}>
              <Carousel arrows dots={false} autoplay afterChange={onChange}>
                <div className='carousel-image'>
                  <img src={Development} />
                </div>
                <div className='carousel-image'>
                  <img src={Mobile} />
                </div>
                <div className='carousel-image'>
                  <img src={Branding} />
                </div>
                <div className='carousel-image'>
                  <img src={Books} />
                </div>
              </Carousel>
              <div className='carousel-wrap'>
                <div className='carousel-text'>
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore
                    commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non
                    officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                  <span>
                    Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur
                    atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia
                    veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                  </span>
                  <p>
                    Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis
                    occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt.
                    Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas
                    necessitatibus est.
                  </p>
                  <span>
                    Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae
                    et autem libero. Explicabo et quod necessitatibus similique quis dolor eum.
                    Numquam eaque praesentium rem et qui nesciunt.
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='project-info-card'>
                <div className='project-info-content'>
                  <h2>Project information</h2>
                </div>
                <div className='project-underline'></div>
                <div className='project-Category'>
                  <p>Category</p>
                  <span>Web design</span>
                  <p>Client</p>
                  <span>New Company</span>
                  <p>Project date</p>
                  <span>01 March, 2020</span>
                  <p>Project URL</p>
                  <a href='#'>www.example.com</a>
                </div>
                <div className='project-btn'>
                  <a href='#'>
                    <Button>Visit Website</Button>
                  </a>
                </div>
                <div className='project-social'>
                  <div className='social-text'>
                    {/* <FaQuoteLeft /> */}
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                      quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                      irure amet legam anim culpa.
                    </p>
                    {/* <FaQuoteRight /> */}
                  </div>
                  <div className='project-social-image'>
                    <img src={JhoneWilsson} />
                    <div className=''>
                      <h3>Jhone Wilsson</h3>
                      <h4>Graphic Designer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ProjectComp
