import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
import './buildscale.css'
import BuildScaleModal from './BuildScaleModal'
const BuildScale = () => {
   const [BuildScale, setBuildScale]= useState(false);
   const [data, setData]= useState([]);
   const [objectData, setObjectData]=useState({})
   const [updateUi, setUpdateUi]= useState(false);

   const fetchData=async()=>{
      try {
        const res= await axios.get("/bulid/scale/get")
        setData(res.data.responseData);
      } catch (error) {
        console.log(error)
      }
   }

   const getData=(data)=>{
    setBuildScale(true);
    setObjectData(data)

   }

   const closeModal=()=>{
    setBuildScale(false);
   }


  useEffect(()=>{
    fetchData(); 
  }, [updateUi])


  return (
    <div className="container">

    <section className="build_scale_wrapper container-fluid pt-5 pb-5">
      
       <div className="row">
        {
          data.map((curElm)=>{
            return(<div className="col-md-6 mx-auto hover_common" key={curElm._id}>
            <span className='d-block text-end cursor' onClick={()=>getData(curElm)}><FaRegEdit /> </span>
            <NavLink to='/developers'>
   
              <div className="build_data" data-aos="fade-up">
             
   
              <div className="hover_effect">
              <div className="top_data">
                 <h3><span className='common_line'> </span>
                   <strong className='top_data_heading text-white'>{curElm.title} </strong>
                    {/* <span className='ms-2 text-white'>fast </span> */}
                    </h3>
                     
                 </div>
                 <p className="build_para">
                  {curElm.paragraph}
                 </p>
   
                 </div>
                <div className="build_scale_data_button">
                   <span>Deploy apps </span>
                   <span> <BsArrowRight/> </span>
                </div> 
              </div>
              </NavLink>
            </div>)
          })
        }
         
         {/* <div className="col-md-6 mx-auto hover_common">
         <NavLink to='/staking' >
           <div className="scale_data" data-aos="fade-up">
           <div className="hover_effect">
             <div className="scale_top_data">
                 <h3> <span className='common_line'> </span><strong className="scale_data_heading text-white">
                  Scale 
                </strong>
                <span className='ms-2 text-white'>easy </span>
                </h3>
             </div>

             <p className="build_para">
             Stake your AZERO with a trusted network of validators—or help scale Aleph Zero and make it more secure for everyone <br /> involved by becoming one yourself.
             </p>
             </div>
             <div className="build_scale_data_button">
                <span >Validate and nominate </span>
                <span> <BsArrowRight/> </span>
             </div> 
             
           </div>
           </NavLink>
         </div> */}
       </div>
      
      {BuildScale && <BuildScaleModal show={BuildScale} hide={closeModal} setUpdateUi={setUpdateUi} objectData={objectData} />} 
    </section>
    </div>


  )
}

export default BuildScale