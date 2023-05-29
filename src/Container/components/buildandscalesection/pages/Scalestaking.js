import React from "react";
import {BsArrowRight,BsCameraVideo,BsFileArrowDown, BsPlay} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import layersImg from '../../../assets/icon-staking.svg';
import heroImg from '../../../assets/sunnyLogo.png';
import keepStaking from '../../../assets/keep-staking.svg';
import getStaking from '../../../assets/get-staking.svg';
import friendlyStaking from '../../../assets/friendly-staking.svg';
import stayStaking from '../../../assets/stay-staking.svg';
import validatorStaking from '../../../assets/validator-staking.svg';
import novaStake from '../../../assets/nova-stake.svg';
import talisman from '../../../assets/talisman.svg';

import subWallet from '../../../assets/subwallet.svg'; 
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'
import './scalestaking.css'
import Footer from "../../../common/footer/Footer.js";
const Scalestaking = () => {
return (
<>
<header className='header_content'>
<Header />
   < Navbar />
</header>
<div className="blue-bg-sec">
   <section className="staking_section section-padding-100">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
               <p className="mt-3 staking_para">Staking</p>
               <div className="staking_data_section">
                  <h3>
                     <span className="scalable_span">Secure the network,</span><br/>
                     <strong>Get more Blockovia.</strong>
                  </h3>
                  <span className="line_style mb-5"></span>
                  
                  <button className="scroll_down_img green-btn"> Become a validator </button>
                 
                  <button className="scroll_down_img transparent-btn ms-2"> Become a nominator</button>
               </div>
            </div>
            <div className="col-md-6 mx-auto">
               <div className="staking_image_section text-center" data-aos="fade-left">
                  <img src={heroImg} alt="hero_image_" className="img-fluid"/>
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
                           <span className="ms-2"> What is staking</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section2">
                           <BsArrowRight/>
                           <span className="ms-2"> Being a validator</span>
                        </a>
                     </li>
                     {/* 
                  </div>
                  */}
                  <div className="row">
                     <li>
                        <a href="#section3">
                           <BsArrowRight/>
                           <span className="ms-2"> Being a nominator</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section4">
                           <BsArrowRight/>
                           <span className="ms-2"> Staking details</span>
                        </a>
                     </li>
                  </div>
                  {/* 
                  <li className="dropdown">
                     <a className="dropdown-toggle" data-toggle="dropdown" href="#">Section 4 <span className="caret"></span></a>
                     <ul className="dropdown-menu">
                        <li><a href="#section41">Section 4-1</a></li>
                        <li><a href="#section42">Section 4-2</a></li>
                     </ul>
                  </li>
                  */}
               </ul>
            </nav>
            <div className="col-sm-8">
               <div id="section1" data-aos="fade-right">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-4">
                        <div className="left-img-scrollspy">
                           <img src={layersImg} alt="LayersImg" className="img-fluid"/>
                        </div>
                     </div>
                     <div className="col-lg-9 col-md-8 col-8">
                        <div className="scrollspy-info">
                           <p>
                              Staking is the heart of the mechanism that makes Proof-of-Stake blockchains feasible. Through this process, validators verify the truthfulness of the transactions, whereas nominators vouch for the validator's honesty. Both groups involved must stake their tokens, introducing an economic incentive for remaining honest. This process allows Proof-of-Stake blockchains to remain both decentralized and financially feasible.
                              For assisting in maintaining the decentralized structure of the blockchain and verifying the transactions, validators and nominators are compensated for providing this service.
                              Learn more about the roles validators and nominators play in the Aleph Zero ecosystem by watching our video on Decentralized Governance.          
                           </p>
                           <button className="staking_first_section_button green-transparent" >
                              <span className="scroll_down_img"> </span> 
                              <BsPlay/>
                              Watch video 
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="row mt-5">
                     <div className="col-md-6 mx-auto hover_common " data-aos="fade-left">
                        {/* 
                        <NavLink to='#'>
                           */}
                           <div className="wallet_data_staking">
                              <div className="row">
                                 <div className="col-lg-3 col-md-3 col-3">
                                    <div className="icon-area">
                                       <img src={keepStaking} alt="Zero secure" className="img-fluid"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-9 col-md-9 col-9">
                                    <div className="hover_effect">
                                       <div className="top_data">
                                          <h4>
                                             <strong className='top_data_heading text-white'>Keep Aleph Zero secure</strong>
                                          </h4>
                                       </div>
                                       <p className="wallet_para">
                                          With the ecosystem growth on the horizon, developers need your help to keep the network secure. Help doing so by staking and validating Aleph Zero!
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* 
                        </NavLink>
                        */}
                     </div>
                     <div className="col-md-6 mx-auto hover_common" data-aos="fade-left">
                        {/* 
                        <NavLink to='#'>
                           */}
                            <div className="wallet_data_staking">
                              <div className="row">
                                 <div className="col-lg-3 col-md-3 col-3">
                                    <div className="icon-area">
                                       <img src={getStaking} alt="Zero secure" className="img-fluid"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-9 col-md-9 col-9">
                                    <div className="hover_effect">
                                       <div className="top_data">
                                          <h4>
                                             <strong className='top_data_heading text-white'> Get rewarded</strong>
                                          </h4>
                                       </div>
                                       <p className="wallet_para">
                                       Earn rewards on your staked AZERO. The number of rewards is dependent on the current percentage of the supply staked and your chosen validator commission, as well as the network inflation.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* 
                        </NavLink>
                        */}
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6 mx-auto hover_common" data-aos="fade-left">
                        {/* 
                        <NavLink to='#'>
                           */}
                          <div className="wallet_data_staking">
                              <div className="row">
                                 <div className="col-lg-3 col-md-3 col-3">
                                    <div className="icon-area">
                                       <img src={friendlyStaking} alt="Zero secure" className="img-fluid"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-9 col-md-9 col-9">
                                    <div className="hover_effect">
                                       <div className="top_data">
                                          <h4>
                                             <strong className='top_data_heading text-white'>Environmentally friendly</strong>
                                          </h4>
                                       </div>
                                       <p className="wallet_para">
                                       Proof-of-stake blockchains like Aleph Zero are renowned for their energy efficiency, 
                                       allowing you to take part in building the decentralized Internet while minimizing your
                                        ecological impact.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* 
                        </NavLink>
                        */}
                     </div>
                     <div className="col-md-6 mx-auto hover_common" data-aos="fade-left">
                        {/* 
                        <NavLink to='#'>
                           */}
                           <div className="wallet_data_staking">
                              <div className="row">
                                 <div className="col-lg-3 col-md-3 col-3">
                                    <div className="icon-area">
                                       <img src={stayStaking} alt="Zero secure" className="img-fluid"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-9 col-md-9 col-9">
                                    <div className="hover_effect">
                                       <div className="top_data">
                                          <h4>
                                             <strong className='top_data_heading text-white'>Stay honest</strong>
                                          </h4>
                                       </div>
                                       <p className="wallet_para">
                                       There is no automatic slashing on Aleph Zero yet. Every instance of 
                                       slashing needs to be explicitly approved by Aleph Zero Foundation (to be
                                        replaced by decentralized governance as soon as possible).
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* 
                        </NavLink>
                        */}
                     </div>
                  </div>
               </div>

               <div class="b-top-line pt-2 pb-2 mt-5"></div>

               <div id="section3">

               <div className="row">
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="icon-area">
                        <img src={validatorStaking} alt="Zero secure" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-10">
                    <div className="hover_effect">
                        <div className="top_data">
                          <h4>
                              <strong className='top_data_heading text-white'>validator</strong>
                          </h4>
                        </div>
                        <p className="wallet_para">
                       <p>Validators on the Aleph Zero network are responsible for ensuring the security and veracity of the 
                        transactions conducted on the network.</p>
                        <p>Our goal is to decentralize this process as soon as possible and allow the community to decide on 
                          the necessary required minimal stake.</p>
                          <p> To become a validator, you must undergo a verification process that can be initiated by applying through a
                         special form.</p> 
                         <p>Note that the rewards for validators are <a className="green-color" href="javascript:void(0);">generated via the network inflation.</a></p>
                        </p>
                    </div>
                  </div>
              </div>

              <div className="stake-section-value mt-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className="stake-list">
                        <ul>
                          <li>
                            <label>Minimum stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">25,000 AZERO</label>
                          </li>
                          <li>
                            <label>Hardware required</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">YES</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="learn-btn text-end">
                          <button className="green-btn">Learn how to</button>
                        </div>
                    </div>
                  </div>
              </div>
              
               </div>
               <div id="section4">
               <div className="row">
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="icon-area">
                        <img src={validatorStaking} alt="Zero secure" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-10">
                    <div className="hover_effect">
                        <div className="top_data">
                          <h4>
                              <strong className='top_data_heading text-white'>Nominator</strong>
                          </h4>
                        </div>
                        <p className="wallet_para">
                       <p>The second crucial role in the Aleph Zero network is that of the nominator. Their job is to vouch for validators by delegating their AZERO stake to them. There are two ways of nominating within the Aleph Zero platform; 
                        one is called "direct nomination,” and the other is known as "pooled nomination."</p>

                        <p>Direct nomination requires prospective nominators to own at least 2000 AZERO and to simply vote on their chosen validator. Bear in mind that the minimum bond for direct nomination might increase in the future; for this reason,
                           it is recommended that you use nomination pools, even if you nominate more than 2000 AZERO.</p>

                          <p> Nomination pools are a new way of staking that allows multiple users to act as a single
                             nominator. No trust is required between the users in a single pool, and no security is lost through this method. Nomination pools are open to holders who own at least 10 AZERO. We adopted nomination pools to <a className="green-color" href="javascript:void(0);">increase the scalability of the network </a>as it allows more users to participate in the nominating process. </p>

                             <p>Regardless of the wallet you choose, all of them operate natively on our chain, making it a simple process to switch wallets and perform other actions such as staking.</p> 
                         <p>Note that the rewards for nominators are<a className="green-color" href="javascript:void(0);">generated via the network inflation.</a></p>
                        </p>
                    </div>
                  </div>
              </div>

              <div className="stake-section-value mt-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className="stake-list">
                        <ul>
                          <li>
                            <label>Minimum stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">25,000 AZERO</label>
                          </li>
                          <li>
                            <label>Hardware required</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">YES</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="learn-btn text-end">
                          <button className="green-btn">Learn how to</button>
                        </div>
                    </div>
                  </div>
              </div>

                  <div className="details stake-card-section section-padding">
                     <h6 className="details text-center" data-aos="fade-up">You can also stake your AZERO via:</h6>
                     <div className="row">
                        <div className="col-md-6 hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={novaStake} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>
                        <div className="col-md-6 hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={subWallet} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>

                        <div className="col-md-6  hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={talisman} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>
                     </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="stake-list large-label">
                        <ul>
                          <li>
                            <label>Average staking rewards</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">11.37%</label>
                          </li>
                          <li>
                            <label>Staking ratio</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">71.52%</label>
                          </li>


                          <li className="mt-5">
                            <label><span className="green_dot me-2"></span>Validators stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">31,685,540</label>
                          </li>
                          <li>
                            <label> <span className="white_dot me-2"></span> Nominators stake</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">203,369,744</label>
                          </li>

                          <li>
                            <label>Total issuance</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">332,111,276</label>
                          </li>

                          <li className="mt-5">
                            <label>Total validators</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">124</label>
                          </li>
                          <li>
                            <label>Total nominators</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">15,852</label>
                          </li>
                        </ul>
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
   <Footer> </Footer>
</footer>
{/* </div> */}
</>
);
}
export default Scalestaking