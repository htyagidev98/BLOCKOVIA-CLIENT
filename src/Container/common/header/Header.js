import React from 'react'
import { NavLink } from 'react-router-dom'
import headerImg from '../../assets/letter-b.png'
import {BsArrowRight} from 'react-icons/bs';

import './header.css';
const Header = () => {
  return (

    <div className="header_top">
    <div className="header_top_data">
      <NavLink to="/" className="me-4"
        ><img
          src={headerImg}
          className="logo_image"
          alt="logo_img"
        />
      </NavLink>
      <p className="m-0">
        <strong> Introducing the Ecosystem Funding Program </strong>
        <span className="span_header_para">
          to support Blockovia builders!
        </span>
      </p>
      <span className="header_learn_style">
      <NavLink to={''} className='nav-link'>
        <span className="ms-3 me-2">Learn More</span>
         <BsArrowRight />
        </NavLink>
      </span>
      
    </div>
  </div>

  )
}

export default Header