// import { Col, Row } from 'antd'
import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='width90'>
        <div className='footer-content'>
          <div className='footer-company-title'>
            <h1>
              <span>Indi</span>
              soft
              <span>.</span>
            </h1>
            <p>
              Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut
              labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut
              aliquip ea commodo conse quatuis aute irure.
            </p>
          </div>
          <div className='main-footer'>
            <h2>Services</h2>
            <a>Web Design</a>
            <a>App Developemnt</a>
            <a>Cloud Services</a>
            <a>Domain adn Hosting</a>
            <a>Seo Optimization</a>
            <a>Social Media</a>
          </div>
          <div className='main-footer-cont'>
            <h2>Contact</h2>
            <p>101 West Town</p>
            <p>PBo 12345, United States</p>
            <p>+1 1234 56 789</p>
            <p>contact@example.com</p>
          </div>
        </div>
        <div className='footer-wrapper'>
          <div className='footer-icon'>
            <FaFacebookF />
          </div>
          <div className='footer-icon'>
            <CiTwitter />
          </div>
          <div className='footer-icon'>
            <FaGoogle />
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='footer-list'>
            <h4>Indisoft</h4>
            <p> © 2022 All Right Reserved</p>
          </div>
          <div className='footer-list'>
            <p>Terms of Service </p>
            <span>|</span>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
