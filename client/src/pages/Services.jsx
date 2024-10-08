import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Residential Cleaning</h2>
          <p className="text-gray-700">
            We provide top-quality cleaning services for homes, apartments, and condos.
            Our team is trained to handle everything from routine cleaning to deep cleaning 
            services, ensuring that your living space is sparkling and sanitized.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Kitchen Cleaning</li>
            <li>Bathroom Cleaning</li>
            <li>Dusting and Vacuuming</li>
            <li>Deep Cleaning Options</li>
          </ul>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Commercial Cleaning</h2>
          <p className="text-gray-700">
            Our commercial cleaning services are tailored to meet the needs of businesses, 
            offices, and retail spaces. We ensure a clean and healthy work environment 
            for your employees and customers.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Office Cleaning</li>
            <li>Retail Store Cleaning</li>
            <li>Sanitizing Services</li>
            <li>Custom Cleaning Schedules</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Move-In/Move-Out Cleaning</h2>
          <p className="text-gray-700">
            Whether you're moving in or out, we offer detailed cleaning services 
            to ensure that your new or old home is spotless. We clean every corner 
            to help you start fresh or leave behind a clean space.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Full Home Cleaning</li>
            <li>Deep Clean of Kitchens and Bathrooms</li>
            <li>Window and Baseboard Cleaning</li>
            <li>Floor Cleaning</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Specialty Services</h2>
          <p className="text-gray-700">
            We also offer specialty cleaning services such as post-construction cleaning, 
            eco-friendly green cleaning, and more. Let us know if you have unique cleaning 
            requirements, and we’ll customize a plan for you.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Post-Construction Cleaning</li>
            <li>Eco-Friendly Green Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Window Washing</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-500 transition duration-300"
            onClick={() => alert('Booking feature coming soon!')}
          >
            Book Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
