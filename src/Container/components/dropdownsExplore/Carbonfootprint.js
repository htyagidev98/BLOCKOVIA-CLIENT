import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown, BsLink} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { NavLink} from 'react-router-dom'
import './carbonfootprint.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { TbCertificate } from 'react-icons/tb'

const Carbonfootprint = () => {
  return (
   <>
   
       <header className='header_content'>
        <Header/>
        <Navbar/>
       </header>
       
       <div className="mini-banner">
    <div className="custom-wrapper">
       <div className="banner-list">
          <h3>Going  <strong>carbon-negative</strong></h3>
          <ul>
             {/* <li><i className="icon-governance"></i> Core chain</li> */}
             <li><i className="icon-governance"></i>  Aleph Zero has always been a firm believer that blockchain solutions must be eco-friendly. Read on to discover more about our efforts to decarbonize.</li>
             {/* <li><i className="icon-governance"></i>  Smart contracts</li> */}
          </ul>
       </div>
    </div>
    </div>
    <div className="slider-section">

    <div className="row">

<div className="col-md-6">
   <div className='app_right_data '>
   <h3>
      <strong className='text-white'>Green </strong>
        <span className='text-white'> is good</span>
        </h3>

      <span className='app_line'></span>
      <p className='app_para'>
      We are the first generation to witness the drastic effects of manmade climate change and perhaps the last that can do anything to mitigate the damage.

This is why it's important for everyone to do their part in protecting the natural environment. Eco-friendly blockchains are live and being used today, and we aim to present Aleph Zero as a prime example of the industry’s commitment to addressing sustainability issues.
     </p>
     
   
   </div>
</div>
</div>
<div className="row">

<div className="col-md-12 mx-auto hover_common">
         <NavLink to='' >
           <div className="scale_data">
           <div className="hover_effect">
             <div className="scale_top_data">
                 <h3> <span className='common_line'> </span>
                 Building an <strong className="scale_data_heading text-white">eco-friendly   </strong>future for blockchain 

                <span className='ms-2 text-white'>easy </span>
                </h3>
             </div>

             <p className="build_para">
             Symbolic of our commitment to a greener crypto space was Aleph Zero's joining the Crypto Climate Accord. This initiative aims to work with the crypto and blockchain industry to expedite decarbonization and introduce #ProofOfGreen solutions that will set a new benchmark for other sectors to follow.             </p>
             </div>
             <div className="build_scale_data_button">
                <span >Learn more </span>
                <span> <BiLinkExternal/> </span>
             </div> 
             
           </div>
           </NavLink>
         </div>
         </div>
        
<div className="row">
<div className="col-md-4">
   <div className='app_right_data '>
   <h3>
      <strong className='text-white'>The numbers  </strong>
        <span className='text-white'> that matter</span>
        </h3>

      <span className='app_line'></span>
      <p className='app_para'>
      By leveraging a Proof-of-Stake with the added efficiency of a novel approach to DAG,<strong className=''> we’ve reduced energy consumption drastically </strong>without sacrificing the security and decentralized nature upon which the future economy will be built.
     </p>
   </div>
</div>

</div>



<div className="row">
<div className="col-md-6">
   <div className='app_right_data '>
   <h3>
      <strong className='text-white'>Our  </strong>
        <span className='text-white'> actions</span>
        </h3>

      <span className='app_line'></span>
      <p className='app_para'>
      As we are aware of our impact on the climate, we have decided to <strong>collaborate with chosen CO2 offset programs.</strong>     </p>
      
      <p className='app_para'> What's more, we are not content with becoming carbon neutral, our intention is to become carbon negative and contribute to preserving the natural environment.</p>
   </div>
</div>
</div>

<div className="row">
         <div className="col-md-12 mx-auto hover_common">
         <NavLink to='#'>
           <div className="wallet_data">
           <div className="hover_effect">
           <div className="top_data">
           <h3>
              <span className='common_line'> </span>
                 <strong className='top_data_heading text-white'> Waste to Fuel: Improving Agriculture and Livelihoods in Uganda</strong>
                 <span className='ms-2 text-white'> project</span>

                 </h3>
              </div>
              <div style={{display:"flex"}}>
              <p className="wallet_para">
               75 tones of CO2</p>
               <p className="wallet_para">

               H2 of 2022</p>
               </div>


              <p className="wallet_para">
              Aleph Zero's next step in contributing to a greener world is doubling down on our cooperation with Native by supporting the Waste to Fuel program. This initiative is designed to reduce methane emissions on subsistence farms in Uganda with biodigesters. This technology allows farmers to harness clean biogas for cooking, heating and fertilizing their crops. Aleph Zero is proud to pledge 75 tonnes of carbon offsets to the program, helping to advance climate action and address our 2022 H2 energy usage. </p>              </div>
             <div className="wallet_data_button" style={{display:"inline-flex" ,margin:'10px'}}>
                <span> <BsBoxArrowUpRight/> </span>
                <span>Learn more </span>
                <span> <TbCertificate/> </span>
                <span>See certificate</span>

             </div> 
           </div>
           </NavLink>
         </div>
         </div>

</div>
<div className="destination-sec">
     <div className="custom-wrapper">
         <div className="destination-content d-flex align-items-center justify-space-between">
             <h4>Build with us a <strong>greener</strong> web3 world!</h4>
             <div className="single-line"></div>
             <div className="btn-green">
               <span>Learn more!</span>
             </div>
            </div>
            </div>
            </div>

<footer className='footer_content'>
        <Footer/>
       </footer>
</>
  )
}
export default Carbonfootprint