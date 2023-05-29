import React, { useEffect, useState } from 'react'
import envImg from '../../assets/environment.jpg'
import {BsArrowRight} from 'react-icons/bs'
import './environment.css'
import { FaRegEdit } from 'react-icons/fa'
import EnvironmentModal from './EnvironmentModal'
const Environment = () => {

   const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/footprint/get")
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
    <section className='env_wrapper pt-5 pb-5'>
    <div className="row">
       <div className="col-md-6">
          <div className=""></div>
       </div>
       <div className="col-md-6">
          <div className="env_img_content" data-aos="fade-left">
          <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
             <div className="img_content">
               <img src={envImg} alt="env_img" className='img-fluid' />  
             </div>
             <span className="data_content">
               <div className="inner_data">
                  <h3>
                 <span className='env_span_text_color'>{cardData.title}  </span> 
                 </h3>
                
                 <div className="build_scale_data_button">

              <span>our carbon footprint </span>
              <span> <BsArrowRight/> </span>
              </div>
                </div>

               
                 
             </span>
            
          </div>
        
          
       </div>
    </div>
    {
            CardModal && <EnvironmentModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
 </section>
 </div>


  )
}
export default Environment