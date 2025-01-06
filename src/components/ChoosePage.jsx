import React from 'react';
import sampleVideo from '../assets/videos/space.mp4';
import buildings from '../assets/space building.png';
import icon1 from '../assets/ChoosePage/Icon1.svg';
import icon2 from '../assets/ChoosePage/Icon2.svg';
import icon3 from '../assets/ChoosePage/Icon3.svg';
import icon4 from '../assets/ChoosePage/Icon4.svg';

function ChoosePage() {
  const cardData = [
    {
      title: "Proven expertise across industries",
      icon: icon1,
      subTitle: "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
    },
    {
      title: "Client-focused approach for personalized solutions",
      icon: icon2,
      subTitle: "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
    },
    {
      title: "Cutting-edge technology and design practices",
      icon: icon3,
      subTitle: "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
    },
    {
      title: "Reliable support and continuous improvement",
      icon: icon4,
      subTitle: "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
    },
  ];

  return (
    <section className="choosePage max-h-screen w-screen bg-black text-white">
      {/* Top Portion */}
      <div className="topPortion text-center p-8">
        <h1 className="text-csorange font-bold text-6xl glow-text mb-4">
          Why Choose Us<span className="text-white">?</span>
        </h1>
        <p className="text-3xl italic mb-4">
          <span className="text-csblue2">"</span>Excellence is not just what we{' '}
          <span className="text-csblue2">deliver</span>; it’s who we are
          <span className="text-csblue2">"</span>
        </p>
        <p className="text-2xl tracking-widest px-8">
          We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative h-[60vh] w-full">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src={buildings}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          alt="Centered Building"
        />
      </div>

      {/* Card Section */}
      <div className="BelowContent bg-black grid md:grid-cols-4 gap-6 p-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6 text-center ${
              index < 3 ? 'border-r-2 border-white' : ''
            }`}
          >
            <img src={card.icon} alt={card.title} className="w-16 mb-4" />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChoosePage;
