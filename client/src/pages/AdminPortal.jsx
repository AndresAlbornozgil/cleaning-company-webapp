import React from 'react';

const AdminPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Admin Portal</h1>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Total Jobs</h2>
            <p className="text-gray-600 mt-2">45 jobs completed</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Active Contractors</h2>
            <p className="text-gray-600 mt-2">8 contractors online</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Total Revenue</h2>
            <p className="text-gray-600 mt-2">$12,500</p>
          </div>
        </div>

        {/* Job Management */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Jobs</h2>
          <p>View, assign, and manage cleaning jobs.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Create New Job</button>
        </div>

        {/* Contractor Management */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Contractors</h2>
          <p>View contractor performance, assign jobs, and manage their details.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Add New Contractor</button>
        </div>

        {/* Financial Overview */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Financial Overview</h2>
          <p>Track revenue, expenses, and generate invoices.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Financials</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
