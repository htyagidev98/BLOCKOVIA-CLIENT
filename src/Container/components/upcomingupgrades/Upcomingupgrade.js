import React, { useEffect, useState } from 'react'
import upcomingImg from '../../assets/upcoming.jpg'
import upcomingnetwork from '../../assets/featured-panel-roadmap.svg'
import {BsArrowRight} from 'react-icons/bs'
import './upcomingupgrade.css'
import { FaRegEdit } from 'react-icons/fa'
import UpcomingModal from './UpcomingModal'
const Upcomingupgrades = () => {

 const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/network/get")
       const data= await res.json();
       setCardData(data.responseData);

    } catch (error) {
       console.log(error)
    }

 }

  const getData =async(data)=>{
    setCardModal(true)
   setObjectData(data)
  }


 useEffect(()=>{
   fetchHeroData();
 }, [updateUi])
 


  return (
   
   <div className="container">
    <section className='blockchain_wrapper pt-5 pb-5'>
    <div className="row">
       <div className="col-md-6">
          <div className="">
          <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
          <div className="upcomingImg">
               <img src={upcomingnetwork} alt="enterpriseimg" className='img-fluid' />
              </div>
              </div>
       </div>
       <div className="col-md-6">
          <div className="blockchain_img_content" data-aos="fade-left">
             
             <div className="img_content">
               <img src={upcomingImg} alt="blockchain_img" className='img-fluid' />  
             </div>
             <span className="data_content">
               <div className="inner_data">
               <h3>
                 <span className='block_chain_span_text_color'> {cardData.title}   </span> 
                </h3>
                 <div className="build_scale_data_button">

              <span>Go to roadmap </span>
              <span> <BsArrowRight/> </span>
              </div>
                </div>
             </span>
            
          </div>
        
          
       </div>
    </div>

    {
            CardModal && <UpcomingModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
 </section>
 </div>


  )
}
export default Upcomingupgrades