import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown, BsFillLightbulbFill, BsFlag, BsLightbulb} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './whyblockovia.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { TbBulb } from 'react-icons/tb'

const Whyblockovia = () => {
  return (
   <>
   
       <header className='header_content'>
        <Header></Header>
        <Navbar></Navbar>
       </header>
   


       <div className="mini-banner">
    <div className="custom-wrapper">
       <div className="banner-list">
          <h3> <span>Why</span>
          <strong className='ms-2 text-white'>Blockovia </strong>
</h3>

          <ul>
             <li><i className="icon-governance"></i>With the mainnet launch, Blockovia has seen a notable initial adoption 
               within the developer community. Our flexible environment will be
                familiar for builders who are already accustomed with Rust and the 
                Substrate stack.</li>
          </ul>
       </div>
    </div>
 </div>
        

         <section className='env_wrapper container-fluid pt-5 pb-5'>
    <div className="row">
       <div className="col-md-6">
          <div className=""></div>
       </div>
       <div className="col-md-6">
          <div className="env_img_content">
             
            
             <span className="data_content">
               <div className="inner_data">
                
                <p>Aleph Zero bridges the gap between scalability, security, developer friendliness, and cost of use. Moreover, the network will boast a native privacy stack to further enable you to build solutions that strike the balance between transparency and privacy.</p>
                 <div className="build_scale_data_button">

              </div>
                </div>
             </span>
            
          </div>
        
          
       </div>
    </div>
 </section>



             <section className="app_wrapper container-fluid">

         <div className="body" data-spy="scroll" data-target="#myScrollspy">

      <br/>

      <div className="container">
      <div className="row">
      <nav className="col-sm-3" id="myScrollspy">
      <div className="scroll_spy"  style={{position:"sticky" }}>
      {/* <div className="row"> */}
  <a class="list-group-item list-group-item-action" href="#list-item-1">Scalability</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Security</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Privacy</a>
  {/* <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a> */}
</div> 
{/* </div> */}

    </nav>
      <div className="col-sm-6">
        <div  id="list-item-1">
      <span className='common_line'></span>
      {/* <h1 >scalability</h1> */}

      <strong>Scalability </strong>
      <br/>
      <span>challenge</span>

              <p className='wallet_para'>It is widely known that the most popular blockchains, Bitcoin and Ethereum, are limited by scalability issues. With 3 to 15 transactions per second (TX/s), the technology is nowhere near what's required for mass adoption. The confirmation times in Bitcoin are also still counted in minutes, rather than in milliseconds.
              Some protocols are—in theory—much faster than Visa or MasterCard. The only downside is that they do so in a private, closed environment. If we are debating whether digital assets can be adopted worldwide as a standard payment system, or whether we're focused on deploying scalable decentralized applications, we need to build them utilizing a proper medium.

              </p>
              <br/>  
           <span>Solution</span>
           <p>Aleph Zero—as a platform—ensures instant finality and is capable of efficient scaling on both the consensus protocol level as well as a smart contracts platform. These numbers will permit the network to handle a large number of users, making it suitable for the future use cases to be deployed on-chain</p>
           </div>
 


    <div id="list-item-2">
    <span className='common_line'></span>
    <strong >Security </strong>
    <br/>
    <span><BsFlag/> Challenge</span>
  

          <p>Although distributed ledger technologies are considered—by the general public—as more secure than conventional networks thanks to their decentralization, the practical evidence speaks otherwise. While Bitcoin might be regarded as relatively safe due to its network size, smaller networks are being attacked on a daily basis.

          One primary challenge of the majority of current DLTs lies in analyzing the security of their chosen consensus protocol. Double spending, 51%, and Denial-of-Service attacks are possible vulnerabilities of blockchains and are essential to understand before deciding to deploy on a particular network.</p>

          <br/>
          <span><TbBulb/> Solution</span>
          <p>To ensure maximum theoretical security guarantees, Aleph Zero boasts novel AlephBFT consensus protocol. Aleph Zero can tolerate up to 33% of malicious committee members without affecting the validation process. Each transaction is confirmed as soon as 67% of the members agree upon it. A crucial element of the Aleph Zero network is its asynchronicity which does not rely on any timing assumptions and ensures that all honest transactions will be confirmed even during times of total asynchrony of the network. Additionally, Aleph Zero aims to be decentralized and is leaderless. It does not have a single node in control of creating a total ordering of units at any stage of the process. The outcome is both distributed denial of service resilience and easy protocol recovery after the network partitions.</p>
          </div>

          <div id="list-item-3">
          <span className='common_line'></span>
          <strong className='ms-2 text-white'>Privacy </strong>
          <br/>
          <span><BsFlag/> Challenge</span>
          <p>Current internet policies have turned all of us into data commodities that are up for sale to the highest bidder. It is one of the gravest challenges facing the contemporary internet with many voices demanding that control be put back into the hands of the user.

          Blockchain technology is poised to answer these calls with security measures that guarantee utmost privacy with social accountability.</p>

          <br/>
          <span><TbBulb/> Solution</span>
          <p>ZK-SNARKs are typically used for the private computation on user-owned data records, while MPC enhances this computation model by adding the concept of 'global secrets' - personal data that is controlled by smart contracts and allows for private multi-user interaction. Such a joined privacy model permits implementing multi-user systems such as private voting, auctions, or DeFi protocols.</p>

    </div>  
      </div>
      </div>
      </div>
      </div>


      <div className="destination-sec">
     <div className="custom-wrapper">
         <div className="destination-content d-flex align-items-center justify-space-between">
             <h4> <strong>Build</strong> on Blockovia</h4>
             <div className="single-line"></div>
             <div className="btn-green">
               <span>Build now!</span>
             </div>
            </div>
            </div>
            </div>
      <footer className="footer_content">
        <Footer />
      </footer>
      </section>

     


</>
  )
}
export default Whyblockovia