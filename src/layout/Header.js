import React from 'react';

import HeaderWrapper from './HeaderStyled';


function Header() {
  return (
      <HeaderWrapper className="w-screen flex flex-row items-center p-1 justify-between shadow-xs">
          <div className="ml-8 text-lg text-gray-700 hidden md:flex">My Website</div>
          <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input type="search" name="search" placeholder="Search"
              className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
            <i className="fas fa-search text-lg w-4 h-2 m-1.5 mr-3  text-gray-900">
            </i>
          </span>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars"></i>
          </div >
            <div className="flex flex-row-reverse mr-8 hidden md:flex">
              <a className="text-black text-center px-4 py-2 m-2" href="https://omkarph.herokuapp.com">
                My Website
              </a>
              {/* <a className="text-gray-700 text-center px-4 py-2 m-2">Link</a> */}
            </div>
      </HeaderWrapper>
  )
}

export default Header;