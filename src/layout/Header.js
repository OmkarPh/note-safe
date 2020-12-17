import React from 'react';

import HeaderWrapper from './HeaderStyled';


function Header() {
  return (
      <HeaderWrapper className="w-screen flex flex-row items-center p-1 justify-between shadow-xs">
          <div className="ml-8 text-lg text-gray-700 hidden md:flex">
            <a href="/" style={{color: "#fff"}}><h3>Note safe</h3></a>
          </div>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars"></i>
          </div >
            <div className="flex flex-row-reverse mr-8 hidden md:flex">
              <a className="text-black text-center px-4 py-2 m-2" href="https://omkarph.herokuapp.com">
              <h3>My Website</h3>
              </a>
              {/* <a className="text-gray-700 text-center px-4 py-2 m-2">Link</a> */}
            </div>
      </HeaderWrapper>
  )
}

export default Header;