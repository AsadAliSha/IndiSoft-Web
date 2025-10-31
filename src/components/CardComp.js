import React from 'react'
// import { Col, Row } from 'antd'
// import { FaPencilAlt } from 'react-icons/fa'
// import { GrPieChart, GrTasks } from 'react-icons/gr'

const CardComp = ({ icon, Title, Text }) => {
  return (
    <div className=''>
      <div className='whatwedo-card-col'>
        <div className='whatwedo-icon'>{icon}</div>
        <div className='whatwedo-content'>
          <h3>{Title}</h3>
          <p>{Text}</p>
        </div>
      </div>
    </div>
  )
}

export default CardComp
