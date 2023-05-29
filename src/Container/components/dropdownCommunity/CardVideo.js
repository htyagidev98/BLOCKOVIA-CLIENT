import React from "react";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import "./CardVideo.css";

const CardVideo = (props) => {
  return (
    <div className="cardVideo" onClick={props.onClick}>
      <div className="cardVideo__img">
        <img src={props.img} alt="video1" className="img-fluid" />

        <span className="videoIcon">
          <PlayIcon />
        </span>
      </div>
      <div className="cardVideo__content">
        <h2>
          {props.title}
        </h2>
        <div className="cardVideo__date">
          <Calendar />
          <h6>{props.date}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
