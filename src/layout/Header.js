import React from 'react';
import {Link} from 'react-router-dom';

import HeaderWrapper from './HeaderStyled';
import icon from '../assets/icons/favicon.png';

function Header() {
  return (
      <HeaderWrapper className="w-screen flex flex-row items-center justify-between shadow-xs">
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link className="flex items-center no-underline hover:no-underline font-bold text-xl lg:text-3xl homeLink"
              to="/">
              <img src={icon} width="35px" alt={"Note Safe"} width="65px"/>
              &nbsp; Note Safe
            </Link>

            <div className="flex w-1/2 justify-end content-center socialLinks">
              <a href="https://omkarph.herokuapp.com/" target="_blank" rel="noreferrer"
                className="inline-block no-underline text-center h-10 p-2 md:h-auto md:p-4">
                <i className="far fa-globe fa-2x"></i>
              </a>
              <a href="https://github.com/OmkarPh" target="_blank" rel="noreferrer"
                className="inline-block text-blue-300 no-underline text-center h-10 p-2 md:h-auto md:p-4">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a className="inline-block text-blue-300 no-underline text-center h-10 p-2 md:h-auto md:p-4 "
                href="https://www.linkedin.com/in/omkarphansopkar" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
          {/* <div className="ml-8 text-lg">
            <a href="/" style={{color: "#fff"}}><h3>Note safe</h3></a>
          </div>
          <a className="text-black text-center px-4 py-2 m-2" href="https://omkarph.herokuapp.com">
            <h3> 
              { window.innerWidth >= 720 ? "My Website" : "W" }
            </h3> 
          </a> */}
      </HeaderWrapper>
  )
}

export default Header;