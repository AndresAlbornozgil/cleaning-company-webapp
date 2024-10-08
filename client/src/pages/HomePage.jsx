import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Cleaning Co.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We provide top-quality residential and commercial cleaning services to keep your spaces sparkling clean!
        </p>

        {/* Call-to-action Button */}
        <Link to="/booking">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Book a Service
          </button>
        </Link>

        {/* Services Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Home Cleaning</h3>
            <p className="text-gray-600 mb-4">
              We offer comprehensive home cleaning services to make your space shine.
            </p>
            <Link to="/booking">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Office Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Keep your office clean and productive with our professional cleaning services.
            </p>
            <Link to="/booking">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Deep Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Our deep cleaning services will leave every corner of your home spotless.
            </p>
            <Link to="/booking">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
