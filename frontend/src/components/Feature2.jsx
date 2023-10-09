import React from 'react';
import streaming from '../assets/streaming.gif'
//import feature from '../assets/feature.png'

const FeatureSection = () => {
  return (
    <section className="bg-purple-800 text-white py-20">
      <div className="container mx-auto flex justify-center items-center">
        {/* Image on the left (Reversed) */}
        <div className="w-1/2 pl-4">
          <img src={streaming} alt="Image" className="mx-auto rounded-lg shadow-lg" />
        </div>

        {/* Text and button on the right (Reversed) */}
        <div className="w-1/2 pr-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Go live or record podcasts with remote guests
          </h1>
          <p className="text-xl mb-8">
            <strong>It's easy for guests to join from their browser or phone in a few clicks.</strong><br />
            No software downloads.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
