import React, { useState } from "react";
import BackIcon from "../assets/Feature Page/Back Icon.svg";

function Features() {
  const [selectedCategory, setSelectedCategory] = useState("Online Solutions");

  const List = ["Online Solutions", "Business Tools", "Customer Support"];
  const cards1 = [
    {
      title: "Web Development Services",
      description:
        "Access a suite of web development tools that allow you to manage your website efficiently.",
      link:"",
    },
    {
      title: "Mobile App Access",
      description:
        "Manage your business or app from anywhere using secure online connections.",
        link:"",
    },
    {
      title: "Secure Data Access",
      description: "Safely access important data and reports from the cloud.",
      link:"",
    },
    {
      title: "Remote Collaboration Tools",
      description:
        "Share, communicate, and collaborate in real-time, no matter where you are.",
        link:"",
    },
  ];
  const cards2 = [
    {
      title: "Analytics & Reporting",
      description:
        "Tools for tracking your business metrics, analyzing trends, and reporting on performance.",
        link:"",
    },
    {
      title: "Financial Tools",
      description:
        "Manage budgets, expenses, and transactions, helping to keep finances in check.",
        link:"",
    },
    {
      title: "Project Management Tools",
      description:
        "Coordinate tasks, track progress, and manage deadlines to ensure your team stays productive.",
        link:"",
    },
    {
      title: "AI/ML Solutions",
      description:
        "Use intelligent tools to automate tasks, predict trends, and optimize business strategies.",
        link:"",
    },
  ];
  const cards3 = [
    {
      title: "24/7 Technical Support",
      description:
        "Get round-the-clock assistance with any technical challenges or system issues.",
        link:"",
    },
    {
      title: "Helpdesk & Ticketing",
      description:
        "A dedicated helpdesk to resolve queries and manage service requests efficiently.",
        link:"",
    },
    {
      title: "Customer Success Team",
      description:
        "Guidance to help clients maximize the potential of their services or products.",
        link:"",
    },
    {
      title: "Training and Onboarding",
      description:
        "Personalized support to help you and your team get up to speed with new systems and tools.",
        link:"",
    },
  ];

  const categoryData = {
    "Online Solutions": cards1,
    "Business Tools": cards2,
    "Customer Support": cards3,
  };

  return (
    <section className="Feature page bg-black w-screen">
      {/* Top Content */}
      <div className="topContent py-6">
        <p className="md:text-4xl stm:text-xl font-bold mb-2 text-left text-white px-8">
        Our&nbsp;
          <span className="md:text-4xl stm:text-xl font-bold text-orange-600">
            Features
          </span>
        </p>
        <p className="md:text-2xl text-white tracking-widest px-8">
          Discover a wide range of powerful features at Hertzworkz, designed to
          streamline your business operations and enhance productivity. From
          innovative solutions to seamless user experiences, we provide tools
          that empower growth and success.
        </p>
      </div>

      {/* Bottom Content */}
      <div className="ButtonContent w-full my-auto p-6 md:mx-4 grid grid-cols-1 md:grid-cols-5 justify-items-center">
        {/* Categories Section */}
        <div className="categories stm:m-4 bg-[#1c1c1c] justify-between py-10 col-span-1 flex md:flex-col stm:py-8 stm:w-full stm:mx-9 gap-4 my-2 px-8 w-full">
          {List.map((item) => (
            <button
              key={item}
              className={` py-2 text-sm text-white font-bold rounded-s-full rounded-e-full ${
                selectedCategory === item
                  ? "border-orange-600 md:border-2 stm:text-orange-600"
                  : "bg-[#1c1c1c] hover:border-orange-500 md:hover:border-2"
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="cards col-span-4 grid grid-cols-1 md:grid-cols-2  gap-6 md:px-8 justify-center">
          {categoryData[selectedCategory].map((card, index) => (
            <div
              key={index}
              className="card bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg"
            >
              <div className="heading flex justify-between">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <a href={card.link}>
                  <img
                    src={BackIcon}
                    alt="Back Icon"
                    className="w-4 mb-2 hover:rotate-45 hover:cursor-pointer duration-200 ease-in-out"
                  />
                </a>

              </div>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
