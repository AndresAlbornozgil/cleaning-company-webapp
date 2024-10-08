import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = async () => {
    try {
      await axios.post('/api/bookings', { service, date });
      alert('Booking successful!');
    } catch (err) {
      alert('Booking failed.');
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Book a Service</h2>

        {/* Input field for service */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Service Type</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service type"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </div>

        {/* Input field for date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Booking Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
