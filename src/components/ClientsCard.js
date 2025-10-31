import React from 'react'

const ClientsCard = ({ image, icon, text, Title, Subtitle }) => {
  return (
    <div>
      <div className='carousel-image'>
        <img src={image} />
        <div className='carpusel-wrap'>
          <h3>{Title}</h3>
          <h4>{Subtitle}</h4>
          {icon}
        </div>
        <div className='carousel-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ClientsCard
