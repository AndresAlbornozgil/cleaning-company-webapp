import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    // You can handle form submission logic here, like sending data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Book a Cleaning Service</h2>
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
        <label className="block text-gray-700">Service Type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="basic-cleaning">Basic Cleaning</option>
          <option value="deep-cleaning">Deep Cleaning</option>
          <option value="move-in-out">Move-In/Out Cleaning</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-4">Submit</button>
    </form>
  );
};

export default BookingForm;
