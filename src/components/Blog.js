import React from 'react'
import { Col, Row } from 'antd'
import BlogCards from '../components/BlogCards'
import Blog1 from '../assets/blog-1.jpg'
import Blog2 from '../assets/blog-2.jpg'
import Blog3 from '../assets/blog-3.jpg'
import Blog4 from '../assets/blog-4.jpg'
import Blog5 from '../assets/blog-5.jpg'
import Blog6 from '../assets/blog-6.jpg'

const Blog = () => {
  const Data = [
    {
      Image: Blog1,
      Title: 'Domain & Hosting',
      subtitle: 'How to host website on any hosting provider?',
      Text: 'William Bla',
      Date: 'Feb 1, 2022',
    },
    {
      Image: Blog2,
      Title: 'Advertisement',
      subtitle: 'How to create add on google adwords?',
      Text: 'Jobi Ret',
      Date: 'Oct 5, 2022',
    },
    {
      Image: Blog3,
      Title: 'Marketing',
      subtitle: 'What is digital marketing and why is important?',
      Text: 'Main Dow',
      Date: 'Dec 22, 2022',
    },
    {
      Image: Blog4,
      Title: 'Domain & Hosting',
      subtitle: 'Which server is best for websites linux or windows?',
      Text: 'Main Dow',
      Date: 'Dec 01, 2022',
    },
    {
      Image: Blog5,
      Title: 'Social Media',
      subtitle: 'How to you can learn any skill from youtube?',
      Text: 'Main Dow',
      Date: 'October 22, 2022',
    },
    {
      Image: Blog6,
      Title: 'Jobs',
      subtitle: 'How to get job in 30 days? Know 30 Tips',
      Text: 'Main Dow',
      Date: 'Dec 29, 2022',
    },
  ]
  return (
    <div className='blog-container'>
      <div className='width90'>
        <div className='blog-main-heading'>
          <h1>Recent Blog Posts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Row gutter={[20, 20]}>
          {Data?.map((data, i) => (
            <Col lg={8} key={i}>
              <BlogCards
                Image={data?.Image}
                Title={data?.Title}
                subtitle={data?.subtitle}
                Text={data?.Text}
                Date={data?.Date}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Blog
