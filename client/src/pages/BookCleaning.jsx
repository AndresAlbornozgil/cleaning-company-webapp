import React, { useState } from 'react';

const GetEstimate = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDay: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a1a1a] p-6">
      <div className="max-w-md w-full p-6 bg-[#F5F5F5] shadow-md rounded-md"> {/* Updated background color */}
        <h2 className="text-2xl font-bold mb-4 text-center">Get a Free Estimate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your business name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Business Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Location where we will visit to provide an estimate"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Preferred Day</label>
            <input
              type="date"
              name="preferredDay"
              value={formData.preferredDay}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select a time</option>
              {Array.from({ length: 24 }, (_, index) => {
                const hour = index % 12 === 0 ? 12 : index % 12;
                const period = index < 12 ? 'AM' : 'PM';
                return (
                  <option key={index} value={`${hour}:00 ${period}`}>
                    {hour}:00 {period}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Include any important details. If there is a gate code needed for entry, please provide it here."
            />
          </div>

          <p className="text-sm text-gray-700 mb-4">
            * By requesting an estimate, our team will visit your location to assess the space and provide a detailed estimate.
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Request Estimate
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetEstimate;
