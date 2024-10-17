import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmBooking = () => {
  const { estimateId } = useParams(); // Grabbing estimateId from the URL params
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    date: '',
    time: '',
    service: '',
    notes: '', // Added notes field
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Confirmed:', formData);
    // You can handle form submission logic here (send data to the server)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Confirm Your Booking</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter the address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            >
              <option value="">Select a time</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            >
              <option value="">Select a service</option>
              <option value="commercial-cleaning">Commercial Cleaning</option>
              <option value="basic-cleaning">Basic Cleaning (Residential)</option>
              <option value="deep-cleaning">Deep Cleaning (Residential)</option>
              <option value="move-in-out-cleaning">Move-In/Out Cleaning (Residential)</option>
            </select>
          </div>
          
          {/* Notes Section */}
          <div className="mb-4">
            <label className="block text-gray-700">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Example: Entry gate code, specific instructions for parking, etc."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded mt-4"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmBooking;
