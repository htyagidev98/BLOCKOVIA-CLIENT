import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa'
import ApplicationCardModal from './ApplicationCardModal';

const ApplicationCard = () => {
const navigate = useNavigate();
const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/application/get")
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


 const {title}= cardData

 
  let apptext= title.slice(0, 12);
  let underText= title.slice(12, 18);
  let developmentText= title.slice(18,31);
//   console.log('application', apptext)
//   console.log('underText', underText)
//   console.log('developmentText', developmentText)
  

//   console.log('app', apptext)
//   console.log('underte', underText)
//   console.log('dev', developmentText)



  return (
    <div className="col-md-6">
    <div className='app_right_data ' data-aos="fade-left">
    <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>

    <h2>{apptext}</h2> <span>{underText}</span> 
    <h6>{developmentText} </h6> 

       <span className='app_line'></span>
       <p className='app_para'>
       {cardData.paragraph}
      </p>
       <button onClick={() => navigate('/staking')} className='app_left_button'>Explore the ecosystem</button>
    
    </div>

    {
            CardModal && <ApplicationCardModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
 </div>
)
}

export default ApplicationCard