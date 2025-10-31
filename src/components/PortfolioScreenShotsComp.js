// import React from 'react'
// import { Col, Row } from 'antd'
// import App1 from '../assets/app-1.jpg'
// import Product1 from '../assets/product-1.jpg'
// import Branding1 from '../assets/branding-1.jpg'
// import Books1 from '../assets/books-1.jpg'
// import App2 from '../assets/app-2.jpg'
// import Product2 from '../assets/product-2.jpg'

// import OurPortfolioCard from '../components/OurPortfolioCard'

// const PortfolioData = [
//   {
//     image: App1,
//     name: 'Category Web design',
//     category: 'Client New Company',
//     date:'Project date 12 February, 2022',
//     projectURL:'projectURL www.example.com',
//   },
//   {
//     image: Product1,
//     name: 'Web design',
//     category: 'New Company',
//     date:'Project date 12 February, 2022',
//     projectURL: 'www.example.com',
//   },
//   {
//     image: Branding1,
//     name: 'Web design',
//     category: 'New Company',
//     date:'Project date 12 February, 2022',
//     projectURL: 'www.example.com',
//   },
//   {
//     image: Books1,
//    name: 'Web design',
//     category: 'New Company',
//     date:'Project date 12 February, 2022',
//     projectURL: 'www.example.com',
//   },
//   {
//     image:App2,
//     name: 'Web design',
//     category: 'New Company',
//     date:'Project date 12 February, 2022',
//     projectURL: 'www.example.com',
//   },
//   {
//     image:Product2 ,
//     name: 'Web design',
//     category: 'New Company',
//     date:'Project date 12 February, 2022',
//     projectURL: 'www.example.com',
//   },
// //   {
// //     image: ,
// //      name: 'Web design',
// //     category: 'New Company',
// //     date:'Project date 12 February, 2022',
// //     projectURL: 'www.example.com',
// //   },
// //   {
// //     image: ,
// //     name: 'Web design',
// //     category: 'New Company',
// //     date:'Project date 12 February, 2022',
// //     projectURL: 'www.example.com',
// //   },
// //   {
// //     image: ,
// //     name: 'Web design',
// //     category: 'New Company',
// //     date:'Project date 12 February, 2022',
// //     projectURL: 'www.example.com',
// //   },
// ]

// const PortfolioScreenShotsComp = ({ activeBtn }) => {
//   return (
//     <div className='portfolio-screenshorts'>
//       <Row gutter={[30, 30]}>
//         {PortfolioData?.filter((_d) =>
//           activeBtn === 'All' ? _d : _d?.category === activeBtn,
//         )?.map((_d, index) => (
//           <Col key={index} lg={8}>
//             <OurPortfolioCard
//               projectimage={_d?.image}
//               projectname={_d?.name}
//               category={_d?.category}
//             />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   )
// }

// export default PortfolioScreenShotsComp
