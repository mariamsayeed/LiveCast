import React from 'react';
//import streaming from '../assets/streaming.gif'
import feature from '../assets/feature.png'

const FeatureSection = () => {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto flex justify-center items-center">
        {/* Text and button on the left */}
        <div className="w-1/2 pr-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Go live or record podcasts with remote guests
          </h1>
          <p className="text-xl mb-8">
            <strong>It's easy for guests to join from the browser in a few clicks.</strong><br />
            No software downloads.
          </p>
         
        </div>

        {/* Image on the right */}
        <div className="w-1/2 py-4">
          <img src={feature} alt="Image" className="mx-auto rounded-lg shadow-lg mx-0" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
