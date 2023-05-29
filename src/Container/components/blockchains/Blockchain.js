import React, { useEffect, useState } from 'react'
import blockchainImg from '../../assets/blocovia21.jpg'
import enterpriseimg from '../../assets/enterprise-bg.svg'
import {BsArrowRight} from 'react-icons/bs'
import './blockchain.css'
import { NavLink } from 'react-router-dom'
import BlockChainModal from './BlockChainModal'
import { FaRegEdit } from 'react-icons/fa'

const Blockchain = () => {
const [ChainModal, setChainModal]=useState(false);   
 const [chainData, setChainData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
   setChainModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/blockchain/get")
       const data= await res.json();
       setChainData(data.responseData);

    } catch (error) {
       console.log(error)
    }

 }

  const getData =async(data)=>{
   setChainModal(true)
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
           <span className='d-block text-end cursor' onClick={()=>getData(chainData)}><FaRegEdit /> </span>

              <div className="enterprise-img">
               <img src={enterpriseimg} alt="enterpriseimg" className='img-fluid' />
              </div>
           </div>
           <div className="col-md-6">
              <div className="blockchain_img_content"  data-aos="fade-left">
                 <div className="img_content">
                   <img src={blockchainImg} alt="blockchain_img" className='img-fluid' />  
                 </div>
                 <span className="data_content">
                   <div className="inner_data">
                   <h3>
                     <span className='block_chain_span_text_color'>{chainData.title}   </span> 
                    </h3>
                    {/* <span>Why Blockovia <BsArrowRight/> </span> */}
                    <div className="build_scale_data_button">
<NavLink to='/why-blockovia'>
                    <span>Why Blockovia </span>
                <span> <BsArrowRight/> </span>
                </NavLink>

                </div>
                   </div>
                 </span>
              </div>
           </div>
        </div>
        {
            ChainModal && <BlockChainModal  show={ChainModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
     </section>
     </div>
)
}

export default Blockchain