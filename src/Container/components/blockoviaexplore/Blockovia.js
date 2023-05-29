import React, { useEffect, useState } from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import walletImg from '../../assets/wallet-icon.svg';
import explorerImg from '../../assets/explorer.svg';
import utilityImg from '../../assets/utility.svg';
import topVector from '../../assets/featured-panel-roadmap.svg';
import { NavLink } from 'react-router-dom'
import './blockovia.css'
import { FaRegEdit } from 'react-icons/fa';
import BlockoviaModal from './BlockoviaModal';
const Blockovia = () => {

  const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState([]);
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/animated/card/get")
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
    <section className="wallet_wrapper pt-5 pb-5">
      <div class="top-img">
      <img src={topVector} alt='vector-img' className='img-fluid'/>
      </div>
       <div className="row">
        {
          cardData.map((elm)=>  <div className="col-md-4 mx-auto hover_common">
          <span className='d-block text-end cursor' onClick={()=>getData(elm)}><FaRegEdit /> </span>
 
          <NavLink to='#'>
            <div className="wallet_data" data-aos="fade-up">
            <div className="hover_effect">
            <div className="top_data">
            <div className="icon-img-sec">
            <img
                  src={
                    elm.title === "Blockovia wallet" ? walletImg :
                    elm.title === "Blockovia explore" ? explorerImg :
                    elm.title === "Blockovia utility" ? utilityImg :
                    null
                  }
                  alt="walletImg"
                  className="img-fluid"
                />
            
            </div>
            <h3>
              {elm.title}
                  </h3>
               </div>
 
               <p className="wallet_para">
                 {elm.paragraph}
               </p>
               </div>
              <div className="wallet_data_button">
                 <span> <BsBoxArrowUpRight/> </span>
                 <span>Got to </span>
 
              </div> 
            </div>
            </NavLink>
          </div>)
        }

       
         {/* <div className="col-md-4 mx-auto hover_common">
         <NavLink to='#'>
           <div className="wallet_data" data-aos="fade-up">
           <div className="hover_effect">
             <div className="top_data">
             <div className="icon-img-sec">
             <img src={explorerImg} alt="walletImg" className='img-fluid' />
           </div>
             <h3>
                <span className='common_line'></span>
                <span className='ms-2 text-white'> Blockovia</span>
                 <strong className='top_data_heading  ms-0 text-white'> explore</strong>
                 </h3>
             </div>

             <p className="wallet_para">
             Familiarize yourself with the Blockovia explorer launched in collaboration with Subscan.             </p>
             </div>
             <div className="build_scale_data_button">
             <span> <BsBoxArrowUpRight/> </span>
                <span>Go to </span>
             </div> 
             
           </div>
           </NavLink>
         </div>
         <div className="col-md-4 mx-auto hover_common">
         <NavLink to='#'>
           <div className="wallet_data" data-aos="fade-up">
           <div className="hover_effect">
             <div className="top_data">
             <div className="icon-img-sec">
             <img src={utilityImg} alt="walletImg" className='img-fluid' />
           </div>
             <h3>
                <span className='common_line'></span>
                <span className='ms-2 text-white'> Blockovia</span>
                 <strong className='top_data_heading ms-0 text-white'> utility</strong>
                 </h3>
             </div>

             <p className="wallet_para">
             Learn more about the utility and economics behind Blockovia - blockovia's native coin.             </p>
             </div>
             <div className="build_scale_data_button">
                <span>Go to</span>
                <span> <BsArrowRight/> </span>
             </div> 
             
           </div>
           </NavLink>
         </div> */}
       </div>
       <div class="top-img">
      <img src={topVector} alt='vector-img' className='img-fluid'/>
      </div>

      {
            CardModal && <BlockoviaModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
    </section>
    </div>


  )
}

export default Blockovia