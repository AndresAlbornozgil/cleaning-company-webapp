import React from 'react';

const ClientPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Client Portal</h1>

        {/* Upcoming Bookings */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upcoming Bookings</h2>
          <ul>
            <li className="mb-4">
              <p className="font-bold">Booking #123</p>
              <p>Scheduled for October 20, 2024</p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">Cancel Booking</button>
              <button className="mt-2 ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg">Reschedule</button>
            </li>
          </ul>
        </div>

        {/* Past Jobs and Feedback */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Past Jobs & Feedback</h2>
          <p>Job #122 - Completed on October 5, 2024</p>
          <textarea
            className="w-full p-2 border rounded-lg mt-2"
            rows="4"
            placeholder="Leave feedback..."
          ></textarea>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Submit Feedback</button>
        </div>

        {/* Payment History */}
        <div className="bg-white shadow-md p-6 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Payment History</h2>
          <p>Total Payments: $1,200</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Invoices</button>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
