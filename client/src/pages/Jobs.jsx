import React from 'react';

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>

        {/* Job Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Work With Us?</h2>
          <p className="text-gray-700">
            At Cleaning Co., we believe in fostering a positive, inclusive, and rewarding work environment.
            If you are passionate about delivering excellent service and want to grow in your career, 
            join our team of dedicated professionals.
          </p>
        </div>

        {/* Job Position 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Residential Cleaning Specialist</h3>
          <p className="text-gray-700 mb-4">
            We are looking for reliable and detail-oriented individuals to join our residential cleaning team.
            Responsibilities include cleaning, organizing, and maintaining the cleanliness of residential homes.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-time and part-time positions available</li>
            <li>Competitive salary and benefits</li>
            <li>Training provided</li>
          </ul>
        </div>

        {/* Job Position 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Commercial Cleaning Specialist</h3>
          <p className="text-gray-700 mb-4">
            Our commercial cleaning team is expanding! We are hiring individuals to provide cleaning services
            to office buildings, retail spaces, and more. Prior experience is a plus, but not required.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Day and night shifts available</li>
            <li>Flexible work hours</li>
            <li>Room for growth and advancement</li>
          </ul>
        </div>

        {/* Job Position 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Move-In/Move-Out Cleaning Crew</h3>
          <p className="text-gray-700 mb-4">
            We are seeking energetic and dependable individuals to assist with move-in and move-out cleaning services. 
            This role requires attention to detail and a passion for cleanliness.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Part-time opportunities with flexible hours</li>
            <li>Bonus for completing large projects</li>
            <li>Opportunities to join other teams</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-500 transition duration-300"
            onClick={() => alert('Apply now coming soon!')}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
