import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4">
          {/* Testimonial Card 1 */}
          <div className="w-96 h-64 bg-black text-white p-6 rounded-lg">
            <p className="text-lg mb-4">
              We should not need Amazon permission to goof off in a battle royale in front of our digital friends. Owncast offers a promising alternative glimpse into a more democratic, live streaming future that’s ripe for seizing.
            </p>
            <p className="text-sm">- PC MAG REVIEW OF OWNCAST</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="w-96 h-64 bg-black text-white p-6 rounded-lg">
            <p className="text-lg mb-4">
              I'm amazed, #owncast seems to perform as well as any proprietary platforms out there.
            </p>
            <p className="text-sm">- @LOPEZTEL</p>
          </div>
          <div className="w-96 h-64 bg-black text-white p-6 rounded-lg">
            <p className="text-lg mb-4">
              I'm amazed, #owncast seems to perform as well as any proprietary platforms out there.
            </p>
            <p className="text-sm">- @LOPEZTEL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

