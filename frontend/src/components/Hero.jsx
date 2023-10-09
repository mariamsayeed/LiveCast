import React from 'react';
import hero2 from '../assets/hero2.png';

const Hero = () => {
  return (
    <section className="bg-indigo-600 text-white py-20 px-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Image on the left */}
        <div className="w-1/2 items-center justify-between px-20">
          <img src={hero2} alt="Image" className="rounded-lg shadow-lg" />
        </div>

        {/* Text and button on the right */}
        <div className="w-1/2 pl-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Live Cast</h1>
          <p className="text-2xl mb-8 leading-relaxed">
            Live Cast is a free and open source<br /> live video and web chat<br /> server for use with existing<br /> popular broadcasting software.
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-600 transition duration-300 px-5 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
