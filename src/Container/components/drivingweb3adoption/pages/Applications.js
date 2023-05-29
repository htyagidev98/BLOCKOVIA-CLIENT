import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsFileArrowDown} from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './applicationsdriving.css'
// import '../../../common/header/header.css'
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'
import smartcontract from '../../../assets/smart-contract.svg';
import sharedrevenue from '../../../assets/shared-revenue.svg';
import wallet from '../../../assets/wallet.svg';
import supplychain from '../../../assets/supply-chain.svg';
import signatory from '../../../assets/notary-signatory.svg';
import dns from '../../../assets/dns.svg';
import asset from '../../../assets/asset-digitization.svg';
import gameasset from '../../../assets/games.svg';
import transparent from '../../../assets/public-document.svg';
import database from '../../../assets/database.svg';
import tax from '../../../assets/tax.svg';
import iot from '../../../assets/iot.svg';
import Footer from '../../../common/footer/Footer'
const Applicationsdriving= () => {
return (
<>
<header className='header_content'>
   <Header></Header>
   <Navbar></Navbar>
</header>
<div className="mini-banner">
   <div className="custom-wrapper">
      <div className="banner-list">
         <h3> <strong>Applications</strong></h3>
         <ul>
            <li><i className="icon-governance"></i>  Aleph Zero enables businesses, governments, and developers to<br/> build new solutions that will benefit from using a decentralized architecture.</li>
         </ul>
      </div>
   </div>
</div>
<div className="slider-section use-cases-page">
   <div className="container mini1200container">
      <section className="wallet_wrapper pt-5 pb-5">
         <div className="row">
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={smartcontract} className='img-fluid' />
                     </div>
                     <h5>Smart Contracts</h5>
                     <p>
                        Set up your Blockovia wallet to be able to hold, transfer, or stake your Blockovia coins.
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                           <span className="lnr lnr-move"></span> 
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={sharedrevenue} className='img-fluid' />
                     </div>
                     <h5>Automatic payments & shared revenue agreement</h5>
                     <p>
                        Familiarize yourself with the Blockovia explorer launched in collaboration with Subscan.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={wallet} className='img-fluid' />
                     </div>
                     <h5>wallet & DEX</h5>
                     <p>
                        Learn more about the utility and economics behind Blockovia - blockovia's native coin.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* 
      </section>
      */}
      {/* 
      <section className="wallet_wrapper container-fluid pt-5 pb-5">
         */}
         <div className="row">
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={supplychain} className='img-fluid' />
                     </div>
                     <h5>Supply chain management</h5>
                     <p>
                        Set up your Blockovia wallet to be able to hold, transfer, or stake your Blockovia coins.
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                          
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={signatory} className='img-fluid' />
                     </div>
                     <h5>Notary signatory</h5>
                     <p>
                        Familiarize yourself with the Blockovia explorer launched in collaboration with Subscan.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                          
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={dns} className='img-fluid' />
                     </div>
                     <h5>DNS</h5>
                     <p>
                        Learn more about the utility and economics behind Blockovia - blockovia's native coin.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                          
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* 
      </section>
      */}
      {/* 
      <section className="wallet_wrapper container-fluid pt-5 pb-5">
         */}
         <div className="row">
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={asset} className='img-fluid' />
                     </div>
                     <h5>Asset digitization</h5>
                     <p>
                        Set up your Blockovia wallet to be able to hold, transfer, or stake your Blockovia coins.
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                        
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={gameasset} className='img-fluid' />
                     </div>
                     <h5>Game assets</h5>
                     <p>
                        Familiarize yourself with the Blockovia explorer launched in collaboration with Subscan.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                         
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={transparent} className='img-fluid' />
                     </div>
                     <h5>Transparent public document access</h5>
                     <p>
                        Learn more about the utility and economics behind Blockovia - blockovia's native coin.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                         
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* 
      </section>
      */}
      {/* 
      <section className="wallet_wrapper container-fluid pt-5 pb-5">
         */}
         <div className="row">
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={database} className='img-fluid' />
                     </div>
                     <h5>Databases</h5>
                     <p> Set up your Blockovia wallet to be able to hold, transfer, or stake your Blockovia coins.</p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                     
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={tax} className='img-fluid' />
                     </div>
                     <h5>Automatic tax payment</h5>
                     <p>
                        Familiarize yourself with the Blockovia explorer launched in collaboration with Subscan.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                          
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={iot} className='img-fluid' />
                     </div>
                     <h5>IoT</h5>
                     <p> 
                        Learn more about the utility and economics behind Blockovia - blockovia's native coin.             
                     </p>
                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                         
                           <BsArrowRight/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="destination-sec">
            <div className="custom-wrapper">
               <div className="destination-content d-flex align-items-center justify-space-between">
                  <h4><strong>Discover</strong> the projects!</h4>
                  <div className="single-line"></div>
                  <div className="btn-green">
                     <span>Go to ecosystem</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</div>
<footer className='footer_content'>
   <Footer></Footer>
</footer>
</>
)
}
export default Applicationsdriving