import React, { useEffect, useState } from 'react'
import './driving.css'
import DrivingImg from '../../assets/featured-panel-carbon.svg';

import AdoptionSlider from '../adoptionslider/adoptionslider.js';
import DrivingModal from './DrivingModal';
import { FaRegEdit } from 'react-icons/fa';
const Driving = () => {

 const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/drivingtext/get")
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

<>
   <div className="container ">
   <section className="driving_wrapper pt-5 pb-5">

      <div className="row align-items-center">

         <div className="col-md-6">
         <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
            <div className='driving_right_data' data-aos="fade-right">

            <h3>
              {
               cardData.title
              }
               </h3>
               <span className='driving_line'></span>
               <p className='driving_para'>
                 {cardData.paragraph}
               </p>
               <button className='driving_right_button'>See what's Possible </button></div>
         </div>

          <div className="col-md-6">
            <div className="right_data">
               <div className="driving-img-slider">
               <AdoptionSlider/> 
               {/* <img src={DrivingImg} alt="DrivingImg" className='img-fluid' /> */}
              </div>
            


            </div>
         </div> 
      </div>

      {
            CardModal && <DrivingModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
   </section>
   </div>

</>    
)
 }
 export default Driving                                   