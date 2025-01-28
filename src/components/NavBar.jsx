import React, { useState,useEffect,useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.jpg";
import chatbot from '../assets/Navbar Page/chatbot.svg'
// import React, { useState } from "react";
// import logo from "/logo.svg";
// import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar w-screen flex items-center justify-between bg-black py-[12.5px] px-8 text-white">
      {/* Logo */}
      <a href="">
              <img
        src={logo}
        alt="logo"
        className="logo stm:w-20 ms-0 md:w-36 cursor-pointer ml-5"
      />
      </a>


      {/* Desktop Menu */}
      <div className="hidden mx-auto md:flex md:items-center md:space-x-5">
        <ul className="flex list-none text-center">
          {["Home", "Services", "Products", "Career", "Contact Us"].map(
            (item) => (
              <li
                key={item}
                className="inline-block text-base cursor-pointer font-sans py-[12.5px] px-[15px] border border-transparent transition-all duration-300 ease-in-out hover:border-[#262626] hover:rounded-md hover:text-[#fe5d26]"
              >
                {item}
              </li>
            )
          )}
        </ul>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden overflow-x-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <IoCloseOutline className="text-white text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-white text-2xl" />
        )}
      </div>
      <img src={chatbot} alt="chatbot" className="me-4 stm:hidden" />
      <div className="stm:hidden enquiry py-[10px] px-[15px] text-[14px] border rounded-[6.25px] font-urbanist transition-all duration-300 ease-in-out cursor-pointer border-[#fe5d26] hover:bg-[#262626]">
          Enquire Now
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
        ref={menuRef}
        className="absolute h-screen top-[60px] right-0 w-3/5 bg-[#1D1D1F] rounded-lg text-white md:hidden">
          <ul className="flex flex-col list-none text-center py-5">
            {["Home", "Services", "Products", "Career", "Contact Us"].map(
              (item) => (
                <li
                  key={item}
                  className="py-3 text-base cursor-pointer font-sans md:border-b border-gray-700 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex">
            <img src={chatbot} alt="chatbot" className="ms-4 stm:hidden" />
            <div
              className="enquiry justify-center w-fit mx-auto py-[10px] px-[15px] text-[14px] border rounded-[6.25px] font-urbanist transition-all duration-300 ease-in-out cursor-pointer border-[#fe5d26] mb-5"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
            </div>
          </div>
          </div>

      )}
    </div>
  );
}

export default NavBar;
