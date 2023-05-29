import React from 'react'
import './navbar.css'
import NavbarImg from '../../assets/logo-img.png';
import { NavLink } from 'react-router-dom';
import {FaFan} from 'react-icons/fa'
import {BsArrowRight, BsArrowUpRight, BsFileArrowDown, } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className="container-fluid1">
    <div className='navOuter'>
    <div className="header_bottom ">
    <span className='left-img'></span>
    <span className='right-img'></span>
    <nav className="navbar navbar-expand-lg  bg_back_navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#"><img
            src={NavbarImg}
            alt="navbar_logo"
            className="navbar_logo_style"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              
                <li className="nav-item m-auto li_hover">
                    <NavLink className="nav-link text-white ">
                      Explore
                    </NavLink>
                    <ul className="dropdown-menu dropdown_menu">
                      <li className="mb-3"><i className="bi bi-amd text-success"></i> <NavLink className="dropdown_item"  to="/why-blockovia"><span className="scroll_down_img"></span> Why Blockovia</NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/roadmap">Roadmap</NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/utility-economics">Utility & Economics</NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/use-cases">Use Cases</NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://docs.alephzero.org/aleph-zero/faq">FAQ<BsArrowUpRight/></NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://docs.alephzero.org/aleph-zero/explore/whitepapers">Whitepapers<BsArrowUpRight/></NavLink></li>
                      <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/carbon-footprint">Carbon Footprint</NavLink></li>
                      {/* <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="#">Whitepapers</NavLink></li> */}
                      <div className="dropdown-divider bg-light"></div>

                      <li className="mb-3" ><hr className="dropdown-divider"/></li>
                      <p className="">NETWORK</p>
                      <li className="mb-3" ><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://azero.dev/#/explorer">Wallet <BsArrowUpRight/></NavLink></li>
                      <li className="mb-3" ><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/staking">Staking</NavLink></li>
                      <li className="mb-3" ><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://alephzero.subscan.io/">Explorer <BsArrowUpRight/></NavLink></li>
                      <li className="mb-3" ><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="#">Ecosystem</NavLink></li>

                    </ul>
                  </li>
            </li>
            <li className="nav-item ms-4">
            <li className="nav-item m-auto li_hover">
            <NavLink className="nav-link text-white ">
              Build
            </NavLink>
            <ul className="dropdown-menu dropdown_menu">
              <li className="mb-3"><i className="bi bi-amd text-success"></i> <NavLink className="dropdown_item"  to="/funding-program"> Funding Program</NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://testnet.alephzero.org/">Testnet<BsArrowUpRight/></NavLink></li>
              <div className="dropdown-divider"></div>
              <span>DEV SPACE </span>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/developers">Dev Portal</NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://github.com/aleph-zero-foundation">Code repository<BsArrowUpRight/></NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://docs.alephzero.org/aleph-zero/">Documentation<BsArrowUpRight/></NavLink></li>
            </ul>
          </li> 
            </li>
            <li className="nav-item ms-4">
            <li className="nav-item m-auto li_hover">
            <NavLink className="nav-link text-white ">
              Community
            </NavLink>
            <ul className="dropdown-menu dropdown_menu">
              <li className="mb-3"><i className="bi bi-amd text-success"></i> <NavLink className="dropdown_item"  to="/social-platforms">Social Platforms</NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="#">Upcoming Events</NavLink></li>
              <div className="dropdown-divider bg-light"></div>
            
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/ambassador">Ambassador Program</NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/press-kit">Press / Media Kit </NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://careers.alephzero.org/companies">Careers<BsArrowUpRight/></NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="/core-team">Core Team</NavLink></li>
            </ul>
          </li> 
            </li>
            <li className="nav-item ms-4">
            <li className="nav-item m-auto li_hover">
            <NavLink className="nav-link text-white ">
            Content
            </NavLink>
            <ul className="dropdown-menu dropdown_menu">
              <li className="mb-3"><i className="bi bi-amd text-success"></i> <NavLink className="dropdown_item"  to="/blog">Blog</NavLink></li>
              <li className="mb-3"><i className="bi bi-amd text-success"></i><NavLink className="dropdown_item" to="https://www.youtube.com/@AlephZero">Videos<BsArrowUpRight/></NavLink></li>
              <div className="dropdown-divider"></div>
            
             
            </ul>
          </li> 
            </li>
           
          </ul>
          <div className="d-flex align-items-center">
            
            <button className="button_nav_bottom" type="submit">
               <FaFan className='text-success me-2' /> Explore the ecosystem
            </button>
        </div>
        </div>
      </div>
    </nav>
    </div>
    </div>
    </div>

  )
}

export default Navbar;