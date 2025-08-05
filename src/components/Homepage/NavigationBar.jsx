import React from 'react';
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <div className='flex w-full max-w-[1500px] justify-center items-center text-[64px] px-20   h-30 mx-auto'>
        <div className="text-white md:text-4xl text-3xl mr-auto">PUPU</div>
        <button onClick={toggleMenu} className='text-white cursor-pointer md:hidden z-10 text-3xl ml-auto'>
          <IoMenu />
        </button>
        <div className="flex flex-row xl:gap-15 lg:gap-10 gap-8 justify-center list-none text-white lg:text-2xl text-lg max-md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            About
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Skill
          </NavLink>
          <NavLink
            to="/certificates"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Certificates
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Education
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Contact
          </NavLink>
        </div>

        <div className={`${isMenuOpen ? 'flex flex-col p-6 fixed top-20 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md gap-6 border-t border-white text-white text-xl h-screen' : 'hidden'} md:hidden text-2xl z-20`}>
          <button onClick={toggleMenu} className='text-white cursor-pointer pb-3 border-b border-white text-3xl mt-4 flex justify-center'>
            <IoMenu />
          </button>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'text-green-400 pb-3 border-b border-white' : 'text-white pb-3 border-b border-white'}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) => isActive ? 'text-green-400 pb-3 border-b border-white' : 'text-white pb-3 border-b border-white'}
            onClick={toggleMenu}
          >
            Skill
          </NavLink>
          <NavLink
            to="/certificates"
            className={({ isActive }) => isActive ? 'text-green-400 pb-3 border-b border-white' : 'text-white pb-3 border-b border-white'}
            onClick={toggleMenu}
          >
            Certificates
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => isActive ? 'text-green-400 pb-3 border-b border-white' : 'text-white pb-3 border-b border-white'}
            onClick={toggleMenu}
          >
            Education
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'text-green-400 pb-3 border-b border-white' : 'text-white pb-3 border-b border-white'}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;