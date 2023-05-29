import React, { useEffect } from "react";
import {
  BsArrowRight,
  BsBoxArrowUpRight,
  BsDot,
  BsFileArrowDown,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./ambassador.css";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as ArrowLeftIcon } from "../../assets/arrow-left.svg";
import ambImg1 from "../../assets/amb-images-1.png";
import ambImg2 from "../../assets/amb-images-2.png";
import ambImg3 from "../../assets/amb-images-3.png";
import ambImg4 from "../../assets/amb-images-4.png";
import ambImg5 from "../../assets/ambassadors-backgrounds-decorations.png";
import ambImg6 from "../../assets/ambassadors-backgrounds-lines.png";
import { ReactComponent as BootstrapArrow } from "../../assets/bootstrap.svg";
import decorationBg from "../../assets/hero-ambassadors-decorations.png";
import { Tilt } from "react-tilt";
import Footer from "../../common/footer/Footer";
import TopDesign from "./TopDesign";
import JoinSection from "./JoinSection";
import Separator from "./Separator";


const Ambassador = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };



  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>

      <section className="ambassodor">
        <Container>
          <Row>
            <Col md="6">
              <div className="ambassodor__left">
                <h1>
                  <b>Ambassador</b>
                  <br /> Program
                </h1>
                <div className="ambassodor__text">
                  <span className="ambassodor__hr">
                    <span className="line"></span>
                  </span>
                  <div className="ambassodor__scroll">
                    <span>
                      <ArrowLeftIcon /> &nbsp; Scroll
                    </span>
                  </div>
                  <p>
                    This is an opportunity for our most enthusiastic,
                    empathetic, and creative community members to acquire a
                    special status and help shape the future of Aleph Zero.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6">
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

                <Tilt options={defaultOptions}>
                  <div className="decoration-bg">
                    <img
                      src={decorationBg}
                      alt="decoimg"
                      className="img-fluid"
                    />
                  </div>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="purposeSectn">
      <TopDesign/>
        <Container>
          <Row>
            <Col md="5">
              <div className="purposeSectn__left">
                <div className="mainHeading">
                  <small>BACKGROUND</small>
                  <h2>
                    <strong>The purpose</strong> of the program
                  </h2>
                </div>
                <div className="purposeSectn__leftcontent">
                  <p>
                    Aleph Zero's Brand Ambassadors play an essential role in
                    educating the wider community and collaborating with the
                    core team on translations, community management, running
                    meetups and local conferences, as well as a variety of
                    different activities. Our Ambassadors also have the
                    opportunity to beta-test new features of Aleph Zero and its
                    partner products!
                  </p>
                  <p>
                    The current program will run through 2022, with participants
                    divided into four cohorts.
                  </p>
                  <p>
                    At the end of every quarter, we'll be evaluating the
                    submissions from the last three months and reaching out to
                    selected parties. Once accepted, Ambassadors will remain
                    with the program as new Ambassadors are onboarded through
                    the cohorts.
                  </p>
                </div>

                <Tilt options={defaultOptions}>
                  <div className="purposeimg">
                    <img
                      src={ambImg5}
                      alt="ambImg5"
                      className="purposeimg-1 img-fluid"
                    />
                  </div>
                </Tilt>
              </div>
            </Col>
            <Col md="7">
              <div className="purposeSectn__right">
                <div className="purposeSectn__rt__content">
                  <h3>
                    <b>Who</b> are we looking for?
                  </h3>

                  <Row>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Proactive leaders</h4>
                        <p>
                          with a proven track record of being empathetic and
                          engaging with others online
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Social media experts</h4>
                        <p>
                          who can help us shape the image of Aleph Zero in the
                          years to come.
                        </p>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="psCard">
                        <h4>Quality assurance magicians</h4>
                        <p>
                          who will battle–test Aleph Zero products before
                          releasing them to a wider public.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Relationship builders</h4>
                        <p>
                          who can help to boost Aleph Zero’s visibility and
                          adoption across different industries.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Separator/>

                <div className="purposeSectn__rt__content">
                  <h3>
                    <b>What</b> are the perks?
                  </h3>

                  <Row>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Bounties</h4>
                        <p>
                          Help us work on the Aleph Zero ecosystem—assist in
                          tasks such as content, translations, documentation,
                          and more! Bear in mind that executing certain tasks
                          comes with remuneration and might require formal
                          agreements.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Free Aleph Zero swag</h4>
                        <p>
                          Test–drive our branded swag and show your love for the
                          network in the real world!
                        </p>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="psCard">
                        <h4>Exclusive NFTs</h4>
                        <p>
                          As soon as the NFT infrastructure is ready on Aleph
                          Zero, you will receive an exclusive NFT as a network
                          ambassador.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>In-house collaboration</h4>
                        <p>
                          You’ll have a direct line of communication to the
                          Aleph Zero core team. We hope that some of these
                          relationships might even convert into opportunities to
                          officially work together!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Separator/>

                <div className="purposeSectn__rt__content">
                  <h3>
                    <b>What</b> will we require?
                  </h3>

                  <Row>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Your availability</h4>
                        <p>
                          The Ambassador program requires you to be active —
                          please make sure you have the capacity to get involved
                          in it.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>Your awesomeness</h4>
                        <p>
                          The Aleph Zero team will be extremely selective when
                          it comes to building the ambassador program. It will
                          be divided into several cohorts from which we seek to
                          select the best and brightest community ambassadors.
                        </p>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="psCard">
                        <h4>Your empathy</h4>
                        <p>
                          Blockchain is one of the most diverse and experimental
                          industries globally, and we want to celebrate that
                          spirit.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="psCard">
                        <h4>In-house collaboration</h4>
                        <p>
                          You’ll have a direct line of communication to the
                          Aleph Zero core team. We hope that some of these
                          relationships might even convert into opportunities to
                          officially work together!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <JoinSection buttonText="Apply Now" text="Are you" boldText="ready to join?"/>

      <footer className="footer_content">
          <Footer />
        </footer>
    </>
  );
};
export default Ambassador;
