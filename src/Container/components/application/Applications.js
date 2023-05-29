import {React} from 'react'
import './applications.css'
import slickslider from "../slickslider/slick.js"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import VerticalMode from '../slickslider/slick.js';
import ApplicationCard from './ApplicationCard';


const Applications = () => {
 

  return (

<>
<div className="container">
   <section className="app_wrapper pt-5 pb-5 ">
   {/* <NavLink to='staking' > */}

      <div className="row align-items-center">
       <div className="col-md-6">
            <div className="right_data">

               <div className='row'>
                  <div className='col-lg-6'>
                  <VerticalMode/> 
                  </div>
                  <div className='col-lg-6'>
                  <VerticalMode/> 
                  </div>
               </div>
    
            </div>
         </div>
         <ApplicationCard />
        
      </div>
      {/* </NavLink>  */}

   </section>
   </div>
   


</>   
)
 }
 export default Applications                                   