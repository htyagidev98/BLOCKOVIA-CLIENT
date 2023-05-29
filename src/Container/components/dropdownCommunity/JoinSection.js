import React from "react";
import { Tilt } from "react-tilt";
import './JoinSection.css';
import decorationBg from "../../assets/hero-ambassadors-decorations.png";
import { Col, Container, Row } from "react-bootstrap";
const defaultOptionsX = {
  reverse: false, // reverse the tilt direction
  max: 65, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: "X", // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const JoinSection = (props) => {
  return (
    <section className="joinSection">
      <div className="joinSection__lines"></div>

      <div className="joinSectionBg">
        <Tilt options={defaultOptionsX}>
          <img src={decorationBg} alt="decoimg" className="img-fluid" />
        </Tilt>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <div className="joinSection__inner">
              <div className="joinSection__content">
                <h3>
                 {props.text}  <strong>{props.boldText}</strong> 
                </h3>
                <button className="applyBtn">{props.buttonText} {props.icon}</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinSection;
