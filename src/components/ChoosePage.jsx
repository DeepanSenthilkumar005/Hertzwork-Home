import React from "react";
import bulb from "../assets/ChoosePage/bulb.svg"
import bulbstand from "../assets/ChoosePage/bulbstand.svg"
import person from "../assets/ChoosePage/person.svg"
import phone from "../assets/ChoosePage/phone.svg"
import vector from "../assets/ChoosePage/vector.svg"

function ChoosePage() {
  return (
    <section className="choosePage md:min-h-screen w-screen bg-black text-white flex flex-col items-center">
      {/* Top Portion */}
      <div className="topPortion text-center p-8 w-[90%] max-w-[1200px]">
        <h1 className="text-glow text-[40px] sm:text-[50px] font-bold text-[#fe5d26] my-6">
          Why Choose Us<span className="text-white">?</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl italic mb-4">
          <span className="text-csblue2">"</span>Excellence is not just what we{" "}
          <span className="text-csblue2 underline">deliver</span>; it’s who we
          are<span className="text-csblue2">"</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide px-4 sm:px-8">
          We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on
          building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
      </div>

    {/* New Photo */}
      <div className="ImageContent stm:w-fit  w-screen flex p-6 justify-between ">
        <img src={bulb} alt="bulb" />
        <img src={bulbstand} alt="bulbstand" />
        <a href="#" className="text-[#544E4E] md:ms-80 absolute cursor-pointer w-40 m-auto flex bg-white rounded-lg p-4">Explore more <span><img src={vector} alt="" className="mt-1 ms-3" /></span> </a>
        <div className=" flex">
          <img src={person} alt="person" className="absolute z-50" />
          <img src={phone} alt="phone" className="relative z-0 left-0" />
        </div>
      </div>
    </section>
  );
}

export default ChoosePage;
