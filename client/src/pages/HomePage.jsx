import React from 'react';
import OurWorkCarousel from '../components/OurWorkCarousel';

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

      {/* Our Work Section with Image Carousel */}
      <section id="our-work" className="min-h-screen bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Work</h2>
          <OurWorkCarousel />  {/* Image carousel component */}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Reviews</h2>
          <p className="text-lg">[Customer reviews will be displayed here]</p>
        </div>
      </section>

      {/* Contact Section with Centered Content */}
      <section id="contact" className="min-h-[50vh] bg-white py-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Get in touch with us at info@cleaningco.com or call (555) 123-4567</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
