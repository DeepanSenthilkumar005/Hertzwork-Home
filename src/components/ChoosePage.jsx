import React from 'react';
import sampleVideo from '../assets/videos/space.mp4';
import buildings from '../assets/space building.png';

function ChoosePage() {
  return (
    <section className="choosePage max-h-screen w-screen bg-black">
      {/* Top Portion */}
      <div className="topPortion">
        <p className="text-csorange m-2 font-bold text-center text-6xl mt-0 pt-8 glow-text">
          Why Choose Us<span className="text-white">?</span>
        </p>
        <p className="text-white m-2 text-center text-3xl italic">
          <span className="text-csblue2">"</span>Excellence is not just what we{' '}
          <span className="text-csblue2">deliver</span>; it’s who we are
          <span className="text-csblue2">"</span>
        </p>
        <p className='text-white text-2xl tracking-widest p-4 px-20 text-center justify-center'>
        We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
      </div>
      {/* Centered Video */}
      <div className="z-0 center relative h-full w-full">
        {/* Background Video */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Image */}
        <img
          src={buildings}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          alt="Centered Building"
        />
      </div>
    </section>
  );
}

export default ChoosePage;
