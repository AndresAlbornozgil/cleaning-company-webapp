import React from 'react';

const CrewPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Crew Portal</h1>

        {/* Assigned Jobs */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Assigned Jobs</h2>
          <ul>
            <li className="mb-4">
              <p className="font-bold">Job #123</p>
              <p>123 Main St, Orlando, FL</p>
              <p>Status: In Progress</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">Mark as Completed</button>
            </li>
            <li className="mb-4">
              <p className="font-bold">Job #124</p>
              <p>456 Elm St, Orlando, FL</p>
              <p>Status: Scheduled</p>
              <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg">Start Job</button>
            </li>
          </ul>
        </div>

        {/* Earnings */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Earnings</h2>
          <p>Total Earnings: $2,000</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Payment History</button>
        </div>

        {/* Contractor Guidelines */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Contractor Guidelines</h2>
          <p>Review guidelines for job quality and approved supplies.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Guidelines</button>
        </div>
      </div>
    </div>
  );
};

export default CrewPortal;
