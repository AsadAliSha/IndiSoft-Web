import React from 'react'
import { Collapse } from 'antd'
import { FaArrowRight } from 'react-icons/fa'

const FaqsComp = () => {
  const { Panel } = Collapse
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <div className='faq-container'>
      <div className='width90'>
        <div className='collapse-container'>
          <Collapse
            showArrow={false}
            // expandIcon={false}
            defaultActiveKey={['1']}
            onChange={onChange}
          >
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  What is web domain and hosting?
                </div>
              }
              key='1'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  Which server is best for websites linux or windows?
                </div>
              }
              key='2'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  Google cloud or Amazon server which one is best and fast?
                </div>
              }
              key='3'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  Why Organic SEO is important for all businesses?
                </div>
              }
              key='4'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  What is web domain and hosting?
                </div>
              }
              key='5'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  Which server is best for websites linux or windows?
                </div>
              }
              key='6'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>
                  Google cloud or Amazon server which one is best and fast?
                </div>
              }
              key='7'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
            <Panel
              header={
                <div className='collaspe-header'>
                  <span>
                    <FaArrowRight />
                  </span>{' '}
                  Why Organic SEO is important for all businesses?
                </div>
              }
              key='8'
            >
              <p>
                {
                  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default FaqsComp
