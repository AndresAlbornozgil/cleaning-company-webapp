import React, { useState } from 'react';

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    notes: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Estimate Request Submitted:', formData);
    // Handle form submission logic (e.g., send data to a server)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Request a Free Estimate</h2>

      {/* Name */}
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

      {/* Email */}
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

      {/* Service Type */}
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
          <option value="commercial-cleaning">Commercial Cleaning</option>
          <option value="basic-cleaning">Basic Cleaning (Residential)</option>
          <option value="deep-cleaning">Deep Cleaning (Residential)</option>
          <option value="move-in-out">Move-In/Out Cleaning (Residential)</option>
        </select>
      </div>

      {/* Image Upload Section */}
      <div className="mb-4">
        <label className="block text-gray-700">Upload Pictures (Required)</label>
        <p className="text-sm text-gray-500">Please upload pictures of every room to help us provide an accurate estimate.</p>
        <input
          type="file"
          name="images"
          onChange={handleImageUpload}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          multiple
          accept="image/*"
          required
        />
      </div>

      {/* Notes Section */}
      <div className="mb-4">
        <label className="block text-gray-700">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Example: Indicate areas that need extra attention"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded mt-4">
        Request Free Estimate
      </button>
    </form>
  );
};

export default EstimateForm;
