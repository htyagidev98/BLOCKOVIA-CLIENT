import React from 'react'
import './marque.css'
import marOne from '../../../assets/blockworks-cover.jpg'
import marTwo from '../../../assets/coindesk.jpeg'
import marThree from '../../../assets/brock.png'
const MarqueSection = () => {
  return (
    <div className='marque_section pb-4'>
    <span className='marque_top'></span>
    <div className="marque_heading"><h6 className="gloary-bold">FEATURED IN </h6> </div>
       <marquee behavior="" direction="" className="marque_data" >
        <span className='me-5'>CoinDesk </span>
        <span className='me-5'>THE BLOCK </span>
       <span className='me-5'>MY COMPANY  <span>POLSKA</span></span> 
       <span className='me-5'>\ sifted /</span>
       <span className='me-5'>Accelpoint</span>
       <span className='me-5'>Nasdaq</span>
       <span className='me-5'>Menetary Authority of Singapore</span> 
       <span className='me-5'>Blockworks</span>
       
       
       </marquee>
    </div>
  )
}

export default MarqueSection