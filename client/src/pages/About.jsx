import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Company Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Who We Are</h2>
          <p className="text-gray-700">
            Welcome to Cleaning Co.! We are a passionate and dedicated team offering top-quality residential 
            and commercial cleaning services. Our mission is to deliver exceptional service, ensuring that 
            our clients always return to a clean and refreshing environment.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Cleaning Co., we aim to provide unmatched cleaning services tailored to meet the unique 
            needs of our clients. We believe in using eco-friendly products and efficient cleaning techniques 
            to create healthy and safe spaces.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2"><strong>Customer First:</strong> We prioritize our clients' satisfaction in everything we do.</li>
            <li className="mb-2"><strong>Integrity:</strong> We uphold honesty and transparency in our services.</li>
            <li className="mb-2"><strong>Quality:</strong> Our team is committed to delivering excellence in every clean.</li>
            <li className="mb-2"><strong>Eco-Friendly:</strong> We believe in protecting the environment by using green products.</li>
          </ul>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our History</h2>
          <p className="text-gray-700">
            Founded in 2010, Cleaning Co. started as a small, family-owned business serving the local community. 
            Over the years, we’ve expanded into a full-service cleaning company, working with residential 
            and commercial clients across the region.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-500 transition duration-300"
            onClick={() => alert('Learn more about us coming soon!')}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
