import React, { useState } from "react";
import BackIcon from '../assets/Feature Page/Back Icon.svg'

function Features() {
  const [selectedCategory, setSelectedCategory] = useState("Online Solutions");

  const List = ["Online Solutions", "Business Tools", "Customer Support"];
  const cards1 = [
    {
      title: "Web Development Services",
      description:
        "Access a suite of web development tools that allow you to manage your website efficiently.",
    },
    {
      title: "Mobile App Access",
      description:
        "Manage your business or app from anywhere using secure online connections.",
    },
    {
      title: "Secure Data Access",
      description: "Safely access important data and reports from the cloud.",
    },
    {
      title: "Remote Collaboration Tools",
      description:
        "Share, communicate, and collaborate in real-time, no matter where you are.",
    },
  ];
  const cards2 = [
    {
      title: "Analytics & Reporting",
      description:
        "Tools for tracking your business metrics, analyzing trends, and reporting on performance.",
    },
    {
      title: "Financial Tools",
      description:
        "Manage budgets, expenses, and transactions, helping to keep finances in check.",
    },
    {
      title: "Project Management Tools",
      description:
        "Coordinate tasks, track progress, and manage deadlines to ensure your team stays productive.",
    },
    {
      title: "AI/ML Solutions",
      description:
        "Use intelligent tools to automate tasks, predict trends, and optimize business strategies.",
    },
  ];
  const cards3 = [
    {
      title: "24/7 Technical Support",
      description:
        "Get round-the-clock assistance with any technical challenges or system issues.",
    },
    {
      title: "Helpdesk & Ticketing",
      description:
        "A dedicated helpdesk to resolve queries and manage service requests efficiently.",
    },
    {
      title: "Customer Success Team",
      description:
        "Guidance to help clients maximize the potential of their services or products.",
    },
    {
      title: "Training and Onboarding",
      description:
        "Personalized support to help you and your team get up to speed with new systems and tools.",
    },
  ];

  // Map categories to their corresponding card data
  const categoryData = {
    "Online Solutions": cards1,
    "Business Tools": cards2,
    "Customer Support": cards3,
  };

  return (
    <section className="Feature page bg-black w-screen h-screen">
      {/* Top Content */}
      <div className="topContent">
        <p className="text-4xl font-bold mb-2 text-left text-white px-8">
          Our
          <span className="text-4xl font-bold text-orange-600"> Features</span>
        </p>
        <p className="text-2xl text-white tracking-widest px-8">
          Discover a wide range of powerful features at Hertzworkz, designed to
          streamline your business operations and enhance productivity. From
          innovative solutions to seamless user experiences, we provide tools
          that empower growth and success.
        </p>
      </div>

      {/* Buttons for Categories */}
      <div className="categories flex gap-4 my-6 px-8">
        {List.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 text-white font-bold rounded ${
              selectedCategory === item
                ? "bg-orange-600"
                : "bg-gray-700 hover:bg-orange-500"
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards for Selected Category */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {categoryData[selectedCategory].map((card, index) => (
          <div
            key={index}
            className="card bg-gray-800 text-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <img src={BackIcon} alt="" />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
