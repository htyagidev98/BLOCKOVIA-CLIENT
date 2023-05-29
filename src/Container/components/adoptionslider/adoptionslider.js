import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './adoption.css';
import slideoneImg from '../../assets/slide1.svg';
import AdoptionModal from "./AdoptionModal";
import { FaRegEdit } from "react-icons/fa";

const AdoptionSlider = () => {


  const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState([]);
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/driving/animate/get")
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

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div>
      <Slider {...settings}>

        {
          cardData.map((curElm)=><div className="scrollitem small-slider-sec" key={curElm._id}>
          <span className='d-block text-end cursor' onClick={()=>getData(curElm)}><FaRegEdit /> </span>
            <div className="adoption-flex d-flex align-items-center">
              <img src={slideoneImg} alt="slider-img" className="img-fluid pe-3" />
              <h3 className="m-0">{curElm.title} </h3>
            </div>
          </div>)
        }


      </Slider>

      {
            CardModal && <AdoptionModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
    </div>
  );
};

export default AdoptionSlider;
