import React from "react";
import {
  BsArrowRight,
  BsBoxArrowUpRight,
  BsDot,
  BsFileArrowDown,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsReddit,
  BsYoutube,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./socialplatforms.css";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import Footer from "../../common/footer/Footer";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import JoinSection from "./JoinSection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../assets/angle-down-solid.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import { ReactComponent as Discord } from "../../assets/icons8-discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons8-twitter-24.svg";
import { ReactComponent as Blog } from "../../assets/blogicon.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { ReactComponent as LinkIcon } from "../../assets/linkicon.svg";
import {ReactComponent as LinkedIn} from '../../assets/linked.svg';
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import TopDesign from "./TopDesign";
import Separator from "./Separator";

import ambImg1 from "../../assets/amb-images-1.png";
import ambImg2 from "../../assets/amb-images-2.png";
import ambImg3 from "../../assets/amb-images-3.png";
import ambImg4 from "../../assets/amb-images-4.png";
import { Tilt } from "react-tilt";
import decorationBg from "../../assets/hero-ambassadors-decorations.png";

import ecosystem from "../../assets/ecosystem.png";
import bugbounty from "../../assets/bug-bounty.png";
import news1 from "../../assets/news1.jpg";
import avtar from "../../assets/avtar.jpeg";
import avtar2 from "../../assets/avtar2.png";
import news2 from "../../assets/news2.jpeg";
import news3 from "../../assets/news3.jpeg";
import CardNews from "./CardNews";

import video1 from "../../assets/video1.jpg";
import video2 from "../../assets/video2.png";
import video3 from '../../assets/video3.png'
import CardVideo from "./CardVideo";
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Github } from "react-bootstrap-icons";
const Socialplatforms = () => {
  const [accordion, setAccordion] = useState(false);

  const toggleAccordion = () => {
    setAccordion((prev) => !prev);
  };

  let cardData = [
    {
      icon: <Discord />,
      name: "Discord",
      value: "~12,600 members",
    },
    {
      icon: <Twitter />,
      name: "Twitter",
      value: "~137,000 followers",
    },
    {
      icon: <Blog />,
      name: "Blog",
      value: "~160 articles",
    },
    {
      icon: <Discord />,
      name: "Documentation",
      value: "~50 articles",
    },
    {
      icon: <BsLinkedin/>,
      name: "LinkedIn",
      value: "~2,920 followers",
    },
    {
      icon: <BsInstagram />,
      name: "Instagram",
      value: "~2,035 followers",
    },
    {
      icon: <BsYoutube />,
      name: "YouTube",
      value: "~1,300 subscribers",
    },
    {
      icon: <BsReddit />,
      name: "Reddit",
      value: "~1,900 subscribers",
    },
    {
      icon: <BsGithub />,
      name: "GitHub",
      value: "~136 followers",
    },
    {
      icon: <BsMailbox />,
      name: "Email",
      value: "hello@alephzero.org",
    },
  ];
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>
      {/* 
      <section className="dev_section container-fluid pt-5 pb-5">
        <div className="row align-items-center">
          <div className="col-md-5 mx-auto">
            <div className="dev_data_section">
              <span>
                <strong className="mt-2 text-white">Community</strong>{" "}
              </span>

              <span className="line_style"></span>
              <p className="app_para">
                The Aleph Zero community is a globally distributed home to
                developers, coin holders, and validators supporting the
                protocol.
              </p>
            </div>
          </div>
          <div className="span_line">
            <span></span>
          </div>
        </div>
        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>
                <span>Community </span>

                <strong className="ms-2 text-white">Platforms </strong>

                <p className="app_para">
                  Here's where you can engage with the community and get all the
                  latest updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>

                <strong className="ms-2 text-white">Ambassador </strong>
                <span> Program</span>

                <p className="app_para">
                  Support the Aleph Zero core team through community and
                  marketing initiatives while accumulating rewards.{" "}
                </p>
                <button className="app_left_button">
                  Learn More
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>

                <span> Ecosystem</span>
                <strong className="ms-2 text-white">Funding Program </strong>

                <p className="app_para">
                  The Aleph Zero Ecosystem continues to grow fast. We’re looking
                  to foster the development of projects on the network with a
                  dedicated funding program dedicated to the most interesting
                  initiatives.
                </p>
                <button className="app_left_button">
                  Learn More
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>

                <strong className="ms-2 text-white">Bug Bounty </strong>
                <span> Program</span>

                <p className="app_para">
                  Help us make the network better and safer. We’re offering
                  rewards for builders who find bugs and potential
                  vulnerabilities in our code.
                </p>
                <button className="app_left_button">
                  Coming Soon
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>
                <span> Latest</span>

                <strong className="ms-2 text-white">News </strong>

                <p className="app_para">
                  The following are our most frequented and updated
                  communication channels. You name it, we’ve got it!
                </p>
                <button className="app_left_button">
                  See all news
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="app_wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="app_right_data ">
                <span className="common_line"></span>
                <span> Latest</span>

                <strong className="ms-2 text-white">Video </strong>

                <p className="app_para">
                  The following are our most frequented and updated
                  communication channels. You name it, we’ve got it!
                </p>
                <button className="app_left_button">
                  Go to Youtube channel
                  <FaExternalLinkAlt />
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_content">
          <Footer />
        </footer>
      </section> */}

      <section className="Communitybanner">
        <Container>
          <div className="Communitybanner__text">
            <h1>Community</h1>
            <p>
              The Aleph Zero community is a globally distributed home to
              developers, coin holders, and validators supporting the protocol.
            </p>
          </div>
        </Container>
      </section>

      <section className="communityPlatform">
        <TopDesign />
        <Container>
          <Row>
            <Col md="4">
              <div className="communityPlatform__left">
                <h2>
                  Community <b>platforms</b>
                </h2>
                <p className="mt-4">
                  Here's where you can engage with the community and get all the
                  latest updates.
                </p>
              </div>
            </Col>
            <Col md="8">
              <div className="communityPlatform__right">
                <div className="customAccordion">
                  <div
                    className={`customAccordion__head ${
                      accordion === true ? "active" : ""
                    }`}
                    onClick={toggleAccordion}
                  >
                    <div className="customAccordion__head__left">
                      <h4>
                        <Telegram />
                        &nbsp; Telegram
                      </h4>
                      <p>~16,000 members</p>
                    </div>
                    <button className="acc-icon">
                      <ArrowDown />
                    </button>
                  </div>
                  {accordion && (
                    <div className="customAccordion__body">
                      <div className="customAccordion__content">
                        <h5>Official</h5>

                        <ul className="customAccordion__list">
                          <li>
                            <Link to="/">Aleph Zero Announcements</Link>
                          </li>
                          <li>
                            <Link to="/">Main Channel</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="customAccordion__content">
                        <h5>UnOfficial</h5>

                        <ul className="customAccordion__list">
                          <li>
                            <Link to="/">Africa (English speaking)</Link>
                          </li>
                          <li>
                            <Link to="/">Hungary</Link>
                          </li>
                          <li>
                            <Link to="/">Japan</Link>
                          </li>
                          <li>
                            <Link to="/">Poland</Link>
                          </li>
                          <li>
                            <Link to="/">Spain</Link>
                          </li>
                          <li>
                            <Link to="/">Arabic</Link>
                          </li>
                          <li>
                            <Link to="/">Brasil and Portugal</Link>
                          </li>
                          <li>
                            <Link to="/">India</Link>
                          </li>
                          <li>
                            <Link to="/">Malaysia</Link>
                          </li>
                          <li>
                            <Link to="/">Romania</Link>
                          </li>
                          <li>
                            <Link to="/">Turkey</Link>
                          </li>
                          <li>
                            <Link to="/">France</Link>
                          </li>
                          <li>
                            <Link to="/">Indonesia</Link>
                          </li>
                          <li>
                            <Link to="/">Netherlands</Link>
                          </li>
                          <li>
                            <Link to="/">Russia</Link>
                          </li>
                          <li>
                            <Link to="/">Vietnam</Link>
                          </li>
                          <li>
                            <Link to="/">Germany</Link>
                          </li>
                          <li>
                            <Link to="/">Italy</Link>
                          </li>
                          <li>
                            <Link to="/">Pakistan</Link>
                          </li>
                          <li>
                            <Link to="/">South Korea</Link>
                          </li>
                          <li>
                            <Link to="/">Iran</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="cardWrapper">
                  <Row>
                    {cardData.map((data) => (
                      <Col md={4}>
                        <Link to="/" className="csCard">
                          <div className="csCard__head">
                            <span>{data.icon}</span>
                            <h4>{data.name}</h4>
                          </div>
                          <div className="csCard__content">
                            <p>{data.value}</p>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Separator />
            </Col>
          </Row>
          <div className="customSection">
            <Row>
              <Col md={4}>
                <div className="communityPlatform__left">
                  <h2>
                    Ambassador <b>Program</b>
                  </h2>
                  <p className="mt-4">
                    Support the Aleph Zero core team through community and
                    marketing initiatives while accumulating rewards.
                  </p>
                  <button className="linkMore mt-4">
                    Learn More &nbsp;
                    <RightArrow />
                  </button>
                </div>
              </Col>
              <Col md={8}>
                <div className="ambassodor__right">
                  <div className="amb-images">
                    <div className="amb-img amb-images-1">
                      <img src={ambImg1} alt="amb-images-1" />
                    </div>
                    <div className="amb-img amb-images-2">
                      <img src={ambImg2} alt="amb-images-2" />
                    </div>
                    <div className="amb-img amb-images-3">
                      <img src={ambImg3} alt="amb-images-3" />
                    </div>

                    <div className="amb-img amb-images-4">
                      <img src={ambImg4} alt="amb-images-4" />
                    </div>
                  </div>

                  <div className="amb-bg"></div>

                  <div className="decoration-bg">
                    <img
                      src={decorationBg}
                      alt="decoimg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            <Col md={12}>
              <Separator />
            </Col>
          </Row>
          <div className="customSection">
            <Row>
              <Col md={4}>
                <div className="communityPlatform__left">
                  <h2>
                    Ecosystem
                    <b>
                      {" "}
                      Funding <br />
                      Program
                    </b>
                  </h2>
                  <p className="mt-4">
                    The Aleph Zero Ecosystem continues to grow fast. We’re
                    looking to foster the development of projects on the network
                    with a dedicated funding program dedicated to the most
                    interesting initiatives.
                  </p>
                  <button className="linkMore mt-4">
                    Learn More &nbsp;
                    <RightArrow />
                  </button>
                </div>
              </Col>
              <Col md={8}>
                <div className="ambassodor__right">
                  <div className="ambassodor__img">
                    <img
                      src={ecosystem}
                      alt="ecosystem"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            <Col md={12}>
              <Separator />
            </Col>
          </Row>
          <div className="customSection">
            <Row>
              <Col md={4}>
                <div className="communityPlatform__left">
                  <h2>
                    <b>Bug Bounty</b> Program
                  </h2>
                  <p className="mt-4">
                    Help us make the network better and safer. We’re offering
                    rewards for builders who find bugs and potential
                    vulnerabilities in our code.
                  </p>
                  <button className="linkMore mt-4">
                    Coming Soon &nbsp;
                    <RightArrow />
                  </button>
                </div>
              </Col>
              <Col md={8}>
                <div className="ambassodor__right">
                  <div className="ambassodor__img">
                    <img
                      src={bugbounty}
                      alt="ecosystem"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="latestNews">
        <Separator />
        <Container>
          <Row>
            <Col md="4">
              <div className="communityPlatform__left">
                <h2>
                  Latest <b>News</b>
                </h2>
                <p className="mt-4">
                  The following are our most frequented and updated
                  communication channels. You name it, we’ve got it!
                </p>
                <button className="linkMore mt-4">
                  See all news &nbsp;
                  <LinkIcon />
                </button>
              </div>
            </Col>
            <Col md="8">
              <div className="threeNews">
                <Row>
                  <Col md={4}>
                    <CardNews
                      img={news1}
                      tag1="Ecosystem"
                      tag2="Application"
                      title=" Aleph Zero Collaborates with Coinfirm to Strengthen Transaction
            Security and AML Compliance"
                      avtar={avtar}
                      avtarName="Mateusz Raczyński"
                      date="May 18, 2023"
                      btnText="Go to article"
                    />
                  </Col>
                  <Col md={4}>
                    <CardNews
                      img={news2}
                      tag1="Application"
                      title=" OnFinality expands offering to Aleph Zero RPC nodes"
                      avtar={avtar2}
                      avtarName="Daniel Ozluer"
                      date="May 10, 2023"
                      btnText="Go to article"
                    />
                  </Col>
                  <Col md={4}>
                    <CardNews
                      img={news3}
                      tag1="Progress"
                      title=" Monthly Update: EFP, Dashboard, Dev Portal, and more"
                      avtar={avtar}
                      avtarName="Mateusz Raczyński"
                      date="May 8, 2023"
                      btnText="Go to article"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latestVideos">
        <Separator />
        <Container>
          <Row>
            <Col md="4">
              <div className="communityPlatform__left">
                <h2>
                  Latest <b>Video</b>
                </h2>
                <p className="mt-4">
                  Learn about Aleph Zero technology, watch tutorials, catch up
                  with event recaps, and more.
                </p>
                <button className="linkMore mt-4">
                  Go to YouTube channel &nbsp;
                  <LinkIcon />
                </button>
              </div>
            </Col>
            <Col md="8">
              <div className="threeNews">
                <Row>
                  <Col md="4">
                    <CardVideo
                      img={video1}
                      title="Without being SNARKy, what's coming up for blockchain privacy in the
          next few years?"
                      date="Jan 14, 2023"
                      onClick={()=> setOpen(true)}
                    />
                  </Col>
                  <Col md="4">
                    <CardVideo
                      img={video2}
                      title="Transaction privacy vs. compliance - technical aspects of the dilemma"
                      date="Nov 4, 2022"
                      onClick={()=> setOpen(true)}
                    />
                  </Col>
                  <Col md="4">
                    <CardVideo
                      img={video3}
                      title="Validating on Aleph Zero - part I - node setup"
                      date="Sep 8, 2022"
                      onClick={()=> setOpen(true)}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <JoinSection buttonText="Go to Discord" icon={<Discord/>} text="Do you have" boldText="questions or comments?"/>

      <footer className="footer_content">
        <Footer />
      </footer>

      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    </>
  );
};
export default Socialplatforms;
