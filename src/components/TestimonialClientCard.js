import React from 'react'
import TestimonialsCards from './TestimonialsCards'
import { Rate } from 'antd'
import JhoneDoe from '../assets/Jhone-Doe.jpg'
import AfaRose from '../assets/Afa-Rose.jpg'
import KeenaLara from '../assets/Keena-Lara.jpg'
import FizziBrandon from '../assets/Fizzi-Brandon.jpg'
const TestimonialClientCard = () => {
  const Data = [
    {
      image: JhoneDoe,
      Title: 'Jhone Doe',
      Subtitle: 'CFO',
      icon: <Rate />,
      Text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam. ',
    },
    {
      image: AfaRose,
      Title: 'Afa Rose',
      Subtitle: 'Web Designer',
      icon: <Rate />,
      Text: ' Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet. ',
    },
    {
      image: KeenaLara,
      Title: 'Keena Lara',
      Subtitle: 'Store Owner',
      icon: <Rate />,
      Text: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim.',
    },
    {
      image: FizziBrandon,
      Title: 'Fizzi Brandon',
      Subtitle: 'Freelancer',
      icon: <Rate />,
      Text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit dolore. ',
    },
  ]
  return (
    <div className='clientcard-container'>
      <div className='width90'>
        {Data?.map((data, i) => (
          <div key={i}>
            <TestimonialsCards
              Image={data?.image}
              Title={data?.Title}
              subtitle={data?.Subtitle}
              icon={data?.icon}
              Text={data?.Text}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialClientCard
