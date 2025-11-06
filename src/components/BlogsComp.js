import React from 'react'
import BlogsCard from './BlogsCard'
import WebHosting from '../assets/WebHosting.jpg'
import Advertisment from '../assets/Advertisment.jpg'
import Marketing from '../assets/Marketing.jpg'
import Phone from '../assets/Phone.jpg'
import Media from '../assets/Media.jpg'
import Job from '../assets/Jobs.jpg'
import { Col, Row, Pagination } from 'antd'

const BlogsComp = () => {
  const Data = [
    {
      image: WebHosting,
      Title: 'Domain & Hosting',
      subtitle: 'How to host website on any hosting provider?',
      Text: 'William Bla',
      date: 'Feb 1, 2022',
    },
    {
      image: Advertisment,
      Title: 'Advertisement',
      subtitle: 'How to create add on google adwords?',
      Text: 'Jobi Ret',
      date: 'Oct 5, 2022',
    },
    {
      image: Marketing,
      Title: 'Marketing',
      subtitle: 'What is digital marketing and why is important?',
      Text: 'Main Dow',
      date: 'Dec 22, 2022',
    },
    {
      image: Phone,
      Title: 'Mobile Phone',
      subtitle: 'WhyThe Iphone 20 is most selling phone in the world?',
      Text: 'Main Dow',
      date: 'Jan 22, 2022',
    },
    {
      image: Media,
      Title: 'Social Media',
      subtitle: 'How to you can learn any skill from youtube?',
      Text: 'Main Dow',
      date: 'October 22, 2022',
    },
    {
      image: Job,
      Title: 'Jobs',
      subtitle: 'How to get job in 30 days? Know 30 Tips',
      Text: 'Main Dow',
      date: 'Dec 29, 2022',
    },
  ]

  return (
    <div className='blog-container'>
      <div className='width90'>
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={8} key={i}>
              <BlogsCard
                Image={data?.image}
                Title={data?.Title}
                Subtitle={data?.subtitle}
                Text={data?.Text}
                Date={data?.date}
              />
            </Col>
          ))}
        </Row>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default BlogsComp
