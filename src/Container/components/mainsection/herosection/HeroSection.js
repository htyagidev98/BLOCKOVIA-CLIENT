import React, { useEffect, useState } from 'react';
import './hero.css'
import heroImg from '../../../assets/sunnyLogo.png'
import {BsFileArrowDown, } from 'react-icons/bs'
import {FaRegEdit} from 'react-icons/fa'
import HeroSectionModal from './HeroSectionModal';
const HeroSection = () => {
 const [HeroModal, setHeroModal]=useState(false);   
 const [HeroData, setHeroData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);
//   console.log('herodata', HeroData)
 const closeModal=()=>{
    setHeroModal(false);
 }

  const fetchHeroData=async()=>{
     try {
        const res= await fetch("/hero/content/get")
        const data= await res.json();
        setHeroData(data.responseData);

     } catch (error) {
        console.log(error)
     }

  }

   const getObject =async(data)=>{
    setHeroModal(true)
    setObjectData(data)
   }


  useEffect(()=>{
    fetchHeroData();
  }, [updateUi])


  return (
    <section className="container ">
    <div className="hero_section">

           <div className="row align-items-center">
            <div className="col-md-5 mx-auto">
                <div className="hero_data_section" data-aos="fade-right">
                    <span className='d-block text-end cursor' onClick={()=>getObject(HeroData)}><FaRegEdit /> </span>
                    <h1>{HeroData.title} </h1>
                    {/* <span className="scalable_span">scalable layer 1</span> */}
                    <span className="line_style"></span>
                    <p className="mt-3 hero_para">{HeroData.paragraph} </p>
                      
                    <button className="hero_first_section_button"><span className="scroll_down_img"><BsFileArrowDown /> </span> Start exploring</button>
                </div>
            </div>
            <div className="col-md-5 mx-auto" data-aos="fade-left">
                <div className="hero_image_section">
                    <img src={heroImg} alt="hero_image_" className="img-fluid"/>
                </div>
                <div className="span_line">
                <span>
                   <span className='line_style_span_hero_section'></span> <span className='line_style_span_hero_section'></span>
                   </span>
                   </div>
               
                   
            </div>
           </div>
           </div>
           {
            HeroModal && <HeroSectionModal  show={HeroModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </section>
 )
}

export default HeroSection