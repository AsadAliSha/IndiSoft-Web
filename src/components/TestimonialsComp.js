import React from 'react'
import TestimonialsCardsComp from './TestimonialsCards'
import JhoneDoe from '../assets/Jhone-Doe.jpg'
import AfaRose from '../assets/Afa-Rose.jpg'
import KeenaLara from '../assets/Keena-Lara.jpg'
import FizziBrandon from '../assets/Fizzi-Brandon.jpg'
// import { FaStar } from 'react-icons/fa6'

import { Carousel, Rate } from 'antd'
const TestimonialsComp = (hideTitle = false) => {
  const Data = [
    {
      Image: JhoneDoe,
      Title: 'Jhone Doe',
      Subtitle: 'CFO',
      Icon: <Rate />,
      Text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quemveniam duis minim tempor labore quem eram duis noster aute amet eram fore quisminim.',
    },
    {
      Image: AfaRose,
      Title: 'Afa Rose',
      Subtitle: 'Web Designer',
      Icon: <Rate />,
      Text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malisquorum velit fore eram velit sunt aliqua noster fugiat irure amet',
    },
    {
      Image: KeenaLara,
      Title: 'Keena Lara',
      Subtitle: 'Store Owner',
      Icon: <Rate />,
      Text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minimtempor labore quem eram duis noster aute amet eram fore quis minim.',
    },
    {
      Image: FizziBrandon,
      Title: 'Fizzi Brandon',
      Subtitle: 'Freelancer',
      Icon: <Rate />,
      Text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velitminim dolor enim duis veniam ipsum anim magna sunt elit dolore.',
    },
  ]

  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size))
      return acc
    }, [])
  }

  const TestimonialsCarousel = ({ Data, onChange }) => {
    // group data into chunks of 2
    const slides = chunkArray(Data, 2)

    return (
      <Carousel afterChange={onChange}>
        {slides.map((group, index) => (
          <div key={index} style={{ marginBottom: '38px' }}>
            <div className='carousel-icon-wrap'>
              {group.map((data, i) => (
                <TestimonialsCardsComp
                  key={i}
                  image={data?.Image}
                  Title={data?.Title}
                  Subtitle={data?.Subtitle}
                  icon={data?.Icon}
                  text={data?.Text}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    )
  }

  return (
    <div className='testimonial-container'>
      <div className='width90'>
        {!hideTitle && (
          <div className='testimonial-main-heading'>
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        )}
        <TestimonialsCarousel Data={Data} onChange={onChange} />
      </div>
    </div>
  )
}

export default TestimonialsComp
