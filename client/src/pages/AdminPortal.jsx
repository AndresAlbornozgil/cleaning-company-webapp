import React, { useEffect, useState } from 'react';

const AdminPortal = () => {
  const [estimates, setEstimates] = useState([]);
  const [price, setPrice] = useState(''); // Admin sets price
  const [selectedEstimate, setSelectedEstimate] = useState(null);

  useEffect(() => {
    // Fetch the list of estimates from the server
    const fetchEstimates = async () => {
      const response = await fetch('/api/estimates'); // Example API call
      const data = await response.json();
      setEstimates(data);
    };
    fetchEstimates();
  }, []);

  // Handle price submission and send booking form via email
  const sendBookingForm = async (estimateId, clientEmail) => {
    try {
      const response = await fetch(`/api/send-booking-form/${estimateId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price, clientEmail }),
      });

      if (response.ok) {
        alert('Booking form with price sent to the client via email.');
      } else {
        alert('Failed to send booking form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

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

        {/* Review Estimates Section */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Review Estimates</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Client Name</th>
                <th className="py-2 px-4 border">Service Type</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Submitted</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {estimates.map((estimate) => (
                <tr key={estimate.id}>
                  <td className="py-2 px-4 border">{estimate.name}</td>
                  <td className="py-2 px-4 border">{estimate.service}</td>
                  <td className="py-2 px-4 border">{estimate.email}</td>
                  <td className="py-2 px-4 border">{new Date(estimate.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => setSelectedEstimate(estimate)}
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal to review estimate and set price */}
        {selectedEstimate && (
          <div className="modal bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Review Estimate for {selectedEstimate.name}</h3>
            <p>Service: {selectedEstimate.service}</p>
            <p>Notes: {selectedEstimate.notes}</p>
            <div>
              <h4 className="text-lg font-bold">Uploaded Pictures:</h4>
              {selectedEstimate.images.map((image, index) => (
                <img key={index} src={image.url} alt="Room" className="w-24 h-24" />
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Set Price: </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => sendBookingForm(selectedEstimate.id, selectedEstimate.email)}
            >
              Send Booking Form
            </button>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedEstimate(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
