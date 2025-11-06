import React from 'react'
// import App1 from '../assets/app-1.jpg'
import { Button } from 'antd'
// import { Content } from 'antd/es/layout/layout'
const OurPortfolioCard = ({ category, client, date, url, title, bgImage }) => {
  return (
    <div className='portfolio-card-wrap'>
      <div className='portfolio-screenshorts-image'>
        <div className='back-image-container' style={{ backgroundImage: `url(${bgImage})` }} />
        <Button>Veiw Project</Button>
      </div>
      <div className='portfolioc-card-content'>
        <h3>{title}</h3>
        <p>
          <span>Category</span>
          {category}
        </p>
        <p>
          <span>Client</span>
          {client}
        </p>
        <p>
          <span> Date </span>
          {date}
        </p>
        <p>
          <span>url</span>
          <a href='#'> {url}</a>
        </p>
      </div>
    </div>
  )
}

export default OurPortfolioCard
