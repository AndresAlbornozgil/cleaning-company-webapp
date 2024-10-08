import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Cleaning Co.</h1>
          <p className="text-xl">Top-quality residential and commercial cleaning services.</p>
        </div>
      </section>

      {/* Our Work Section - Centered content */}
      <section id="our-work" className="min-h-screen bg-white py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Our Work</h2>
          <p>Information about our services and previous work.</p>
        </div>
      </section>

      {/* Reviews Section - Centered content */}
      <section id="reviews" className="min-h-screen bg-gray-100 py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Reviews</h2>
          <p>Customer reviews and testimonials.</p>
        </div>
      </section>

      {/* Contact Section - Half the height and centered content */}
      <section id="contact" className="min-h-[50vh] bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Get in touch with us at info@cleaningco.com or call (555) 123-4567.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
