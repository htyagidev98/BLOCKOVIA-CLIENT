import React from "react";
import { NavLink } from "react-router-dom";
// import BsFillEnvelopePlusFill from '../../assets/letter-b.png'
import footercardlogo from '../../assets/logo-img.png';

import {
  BsDiscord,
  BsArrowUpRight,
  BsFillEnvelopePlusFill,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsTelegram,
  BsTwitter,
  BsYoutube,
 
  BsGlobe,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TbGlobe, TbMail } from "react-icons/tb";

import "./footer.css";
const Footer = () => {
  return (
    <>
    <div className="container">
      <section className="footer_wrapper pt-5 pb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="footer_left_data ">
              <h3 className="text-white">
                <span>Be</span>
                <strong className="ms-2 text-white">future-ready </strong>
              </h3>

              <p className="footer_para">
                Get the latest from the Blockovia ecosystem and engineering
                updates, straight to your inbox.
              </p>
              <div className="footer_form" style={{ verticalAlign: "super" }}>
                <form>
                  <input
                    type="email"
                    name="f_em"
                    required=""
                    placeholder="Your email"

                  />
                  <button className="footer_left_button">
                    <BsFillEnvelopePlusFill />
                    subscribe
                  </button>
                </form>
              </div>

              <br />
              <div className="footer_para d-flex align-items-start">
                <input
                  type="checkbox"
                  id="fnf"
                  name="n_ch"
                  required=""
                  data-parsley-multiple="n_ch"
                ></input>
                <label for="fnf" className="ms-2 ">
                  I consent to receive commercial information in the form of a
                  newsletter sent to the e-mail address provided by the
                  Blockovia Foundation with registered seat in Bergliweg 15,
                  6300 Zug. Providing consent is voluntary. Consent may be
                  revoked at any time.
                </label>
              </div>
              <div
                className="flex-container"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  width: "100px",
                  fontSize: "10px",
                }}
              >
                {/* <ul >
                  <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a href="https://discord.gg/alephzero" target="_blank">
                    <BsDiscord />
                  </a>
                </div>
                {/* </li> */}
                {/* <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a
                    href="https://t.me/AlephZeroFoundation"
                    target="_blank"
                    className="a0-btn-inline a0-btn-inline--text-night-100"
                  >
                    <BsTelegram />
                  </a>
                </div>
                {/* </li> */}
                {/* <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a
                    href="https://twitter.com/Aleph__Zero"
                    target="_blank"
                    className="a0-btn-inline a0-btn-inline--text-night-100"
                  >
                    <BsTwitter />
                  </a>
                </div>
                {/* </li> */}
                {/* <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a
                    href="https://www.linkedin.com/company/alephzero/"
                    target="_blank"
                    className="a0-btn-inline a0-btn-inline--text-night-100"
                  >
                    <BsLinkedin />
                  </a>
                </div>
                {/* </li>/ */}
                {/* <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a
                    href="https://www.reddit.com/r/AlephZero/"
                    target="_blank"
                    className="a0-btn-inline a0-btn-inline--text-night-100"
                  >
                    <BsReddit />
                  </a>
                </div>
                {/* </li> */}
                {/* <li> */}
                <div
                  className="footer-socials"
                  style={{ paddingRight: "10px" }}
                >
                  <a
                    href="https://youtube.com/@AlephZero"
                    target="_blank"
                    className="a0-btn-inline a0-btn-inline--text-night-100"
                  >
                    <BsYoutube />
                  </a>
                </div>
                {/* </li> */}
                {/* <li> */}
                <a
                  href="https://www.instagram.com/alephzerofoundation/"
                  target="_blank"
                  className="a0-btn-inline a0-btn-inline--text-night-100"
                >
                  <BsInstagram />
                </a>
                {/* </li> */}
                {/* </ul> */}
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer_left_data">
              <h5 className="text-white">Explore</h5>
              <ul className="footer_para">
                <li><a href="/why-blockovia">Why Blockovia</a></li>
                <li><a href="/roadmap">Roadmap</a></li>
                <li><a href="/utility-economics">utility & Economics</a></li>
                <li><a href="/use-cases">Use Cases</a></li>
                <li>
                  <a href="https://docs.alephzero.org/aleph-zero/faq">FAQ <BsArrowUpRight /></a>
                </li>
                <li>
                  <a href="https://docs.alephzero.org/aleph-zero/explore/whitepapers">Whitepapers <BsArrowUpRight /></a>
                </li>
                <li><a href="/carbon-footprint">Carbon Footprint</a></li>
                <br />
                <li>
                  <a href="#"><p
                    className=" footer_network "
                  >
                    Network
                  </p>
                  </a>
                </li>
                <li>
                <a href="https://azero.dev/#/explorer">
                  Wallet
                  <BsArrowUpRight />
                  </a>
                </li>
                <li><a href="/staking">Staking</a></li>
                <li>
                  <a href="https://alephzero.subscan.io/">Explorer
                  <BsArrowUpRight /></a>
                </li>
                <li><a href="#">Ecosystem</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer_left_data">
              <h5 className="text-white">Build</h5>
              <ul className="footer_para">
                <li><a href="/funding-program">Funding Program</a></li>
                <li><a href="https://testnet.alephzero.org/">Testnet<BsArrowUpRight/></a></li>
                <br />
                <li>
                  <a href="#"><p className=" footer_network ">DEV SPACE</p></a>
                </li>
                <li><a href="/developers">Dev Portal</a></li>
                <li>
                  <a href="https://github.com/aleph-zero-foundation">Code repository
                  <BsArrowUpRight /></a>
                </li>
                <li>
                  <a href="https://docs.alephzero.org/aleph-zero/">Docunmentation
                  <BsArrowUpRight /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer_left_data">
              <h5 className="text-white">Community</h5>
              <ul className="footer_para">
                <li><a href="/social-platforms">Social Platforms</a> </li>
                <li><a href="/upcoming-events">Upcoming Events</a></li>
                <li><a href="/ambassador">Ambassador Program</a></li>
                <li><a href="/press-kit">Press / Media Kit</a></li>
                <li>
                  <a href="https://careers.alephzero.org/companies">Careers
                  <BsArrowUpRight /></a>
                </li>
                <li><a href="/core-team">Core Team</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-2" style={{ display: "grid" }}>
            <div className="footer_left_data">
              <h5 className="text-white">Content</h5>
              <ul className="footer_para">
                <li><a href="/blog">Blog</a></li>
                <li>
                  <a href="https://www.youtube.com/@AlephZero">Videos
                  <BsArrowUpRight /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            {/* <div className="col-md-6 mx-auto hover_common"> */}
            <div className="footer_left_data">
              <div className="hover_effect">
                <div className="footer_para">
                  <div className="footer-card pb-4">
                    <div className="d-flex align-items-center">
                    <div className="footer-card-logo me-4">
                     <img src={footercardlogo} alt="logo" className="img-fluid"/>
                    </div>
                    <div className="footer-card-content">
                    <span className="text-white">Blockovia Foundation </span>
                  <p className="footer_para py-1 my-2">
                  The Blockovia Foundation is responsible for overseeing the
                  development of Blockovia protocol. The Foundation is also the
                  issuer of the Blockovia coin.{" "}
                </p>
                    </div>
                    </div>
                  <div className="border-top-light">
                  <div className="footer_para py-1 my-2">
                  <div className="d-flex align-items-center justify-space-between pb-2">
                    <span>
                      <CiLocationOn />
                      Bergliweg 15, 6300 Zug, Switzerland{" "}
                    </span>
                      <p className="m-0">
                        <a
                          href="mailto:someone@example.com"
                          style={{ color: "#8896a1" }}
                        >
                          <TbMail /> someone@example.com
                        </a>
                      </p>{" "}
                      </div>
                  </div>
                  </div>

                  </div>
                </div>
               
              </div>
          
            </div>
          </div>

          <div className="col-md-6">
            {/* <div className="col-md-6 mx-auto hover_common"> */}
            <div className="footer_left_data">
              <div className="hover_effect">
                <div className="footer_para">
                  

                <div className="footer-card ">
                    <div className="d-flex align-items-center">
                    <div className="footer-card-logo me-4">
                     <img src={footercardlogo} alt="logo" className="img-fluid"/>
                    </div>
                    <div className="footer-card-content">
                    <span className="text-white">Cardinal Cryptography sp. z o.o. </span>
                  <p className="footer_para py-1 my-1">
                  The Blockovia Foundation is responsible for overseeing the
                  development of Blockovia protocol. The Foundation is also the
                  issuer of the Blockovia coin.{" "}
                </p>
                    </div>
                    </div>
                  <div className="border-top-light">
                  <div className="footer_para py-1 my-2">
                  <div className="d-flex align-items-center justify-space-between pb-1">
                    <span>
                      <CiLocationOn />
                      Zamoyskiego 79A, 30-519 Krakow, Poland{" "}
                    </span>
                     
                     <div className="address-sec">
                     <p>
                  <a href="www.google.com" style={{ color: "#8896a1" }}>
                    <BsGlobe /> www.google.com
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    href="mailto:someone@example.com"
                    style={{ color: "#8896a1" }}
                  >
                    <TbMail />
                    someone@example.com
                  </a>
                </p>

                     </div>
                      </div>
                  </div>
                  </div>

                  </div>








               
                </div>
                
              </div>
         
            </div>
           
       
          </div>

          <div class="b-top-line pt-2 pb-2 mt-5"></div>
          <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <p
                  className="footer_para m-0 footer-bottom-sec">
                  Aleph Zero Foundation © 2018-2023, design and development by
                  Cardinal
                </p>
                </div>

                <div className="col-md-6 col-12">
                <nav className="footer_para  text-end">
                  <ul className="nav justify-content-end">
                    <li>
                      <a
                        href="/privacy-policy"
                        className="footer_para me-5"
                        target="_self"
                        title="Privacy Policy"
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cookies-policy"
                        className="footer_para"
                        target="_self"
                        title="Cookies Policy"
                      >
                        <span>Cookies Policy</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                </div>
              </div>  
        </div>
      </section>
      </div>
    </>
  );
};

export default Footer;
