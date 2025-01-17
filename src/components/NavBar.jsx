import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar w-screen flex items-center justify-between bg-black py-[12.5px] px-8 text-white">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo stm:w-20 ms-0 md:w-36 cursor-pointer ml-5"
      />

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
      <div className="stm:hidden enquiry py-[10px] px-[15px] text-[14px] border border-transparent rounded-[6.25px] font-urbanist transition-all duration-300 ease-in-out cursor-pointer hover:border-[#fe5d26] hover:bg-[#262626]">
          Enquire Now
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 w-3/5 bg-[#1D1D1F] rounded-lg text-white md:hidden">
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
          <div
            className="enquiry justify-center w-fit mx-auto py-[10px] px-[15px] text-[14px] border border-transparent rounded-[6.25px] font-urbanist transition-all duration-300 ease-in-out cursor-pointer border-[#fe5d26] mb-5"
            onClick={() => setIsMenuOpen(false)}
          >
            Enquire Now
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
