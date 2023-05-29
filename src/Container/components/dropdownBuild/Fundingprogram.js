import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import './fundingprogram.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import ecoSystem from '../../assets/ecosystem-video-cover-funding.jpeg';
import heroImg from '../../assets/sunnyLogo.png';
import validatorStaking from '../../assets/validator-staking.svg';
// import novaStake from '../../assets/nova-stake.svg';
// import subWallet from '../../assets/subwallet.svg'; 
import fundingLayerOne from '../../assets/funding-layer-one.svg'; 
import fundingLayerTwo from '../../assets/funding-layer-two.svg'; 
import fundingLayerThree from '../../assets/funding-layer-three.svg'; 
import developerFunding from '../../assets/developer-funding.svg'; 
import fundingEducation from '../../assets/funding-education.svg'; 
import fundingDefi from '../../assets/funding-defi.svg'; 
import fundingSustainability from '../../assets/funding-sustainability.svg'; 
import fundingDao from '../../assets/funding-dao.svg'; 
import fundingTutorial from '../../assets/funding-tutorial.svg'; 
import fundingMetversa from '../../assets/funding-metvera.svg'; 
import fundingAws from '../../assets/funding-aws.svg'; 
const Fundingprogram = () => {
return (
<>
<header className='header_content'>
<Header/>
   <Navbar/>
</header>
<div className='blue-bg-sec'>
   <section className="staking_section section-padding-100">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
               <div className="staking_data_section">
                  <h3>
                     <span className="scalable_span">Ecosystem</span><br/>
                     <strong>Funding Program</strong>
                  </h3>
                  <span className="line_style mb-3"></span>
                  <p>Learn how the Ecosystem Funding Program initiative supports projects that contribute to the growth and adoption of Aleph Zero ecosystem. </p>
                  <button className="scroll_down_img green-btn mt-2"> Apply to EFP </button>
               </div>
            </div>
            <div className="col-md-6 mx-auto">
               <div className="staking_image_section text-center" data-aos="fade-left">
                  <img src={ecoSystem} alt="hero_image_" className="img-fluid"/>
               </div>
               <div className="span_line">
               </div>
            </div>
         </div>
      </div>
   </section>
   <div className="body" data-spy="scroll" data-target="#myScrollspy" data-offset="15">
      <br/>
      <div className="container mini1200container">
         <div className="row">
            <nav className="col-sm-4" id="myScrollspy">
               <ul className="scroll_spy custom-scroll-spy"  style={{position:"sticky" }}>
                  {/* 
                  <div className="row">
                     */}
                     <li>
                        <a href="#section1">
                           <BsArrowRight/>
                           <span className="ms-2">The purpose</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section2">
                           <BsArrowRight/>
                           <span className="ms-2"> Program resources</span>
                        </a>
                     </li>
                     {/* 
                  </div>
                  */}
                  <div className="row">
                     <li>
                        <a href="#section3">
                           <BsArrowRight/>
                           <span className="ms-2"> Available grants</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section4">
                           <BsArrowRight/>
                           <span className="ms-2"> Consideration criteria</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section5">
                           <BsArrowRight/>
                           <span className="ms-2"> Request for proposals</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section6">
                           <BsArrowRight/>
                           <span className="ms-2"> Evaluation process</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section7">
                           <BsArrowRight/>
                           <span className="ms-2"> EFP supporters</span>
                        </a>
                     </li>
                     <button className="scroll_down_img transparent-btn mt-4">Apply to EFP</button>
                  </div>
               </ul>
            </nav>
            <div className="col-sm-8">
               <div id="section1">
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>The purpose</span> of the program</h4>
                     <p>
                        The goal of the Aleph Zero Ecosystem Funding Program is to fund innovations from developer teams that expand the capabilities, functionalities, and adoption of the Aleph Zero blockchain. Project ideas can range from proof-of-concept and early-stage companies to experienced teams with solutions deployed on different platforms.        
                     </p>
                  </div>
                  <div className='funding-program-card mt-5'>
                     <h5 className='ecosystem-heading'>Ecosystem Funding Program</h5>
                     <div className='row align-items-center mx-auto'>
                        <div className='col-lg-3 col-12'>
                           <div className='mini-funding-card'>
                              <h4>Grant</h4>
                              <p>by the Aleph Zero Foundation</p>
                           </div>
                        </div>
                        <div className='col-lg-1 col-12'>
                           <div className='plus-icon text-center'>
                              <i class="fa-sharp fa-solid fa-plus"></i>
                           </div>
                        </div>
                        <div className='col-lg-3 col-12'>
                           <div className='mini-funding-card'>
                              <h4>Incubation</h4>
                              <p>by the core team and Aleph Zero partner network</p>
                           </div>
                        </div>
                        <div className='col-lg-1 col-12'>
                           <div className='plus-icon text-center'>
                              <i class="fa-sharp fa-solid fa-plus"></i>
                           </div>
                        </div>
                        <div className='col-lg-3 col-12'>
                           <div className='mini-funding-card'>
                              <h4>Follow-up</h4>
                              <p>by angel and venture capital investments</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="b-top-line pt-2 pb-2 mt-5"></div>
               <div id="section2">
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>EFP</span> resources</h4>
                     <p>
                        The Ecosystem Funding Program consists of a broad range of initiatives that support the development of your idea–from grants, to know-how.   
                     </p>
                  </div>
                  <div className='epp-cards mt-5'>
                     <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                           <div className='epp-mini-card light-cards'>
                              <h5 className='text-white funding-title mb-4'>  <span className='f-bold'>Early </span> stage</h5>
                              <ul>
                                 <li>Legal and operational workshops</li>
                                 <li>Early-stage token-free and equity-free grants</li>
                                 <li>Access to venture capital and angel investors</li>
                                 <li>Economy design workshops</li>
                                 <li>Fundraise structuring workshops</li>
                              </ul>
                           </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                           <div className='epp-mini-card light-cards'>
                              <h5 className='text-white funding-title mb-4'>  <span className='f-bold'>R&D </span> stage</h5>
                              <ul>
                                 <li>Research and development workshops</li>
                                 <li>Security design support</li>
                                 <li>Infrastructure resources</li>
                                 <li>Code audits</li>
                                 <li>Front-end product management</li>
                                 <li>UX workshops</li>
                              </ul>
                           </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                           <div className='epp-mini-card light-cards'>
                              <h5 className='text-white funding-title mb-4'>  <span className='f-bold'>Launch  </span> stage</h5>
                              <ul>
                                 <li>Marketing support</li>
                                 <li>Active community eager to welcome any ambitious project</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="b-top-line pt-2 pb-2 mt-5"></div>
               <div id="section3">
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>Available </span> pool of support</h4>
                  </div>
                  <div className='usd-card text-center mb-5'>
                     <p className='mb-0'>THE GRANTS AND INVESTMENTS POOL:</p>
                     <h1>50 million USD</h1>
                  </div>
                  <p>The grants will be distributed in various tiers, depending on several factors, depending on your project's needs and the applicability of the idea.</p>
                  <p>Following application, verification, and the approval process, grant tiers are chosen by the project team in conjunction with the representatives of the Aleph Zero Foundation.</p>
                  <div className='row mt-5'>
                     <div className='col-lg-4 col-md-4 col-12'>
                        <div className='light-cards tiers-cards text-center'>
                           <img src={fundingLayerOne} alt='Funding-Layer' className='img-fluid my-3'/>
                           <h3 className='text-white mb-4 text-white'> Tier 1</h3>
                           <span class="line_style mb-3"></span>
                           <h5 className='mini-badge'>$10-50K</h5>
                           <p>for simpler projects, basic tooling improvements, research work, education, events, and more</p>
                        </div>
                     </div>
                     <div className='col-lg-4 col-md-4 col-12'>
                        <div className='light-cards tiers-cards text-center'>
                           <img src={fundingLayerTwo} alt='Funding-Layer' className='img-fluid my-3'/>
                           <h3 className='text-white mb-4 text-white'> Tier 2</h3>
                           <span class="line_style mb-3"></span>
                           <h5 className='mini-badge'>$150K</h5>
                           <p>For regular applications needed throughout the ecosystem, more complex tooling, larger-scale developer conferences</p>
                        </div>
                     </div>
                     <div className='col-lg-4 col-md-4 col-12'>
                        <div className='light-cards tiers-cards text-center'>
                           <img src={fundingLayerThree} alt='Funding-Layer' className='img-fluid my-3'/>
                           <h3 className='text-white mb-4 text-white'> Tier 3</h3>
                           <span class="line_style mb-3"></span>
                           <h5 className='mini-badge'>$500K</h5>
                           <p>For projects and initiatives providing significantly more value and visibility to Aleph Zero</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="b-top-line pt-2 pb-2 mt-5"></div>
               <div id="section4">
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>Consideration  </span> criteria</h4>
                     <p>Any project that adds value to the Aleph Zero ecosystem is welcome to apply. However, we are particularly interested in supporting teams focused on use cases leveraging the unique features of Aleph Zero. These can range from novel ZK-SNARK applications, DeFi use cases, to improvements on the network</p>
                  </div>
                  <div className='row mt-5'>
                     <div className='col-lg-6 col-md-6 col-12'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Adoption</h5>
                                 <p>As the Aleph Zero’s Foundation mission is to further the usefulness and adoption of the network, grants will be awarded to projects seeking to honestly increase the level of network’s usage and utility.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Anonymity</h5>
                                 <p>While it’s okay for you to remain anonymous in public, the Aleph Zero Foundation will need to execute a KYC/KYB background check before making the decision about providing you with grant funds.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Ability to execute</h5>
                                 <p>Experience, skills, or the ability to learn quickly are what’s being considered by the grant committee in approving your application.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Milestones</h5>
                                 <p>While reaching out and indicating your interest initially is okay, the Aleph Zero Foundation will not consider applications from projects without a clear cost breakdown and a clear development plan/roadmap.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Uniqueness</h5>
                                 <p>the Aleph Zero Foundation prioritizes unique use cases. </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Sanctioned jurisdictions</h5>
                                 <p>unfortunately, grants cannot be provided to builders from sanctioned jurisdictions.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 mb-4'>
                        <div className='row'>
                           <div className='col-lg-1 col-md-1 col-12'>
                              <div className='check-icon'>
                                 <span class="lnr lnr-checkmark-circle"></span>
                              </div>
                           </div>
                           <div className='col-lg-11 col-md-11 col-12'>
                              <div className='criteria-card'>
                                 <h5>Open Source or Open Learning</h5>
                                 <p>while not all projects will be able to open-source the entirety of their code, we do strongly recommend doing so if possible. If your project doesn’t require code, please ensure you share your learnings along the way for the benefit of the broader community.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="b-top-line pt-2 pb-2 mt-5"></div>
               <div id="section5" className='section-padding'>
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>Request</span> for proposals</h4>
                     <p className='global-pera'>The Ecosystem Funding Program is designed to support any activities leading to further adoption of the Aleph Zero network. While new products are the cornerstone of making Aleph Zero network the go-to platform for developers and users, several categories can be supported by the EFP. Details on RFPs are to come in the near future.</p>
                  </div>
                  <div className="small_cards_section mt-5">
                     <div className="row">
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={developerFunding} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Developer Tooling</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingEducation} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Education</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingDefi} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Private DeFi apps</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingSustainability} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Sustainability</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingDao} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>DAO Tooling</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingTutorial} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Academic Research</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-3 col-12 hover_common">
                           <div className="stake-card">
                              <div className=" d-flex align-items-center">
                                 <div className="top_data">
                                    <img src={fundingMetversa} alt="Stake-img" className="img-fluid"/>
                                 </div>
                                 <div className='proposal-content'>
                                    <h5 className='mb-0'>Metaverse</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="b-top-line pt-2 pb-2 mt-5"></div>
               <div id="section6" className='section-padding'>
                  <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>Application</span> process</h4>
                     <p className='global-pera'>The Ecosystem Funding Program application review takes approximately 3 weeks, but it can also take longer depending on the complexity of your submission and project.</p>
                     <p className='global-pera'>The best projects that complete the Ecosystem Funding Program may be chosen to pitch Aleph Zero’s VCs and secure further funding. There are also opportunities to have your project audited or receive marketing support.</p>
                     <p className='global-pera'><strong>Submissions should include information about deliverables, projected milestones, and justification for funding requests.</strong> Possible deviations from the specified scope of the project should be discussed with the Aleph Zero Foundation.</p>
                  </div>

                  <div className='application-border-cards mt-5'>
                     <div className='row'>
                        <div className='col-lg-3 col-md-3 col-12 line-bg'>
                           <div className='application-cards'>
                              <h4>Application</h4>
                              <p className='global-pera'>You send the application to the Aleph Zero Foundation</p>
                           </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-12 line-bg'>
                           <div className='application-cards'>
                              <h4>Evaluation</h4>
                              <p  className='global-pera'>The Foundation evaluates the project according to the criteria</p>
                           </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-12 line-bg'>
                           <div className='application-cards'>
                              <h4>Pitch</h4>
                              <p  className='global-pera'>After successful verification, you'll pitch the project to the Foundation</p>
                           </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-12'>
                           <div className='application-cards'>
                              <h4>Decision</h4>
                              <p  className='global-pera'>We'll get back to you with the decision in ~3 weeks.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="b-top-line pt-2 pb-2 mt-5"></div>

               <div id="section7" className='section-padding'>
               <div className="scrollspy-info">
                     <h4 className='text-white funding-title mb-4'> <span class="common_line me-2"> </span> <span className='f-bold'>EFP</span> supporters</h4>
                  </div>

                  <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
                           </div>
                        </div>
                     </div>
                     </div>

                     <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
                           </div>
                        </div>
                     </div>
                     </div>

                     <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
                           </div>
                        </div>
                     </div>
                     </div>

                     <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
                           </div>
                        </div>
                     </div>
                     </div>

                     <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
                           </div>
                        </div>
                     </div>
                     </div>

                     <div className='logo-infocards'>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-img text-center'>
                              <img src={fundingAws} alt='Aws-logo' className='img-fluid'/>
                           </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                           <div className='logo-content-info py-5 text-center'>
                                 <p className='global-pera mb-0'>A program covering infrastructure and growth costs of select Aleph Zero projects with AWS credits worth up to $100,000.</p>
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

<footer className="footer_content">
   <Footer>
   </Footer>
</footer>
</>
);
}
export default Fundingprogram