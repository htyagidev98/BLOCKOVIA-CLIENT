import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import './coreteam.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import meetus from '../../assets/meet-us.jpeg'
import prize from '../../assets/top25-prize.svg'
import mycompany from '../../assets/my-company.svg'
import adam from '../../assets/cardinal-adam-gagol-bw.jpg'
import cardinal from '../../assets/cardinal.svg'
import career from '../../assets/careers.svg'
import ambassador from '../../assets/ambassadors.png'
import Footer from '../../common/footer/Footer'







const Coreteam = () => {
  return (
   <>
   
       <header className='header_content'>
        <Header/>
        <Navbar/>
       </header>

       <div className="mini-banner">
    <div className="custom-wrapper">
      <div className="banner-list">
        <h3>The <span>team</span></h3>
        <ul>
          <li> We want to see the world more fair and transparent. We are building the <br/>missing puzzles in order to
            see our vision come true.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="section-padding meet-us-section">
    <div className="custom-wrapper">
      <div className="row">
        <div className="col-md-6">
          <img src={meetus} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="intro-sec ps-md-4 ps-0">
            <h2 className="heading-sec">Meet <span>us!</span></h2>
            <p className="mt-5">The team working on Aleph Zero continues to grow and now consists of over 40 members
              contributing towards the network’s development and adoption.
            </p>
            <p className="mt-3">The list of previous accomplishments of individual Aleph Zero team members includes ACM ICPC
              World Finals, first prize in International Mathematics Competition, or Simons-Berkeley Research
              Fellowship.</p>
            <p className="mt-3">On the business front, the Aleph Zero team members gained experience at organizations such
              as IBM, ABB, Stellar, Codewise, Capgemini, ING Bank, Admind Agency, TIBCO Software, Google, Uber, or
              Riverbed Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-3 pb-5 award-section">
    <div className="custom-wrapper">
      <div className="slick-slider t-flex">
        <div className="slider-card ">
          <a href="#">
            <div className="card-detail">
              <div className="frst-img">
                <img src={prize} className="img-fluid" />
              </div>
              <div className="right-div">
                <h5>Best Startup</h5>
                <p>by<img src={mycompany} /></p>
                <div className="button-hidden">
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                      <path fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="slider-card">
          <a href="#">
            <div className="card-detail">
              <div className="frst-img">
                <img src={prize} className="img-fluid" />
              </div>
              <div className="right-div">
                <h5>Best Startup</h5>
                <p>by<img src={mycompany}/></p>
                <div className="button-hidden">
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                      <path fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="slider-card">
          <a href="#">
            <div className="card-detail">
              <div className="frst-img">
                <img src={prize} className="img-fluid" />
              </div>
              <div className="right-div">
                <h5>Best Startup</h5>
                <p>by<img src={mycompany}/></p>
                <div className="button-hidden">
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                      <path fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>

  <div className="static-number-section section-padding">
    <div className="custom-wrapper">
      <div className="row">
        <div className="static-card">
          <h4>47</h4>
          <p>Team members</p>
        </div>
        <div className="static-card">
          <h4>40 K+</h4>
          <p>Happy users and
            hodlers</p>
        </div>
        <div className="static-card">
          <h4>$15 M</h4>
          <p>in VC & community
            funding</p>
        </div>
        <div className="static-card">
          <h4>Grants</h4>
          <p>Dedicated towards
            ecosystem growth</p>
        </div>
        <div className="static-card">
          <h4>0,53 kg</h4>
          <p>Daily CO2 emission
            of one node</p>
        </div>
      </div>
    </div>
    <div className="gradient-bg-shape">

    </div>
  </div>

  <div className="section-padding team-section">
    <div className="custom-wrapper">
      <div className="tutorial-small-card">
        <h2 className="side-border my-0"><b>Founding</b> team</h2>
      </div>
      <div className="pt-5 row">
        <div className="col-lg-3 col-md-6 col-12 ">
          <div className="team-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <span className="phd">PhD</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 ">
          <div className="team-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <span className="phd">PhD</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 ">
          <div className="team-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <span className="phd">PhD</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 ">
          <div className="team-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <span className="phd">PhD</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="research-section">
    <div className="custom-wrapper">
      <div className="tutorial-small-card">
        <h2 className="side-border my-0"><b>Research</b> and development</h2>
      </div>
      <div className="row cardinal">
        <div className="col-md-6">
          <h3 className="cardinal-img"><img src={cardinal} /></h3>
          <div className="research-card">
            <a href="#">
              <div className="card-detail">
                <div className="frst-img">
                  <img src={prize} className="img-fluid"/>
                </div>
                <div className="right-div">
                  <h5>Best Startup</h5>
                  <p>by<img src="images/my-company.svg"/></p>
                  <div className="button-hidden">
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
                        </path>
                        <path fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-code">
            <p>Aleph Zero's core developer and a Web3 venture studio focused on incubating projects seeking to utilize
              the technology. Cardinal Cryptography, together with the Aleph Zero Foundation, provides research,
              development, and marketing support for anyone seeking to deploy on top of the network. </p>
            <a href="#" className="btn btn-green">Visit website<svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" className="ms-2 bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
                </path>
                <path fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
                </path>
              </svg></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cardinal-development section-padding">
    <div className="custom-wrapper">
      <div className="tutorial-small-card mb-5">
        <h2 className="side-border my-0"><b>Cardinal</b> <span className="text-clr">/</span> Development</h2>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cardinal-development marketing-bussiness section-padding ">
    <div className="custom-wrapper">
      <div className="tutorial-small-card mb-5">
        <h2 className="side-border my-0">Cardinal & AZF <span className="text-clr">/</span><b>Marketing & Business</b></h2>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row devlopment-row">
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card-devlopmnt">
            <div className="img-side">
              <img src="" />
            </div>
            <div className="right-side">
              <h5>Filip Bielejec</h5>
              <h6>Blockchain Developer</h6>
              <span className="phd">PhD</span>
            </div>
            <div className="btn-read-bio">
              <a href="#" className="btn-bio-des2">Read bio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section-padding advisor-section">
    <div className="custom-wrapper">
      <div className="tutorial-small-card">
        <h2 className="side-border my-0"><b>Advisors</b></h2>
      </div>
      <div className="pt-5 row">
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 ">
          <div className="team-card advisor-card">
            <div className="img-wrapper">
              <img src={adam} className="" />
            </div>
            <div className="team-bio-s">
              <h5 className="name">Adam Gągol</h5>
              <span className="role">Operations, business</span>
              <a href="#" className="btn-bio">Read bio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="partners-investor section-padding">
  <div className="custom-wrapper">
    <div className="tutorial-small-card mb-5">
      <h2 className="side-border my-0"><b>Partners</b> & <b>investors</b></h2>
    </div>
  </div>
  </div>
  <div className="join-us-section section-padding">
    <div className="custom-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="intro-sec ps-md-4 ps-0">
            <h2 className="heading-sec">Ready to <b>join us?</b></h2>
            <p className="mt-5">We invite you to familiarize yourself with our job offers which will put you at the
              forefront of Web3. Let's build it together; let's build it better.ass="mt-3"On the business front, the
              Aleph Zero team members gained experience at organizations such as IBM, ABB, Stellar, Codewise, Capgemini,
              ING Bank, Admind Agency, TIBCO Software, Google, Uber, or Riverbed Technology.
            </p>
            <a href="#" className="mt-4 common-btn">See all job offers<svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" className="ms-3 bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
                </path>
                <path fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
                </path>
              </svg></a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={career} />
        </div>
      </div>
    </div>
    <div className="gradient-bg-shape top">

    </div>
  </div>

  <div className="ambassador-program-section section-padding">
    <div className="custom-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="intro-sec ps-md-4 ps-0">
            <h2 className="heading-sec"> <b>Ambassador</b> Program</h2>
            <p className="mt-5">Support the Aleph Zero core team through community and marketing initiatives while
              accumulating rewards.</p>
            <a href="#" className="mt-4 common-btn">Learn more<svg className="ms-3" stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                </path>
              </svg></a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={ambassador} className="img-fluid" />
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
export default Coreteam