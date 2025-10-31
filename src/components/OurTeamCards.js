import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const OurTeamCards = ({ image, Title, Text }) => {
  return (
    <div className='ourteam-card-wrap'>
      <div className='ourteam-image'>
        <img src={image} />
      </div>
      <div className='ourteam-icon'>
        <a href='#'>
          <CiTwitter />
        </a>
        <a href='#'>
          <FaFacebook />
        </a>
        <a href='#'>
          <FaLinkedin />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
      </div>
      <div className='ourteam-content'>
        <h2>{Title}</h2>
        <p>{Text}</p>
      </div>
    </div>
  )
}

export default OurTeamCards
