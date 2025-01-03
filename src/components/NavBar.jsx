import React from 'react';
import logo from '../assets/logo.jpg';

function NavBar() {
  return (
    <div className="navbar w-screen flex items-center justify-between bg-black py-[12.5px] px-8 text-white">
      <img src={logo} alt="Logo" className="logo w-36 cursor-pointer ml-5" />

      <ul className="list w-full justify-center flex list-none text-center p-0 flex-1">
        <li className="inline-block my-[10px] mx-5 text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]">
          Home
        </li>
        <li className="inline-block my-[10px] mx-5 text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]">
          Services
        </li>
        <li className="inline-block my-[10px] mx-5 text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]">
          Products
        </li>
        <li className="inline-block my-[10px] mx-5 text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]">
          Career
        </li>
        <li className="inline-block my-[10px] mx-5 text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]">
          Contact Us
        </li>
      </ul>

      <div className="enquiry py-[10px] px-[15px] text-[14px] border border-transparent rounded-[6.25px] font-urbanist transition-all duration-300 ease-in-out cursor-pointer hover:border-[#fe5d26] hover:bg-[#262626]">
        <p>Enquire Now</p>
      </div>
    </div>
  );
}

export default NavBar;
