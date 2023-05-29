import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDiscord,BsFileArrowDown, BsGithub} from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './builddev.css'
// import '../../../common/header/header.css'
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'
import blockovia from '../../../assets/into-aleph.svg'
import intro from '../../../assets/intro-one.svg'
import intro2 from '../../../assets/intro-two.svg'
import intro3 from '../../../assets/intro-three.svg'
import intro4 from '../../../assets/intro-four.svg'
import eco from '../../../assets/eco-circle.png'
import testnet from '../../../assets/testnet.svg'
import explorer from '../../../assets/explorer.svg'
import wallets from '../../../assets/wallet.svg'
import documentation from '../../../assets/documentation.svg'





import Footer from '../../../common/footer/Footer'
const Builddev = () => {
  return (
   <>
   <header className='header_content'>
         <Header />
         < Navbar />
       </header>
       <div className="mini-banner">
         <div className="custom-wrapper">
            <div className="banner-list">
               <h3 className="m0"><span>Dev</span> portal</h3>
               <ul>
                  <li className="m0">Learn all about building on Aleph Zero.</li>
               </ul>
            </div>
         </div>
      </div>

      {/* <!--  --> */}

      <div className="custom-bg intro-section section-padding">
      	 <div className="custom-wrapper">
      	<div className="row">
		      		<div className="col-lg-5 col-md-6 col-12">
		      			<div className="intro-sec" data-aos="zoom-in-up">
		      				<h2 className="heading-sec">Into <span>Aleph Zero</span></h2>
		      				<p className="mt-5">Aleph Zero is a <b>layer 1 blockchain with a highly scalable architecture</b> with its own AlephBFT consensus mechanism. </p>
							<p>Its sub-second finality makes for seamless experiences for users, while the network remains <b>secure and decentralized.</b></p>
		      			</div>

		      			<div className="intro-img">
		      			
             <img src={blockovia} alt="walletImg" className='img-fluid' />
		      			</div>
		      		</div>
	      		<div className="col-lg-7 col-md-6 col-12">
      				<div className="right-section-intro" data-aos="zoom-in-up">
      					<div className="row">
      						<div className="col-lg-6 col-md-6 col-12">
      							<div className="intro-card">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-one.svg"> */}
                                 <img src={intro} className='img-fluid' />

      								</div>
      									<h5>What is Aleph Zero</h5>
      									<p>The basics of what is Aleph Zero and how it works.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-6 col-md-6 col-12">
      							<div className="intro-card">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-two.svg"> */}
                                 <img src={intro2} className='img-fluid' />

      								</div>
      									<h5>Aleph BFT</h5>
      									<p>The basics of what is Aleph Zero and how it works.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-6 col-md-6 col-12">
      							<div className="intro-card">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-three.svg"> */}
                                 <img src={intro3} className='img-fluid' />

      								</div>
      									<h5>WASM vs. EVM</h5>
      									<p>The basics of what is Aleph Zero and how it works.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-6 col-md-6 col-12 ">
      							<div className="intro-card">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-four.svg"> */}
                                 <img src={intro4} className='img-fluid' />

      								</div>
      									<h5>Liminal</h5>
      									<p>The basics of what is Aleph Zero and how it works.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
	      		</div>
      	</div>
       </div>
      </div>
      {/* <!--  --> */}


      <div className="custom-bg tutorial-section section-padding">
      		<div className="custom-wrapper">
      			<h2 className="heading-sec" data-aos="zoom-in-up"> <span>Developer </span>Resources</h2>
      			
      			<div className="tutorial-card" data-aos="zoom-in-up">
      			 	<div className="row">
  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<div className="tutorial-small-card">
  			 					<h2 className="side-border mt-2">Tutorials</h2>	
  			 				</div>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">Smart contracts</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Create PSP-22 from scratch</h4>
		 						<p>Make a basic smart contract.</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">Smart contracts</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Create PSP-22 using OpenBrush</h4>
		 						<p>Build the common token standard of PSP-22/ERC-20</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">Smart contracts</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Deploy your contracts</h4>
		 						<p>Learn how to deploy smart contracts on the Testnet Mainnet.</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">Smart contracts</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Cross-contract calls</h4>
		 						<p>Learn how to call other contracts</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">DevOps</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Install the dependencies</h4>
		 						<p>Set up all the prerequisites for your project</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="tutorial-small-card filled-card">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<span className="light-badge">Liminal</span>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<h4>Shielder</h4>
		 						<p>Experiment with a ZK app</p>
  			 				 </div>
  			 			   </a>
  			 			</div>
      			 	</div>
      			</div>	
      			{/* <!--  --> */}

      			<div className="tutorial-card">
      			 	<div className="row align-items-end">
  			 			<div className="col-lg-6 col-md-6 col-12">
  			 				<div className="tutorial-small-card" data-aos="zoom-in-up">
  			 					<h2 className="side-border mt-2">Powered by</h2>	
  			 				</div>
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec">
 								<p className="mt-5">Aleph Zero is a <b>layer 1 blockchain with a highly scalable architecture</b> with its own AlephBFT consensus mechanism. </p>
		 						</div>
		 						<div className="powered-list">
		 							<h5>Why did we choose it for Aleph Zero?</h5>
		 							<ul>
		 								<li>ink! possesses type and memory safety, which prevents overflows from occurring;</li>
		 								<li>Existing tools for Rust work for ink!;</li>
		 								<li>Inheritance by using Rust's traits;</li> 
		 								<li>Existing libraries may be used if they can be compiled with the no_std feature. This is one of the bigger advantages of ink!.</li>
		 							</ul>
		 						</div>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-6 col-md-6 col-12">
  			 				<a href="javascript:void(0);" className="mb-2">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Create PSP-22 using OpenBrush</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p className="my-1">Find your ways when coming from the Ethereum ecosystem</p>
  			 				 </div>
  			 			   </a>

  			 			   <a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Create PSP-22 using OpenBrush</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p className="my-1">Find your ways when coming from the Ethereum ecosystem</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

      			 	</div>
      			</div>	

      			{/* <!-- Tools sec --> */}
      				<div className="tutorial-card">
      			 	<div className="row">
  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<div className="tutorial-small-card" data-aos="zoom-in-up">
  			 					<h2 className="side-border mt-2">Tools</h2>	
  			 				</div>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>

  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<a href="javascript:void(0);">
  			 				<div className="Powered-by-small-card filled-card" data-aos="zoom-in-up">
		 						<div className="top-tutorial-sec d-flex justify-space-between">
 								<h4 className="m-0">Sol2Ink</h4>
 								<span className="lnr lnr-move"></span>
		 						</div>
		 						<p>Easy migration to ink! from Solidity</p>
  			 				 </div>
  			 			   </a>
  			 			</div>
      			 	</div>
      			</div>	
      			{/* <!-- //Tools section end --> */}

      			{/* <!-- Resource-sec -->/ */}
      			<div className="resource-sec pt-5 pb-5">
      				<div className="container">
      					<h2 className="heading-sec"><span>Additional </span>Resources</h2>
      					<div className="row">
      						<div className="col-lg-3 col-md-6 col-12">
      							<div className="intro-card" data-aos="fade-up">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-four.svg"/> */}
                                 <img src={testnet} className='img-fluid' />

      								</div>
      									<h5>Testnet</h5>
      									<p>Test your smart contracts before going to the Mainnet.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-6 col-12">
      							<div className="intro-card" data-aos="fade-up">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* {/* <img src="images/intro-four.svg"/> */}
                                  <img src={explorer} className='img-fluid' />

                                 
                                 
                                
      								</div>
      									<h5>Explorer</h5>
      									<p>Explore all the on-chain data. Powered by Subscan.</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-6 col-12">
      							<div className="intro-card" data-aos="fade-up">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-four.svg"/> */}
                                 <img src={wallets} className='img-fluid' />

      								</div>
      									<h5>Wallets</h5>
      									<p>Learn what wallets are available in the Aleph Zero ecosystem</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-6 col-12">
      							<div className="intro-card" data-aos="fade-up">
      								<div className="intro-content">
      									<div className="intro-icon">
      									{/* <img src="images/intro-four.svg"/> */}
                                 <img src={documentation} className='img-fluid' />

      								</div>
      									<h5>Documentation</h5>
      									<p>Read the full developer documentation</p>

      									<div className="poisition-btn">
      											<button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      			{/* <!-- // --> */}


      			{/* <!-- Uptodate-sec --> */}
      			<div className="stay-up-date pt-5 pb-5">
      				<div className="container">
      					<div className="row align-items-center">
      						<div className="col-lg-3 col-md-2 col-12">
      							<div className="up-to-date-heading">
      								<h2 className="side-border"><span>Stay </span>up to date</h2>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-2 col-12">
      							<div className="date-cards">
									<div className='d-flex justify-space-between'>
									<h4><span className="lnr lnr-book"></span> <BsDiscord/> Discord</h4>
									<span className="lnr lnr-move"></span>
									</div>
      								<p>Join #sc-support channel</p>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-2 col-12">
      							<div className="date-cards">
      							<div className='d-flex justify-space-between'>
									<h4><span className="lnr lnr-book"></span><BsGithub/> Github</h4>
									  <span className="lnr lnr-move"></span>
									  </div>

      								<p>The main code repository</p>
      							</div>
      						</div>

      						<div className="col-lg-3 col-md-2 col-12">
      							<div className="date-cards">
								  <div className='d-flex justify-space-between'>
      								<h4><span className="lnr lnr-sync"></span> Change Log</h4>
									  <span className="lnr lnr-move"></span>
									  </div>

      								<p>See the latest changes</p>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      			{/* <!-- //Update-end --> */}

				  <div class="b-top-line pt-2 pb-2 mt-5"></div>

      			{/* <!-- Ecosystem-sec --> */}
      			<div className="ecosystem-sec pt-5 pb-5">
      				<div className="conatiner">
      					<div className="row align-items-center">
      						<div className="col-lg-6 col-md-6 col-12">
      							<div className="left-sec-content" data-aos="fade-right">
      								<h2 className="heading-sec"><span>Ecosystem </span>Funding Program</h2>
      								<p className="mt-5">Have you mastered Aleph Zero already? The Aleph Zero Foundation welcomes developers in an Ecosystem Funding Program designed to support startups and ideas built on top of the network. Learn more and apply!</p>
      								<button className="btn btn-green">Learn More</button>
      							</div>
      						</div>
      						<div className="col-lg-6 col-md-6 col-12">
   								{/* <div className="right-side-img"> */}
   									{/* <img src="images/eco-circle.png" alt=""/> */}
									<div className='circle-side-img' data-aos="fade-left">
									<img src={eco} className='img-fluid' />
									</div>
   								</div>
      						</div>
      					</div>
      				</div>
      			</div>
      			{/* <!-- Secosystem-sec --> */}



      		</div>
      
            <div className="destination-sec">
     <div className="custom-wrapper">
         <div className="destination-content d-flex align-items-center justify-space-between">
             <h4>Have questions? join<strong>#sc-support channel</strong></h4>
             <div className="single-line"></div>
             <div className="btn-green">
               <span>Go to Discord <BsDiscord/></span>
             </div>
            </div>
            </div>
            </div>


       <footer className='footer_content'>
        <Footer />
       </footer>
    </>

  )
}
export default Builddev