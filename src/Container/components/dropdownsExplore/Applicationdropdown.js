import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsFileArrowDown} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { NavLink} from 'react-router-dom'
import './applicationdropdown.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
// import '../../../common/header/header.css'
// import Header from '../../../common/header/Header.js'
// import Navbar from '../../../common/navbar/Navbar.js'

const Applications = () => {
  return (
   <>
   {/* <header className='header_content'>
         <Header />
         < Navbar />
       </header> */}
       <header className='header_content'>
        <Header/>
        <Navbar/>
       </header>
       <section className="usecase_section container-fluid pt-5 pb-5">
       <div className="row">

<div className="col-md-6">
   <div className='usecase_right_data '>
   {/* <span className='ms-2 text-white'> Blockovia</span> */}
     <strong className='top_data_heading text-white'> Applications</strong>


      <p className='usecase_para'>
      With the mainnet launch, Blockovia has seen a notable initial adoption 
      within the developer community. Our flexible environment will be
       familiar for builders who are already accustomed with Rust and the 
       Substrate stack.
     </p>
   
   </div>
</div>
</div>
  </section>

  <section className="wallet_wrapper container-fluid pt-5 pb-5">
       <div className="row">
         <div className="col-md-4 mx-auto hover_common">
         <NavLink to='#'>
           <div className="wallet_data">
           <div className="hover_effect">
           <div className="top_data">
              <span className='common_line'> </span>
                 <span className='ms-2 text-white'> Blockovia</span>
                 <strong className='top_data_heading text-white'> wallet</strong>

                  
              </div>
              <p className="wallet_para">
              Set up your Blockovia wallet to be able to hold, transfer, or stake your Blockovia coins.              </p>

              </div>
             <div className="wallet_data_button">
                <span> <BsBoxArrowUpRight/> </span>
                <span>Got to </span>

             </div> 
           </div>
           </NavLink>
         </div>
         <div className="col-md-4 mx-auto hover_common">
         <NavLink to='#'>
           <div className="scale_data">
           <div className="hover_effect">
             <div className="scale_top_data">
                <span className='common_line'></span>
                <span className='ms-2 text-white'> Blockovia</span>
                 <strong className='top_data_heading text-white'> explore</strong>
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
           <div className="scale_data">
           <div className="hover_effect">
             <div className="scale_top_data">
                <span className='common_line'></span>
                <span className='ms-2 text-white'> Blockovia</span>
                 <strong className='top_data_heading text-white'>utility</strong>
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
         </div>
       </div>

       
    </section>





       



       </>
  )
}
export default Applications