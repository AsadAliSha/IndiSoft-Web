import React from 'react'
import { Dropdown, Space, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const Header = () => {
  const items = [
    {
      key: '1',
      label: (
        <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
          Projects
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
          Project Details
        </a>
      ),
    },
  ]
  return (
    <div className='container'>
      <div className='width90'>
        <div className='company-title'>
          <h1>
            <span>Indi</span>
            soft
            <span>.</span>
          </h1>
          <div className='header-content'>
            <a href='#'>Home</a>
            <a href='#'>Services</a>
            <a href='#'>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Projects
                    <DownOutlined color='#fff' />
                  </Space>
                </a>
              </Dropdown>
            </a>
            <a href='#'>About</a>
            <a href='#'>Pricing</a>
            <a href='#'>Testimonials</a>
            <a href='#'>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    All Pages
                    <DownOutlined color='#fff' />
                  </Space>
                </a>
              </Dropdown>
            </a>
            <a href='#'>Blogs</a>
          </div>
          <div className='button-container'>
            <Button>
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
