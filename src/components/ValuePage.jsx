import React from "react";
import icon1 from "../assets/ChoosePage/Icon1.svg";
import icon2 from "../assets/ChoosePage/Icon2.svg";
import icon3 from "../assets/ChoosePage/Icon3.svg";
import icon4 from "../assets/ChoosePage/Icon4.svg";
import icon5 from "../assets/ValuePage/Icon1.svg";
import icon6 from "../assets/ValuePage/Icon2.svg";
import icon7 from "../assets/ValuePage/Icon3.svg";
import icon8 from "../assets/ValuePage/Icon4.svg";
import icon9 from "../assets/ValuePage/Icon.svg";

function ValuePage() {
  const cardData = [
    {
      title: "Proven expertise across industries",
      icon: icon1,
      subTitle:
        "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
    },
    {
      title: "Client-focused approach for personalized solutions",
      icon: icon2,
      subTitle:
        "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
    },
    {
      title: "Cutting-edge technology and design practices",
      icon: icon3,
      subTitle:
        "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
    },
    {
      title: "Reliable support and continuous improvement",
      icon: icon4,
      subTitle:
        "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
    },
  ];

  const valueData = [
    {
      icon: icon8,
      title: "Trust",
      subTitle:
        "We build lasting relationships through reliable and transparent solutions.",
    },
    {
      icon: icon6,
      title: "Excellence",
      subTitle:
        "We uphold the highest standards in every service we provide.",
    },
    {
      icon: icon7,
      title: "Client-Centric",
      subTitle: "Your needs and goals drive everything we do.",
    },
    {
      icon: icon8,
      title: "Our Commitment",
      subTitle:
        "We are dedicated to delivering exceptional service and support at every step.",
    },
  ];

  return (
    <section className="bg-black pt-6 z-0">
      {/* Top Content */}
      <div className="BelowContent bg-black grid stm:grid-cols-1 md:grid-cols-4 gap-6 px-6 py-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`hover:scale-105 stm:border stm:border-white transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6 text-center ${
              index < 3 ? "md:border-r-2 md:border-white" : ""
            }`}
          >
            <img src={card.icon} alt={card.title} className="w-16 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-white">{card.title}</h3>
            <p className="text-sm text-csLightGray">{card.subTitle}</p>
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="ButtomContent grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 pb-8">
        {/* Left Content */}
        <div className="p-6">
          <img src={icon9} alt="Our Values Icon" className="mb-4 w-20 h-20" />
          <p className="text-3xl font-bold mb-4 text-left text-white">
            Our Values
          </p>
          <p className="text-csLightGray text-sm leading-relaxed">
            Our story is one of continuous growth and evolution. We started as
            a small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 p-4 grid grid-cols-2 gap-4 border-8 border-[#262626] rounded-xl bg-[#141414]">
          {valueData.map((value, index) => (
            <div
              key={index}
              className="p-4 flex flex-col justify-center items-start text-left border border-[#262626] bg-[#1a1a1a] rounded-lg"
            >
              <div className="hover:scale-105 cursor-pointer ease-in-out duration-300 stm:justify-center md:flex items-center space-x-4 mb-2">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-10 h-10 p-2 border-2 rounded-full border-[#34a353]"
                />
                <p className="text-lg font-bold text-white">{value.title}</p>
              </div>
              <p className="text-csLightGray text-sm">{value.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePage;
