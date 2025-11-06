import React from 'react'
import { Collapse } from 'antd'

const FaqsComp = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
  const items = [
    {
      key: '1',
      label: 'What is web domain and hosting?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '6',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '7',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '8',
      label: 'This is panel header 3',
      children: (
        <p>
          {
            'Nemoenim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        </p>
      ),
    },
  ]
  return (
    <div className='faq-container'>
      <div className='width90'>
        <div className=''>
          <Collapse accordion items={items} />;
        </div>
      </div>
    </div>
  )
}

export default FaqsComp
