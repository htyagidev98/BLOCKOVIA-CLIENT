import React from "react";
import './CardNews.css'
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

import { ReactComponent as Calendar } from "../../assets/calendar.svg";

const CardNews = (props) => {
  return (
  
      <div className="newscard">
        <figure className="newscard__img">
          <img src={props.img} alt="news1" className="img-fluid" />
        </figure>
        <div className="newscard__content">
          <div className="newscard__cat">
            <span>{props.tag1}</span>
          {props.tag2 && <span>{props.tag2}</span>}
          </div>
          <h2>
            {props.title}
          </h2>
          <div className="newscard__postinfo">
            <div className="postedBy">
              <img src={props.avtar} alt="user" />
              <h6>{props.avtarName}</h6>
            </div>

            <div className="postedBy">
              <Calendar />
              <h6>{props.date}</h6>
            </div>
          </div>
        </div>
        <button className="linkMore mt-4">
          {props.btnText} &nbsp;
          <RightArrow />
        </button>
      </div>
  );
};

export default CardNews;
