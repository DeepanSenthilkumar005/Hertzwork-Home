import React,{useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar w-screen flex items-center justify-between bg-black py-[12.5px] px-8 text-white">
      <img src={logo} alt="Logo" className="logo stm:w-20 ms-0 md:w-36 cursor-pointer ml-5" />

      <div className='stm:hidden'>
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
      <div className='md:hidden'>
        <div className="button" onClick={() => setIsMenuOpen(!isMenuOpen)} >
          {(!isMenuOpen)?(<RxHamburgerMenu />):(<IoCloseOutline className='text-white ms-auto' />)}
        </div>
        

        <ul className={`flex flex-col md:flex-row md:justify-start p-0 list-none text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
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

      </div>
    </div>
  );
}

export default NavBar;
