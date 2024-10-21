import React, { useState } from 'react';

const BookCleaning = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    serviceType: '',
    propertySize: '',
    additionalServices: [],
    additionalNotes: ''
  });

  const [totalPriceRange, setTotalPriceRange] = useState({ min: 0, max: 0 });

  const servicePrices = {
    standard: { min: 80, max: 120 },
    deep: { min: 150, max: 200 },
    moveout: { min: 200, max: 300 },
  };

  const propertySizePrices = {
    studio: { min: 50, max: 70 },
    "1bedroom": { min: 80, max: 110 },
    "2bedroom": { min: 100, max: 140 },
    "3bedroom": { min: 130, max: 180 },
    largeHome: { min: 200, max: 300 },
    veryLargeHome: { min: 300, max: 450 },
    officeSmall: { min: 150, max: 200 },
    officeMedium: { min: 250, max: 350 },
    officeLarge: { min: 400, max: 600 },
  };

  const additionalServicePrices = {
    carpetCleaning: { min: 30, max: 50 },
    windowWashing: { min: 20, max: 40 },
    fridgeCleaning: { min: 15, max: 30 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    calculateTotal({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedServices = checked
      ? [...formData.additionalServices, name]
      : formData.additionalServices.filter((service) => service !== name);
    setFormData({ ...formData, additionalServices: updatedServices });
    calculateTotal({ ...formData, additionalServices: updatedServices });
  };

  const calculateTotal = (data) => {
    let minTotal = 0;
    let maxTotal = 0;

    // Add service price
    if (data.serviceType && servicePrices[data.serviceType]) {
      minTotal += servicePrices[data.serviceType].min;
      maxTotal += servicePrices[data.serviceType].max;
    }

    // Add property size price
    if (data.propertySize && propertySizePrices[data.propertySize]) {
      minTotal += propertySizePrices[data.propertySize].min;
      maxTotal += propertySizePrices[data.propertySize].max;
    }

    // Add additional services prices
    data.additionalServices.forEach(service => {
      if (additionalServicePrices[service]) {
        minTotal += additionalServicePrices[service].min;
        maxTotal += additionalServicePrices[service].max;
      }
    });

    setTotalPriceRange({ min: minTotal, max: maxTotal });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Book a Cleaning Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
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
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Updated Time Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Preferred Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a service</option>
            <option value="standard">Standard Cleaning ($80 - $120)</option>
            <option value="deep">Deep Cleaning ($150 - $200)</option>
            <option value="moveout">Move-Out Cleaning ($200 - $300)</option>
          </select>
        </div>

        {/* Elaborate Property Size Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Property Size & Details</label>
          <select
            name="propertySize"
            value={formData.propertySize}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select property size</option>
            <option value="studio">Studio Apartment ($50 - $70)</option>
            <option value="1bedroom">1-Bedroom Apartment ($80 - $110)</option>
            <option value="2bedroom">2-Bedroom Apartment/House ($100 - $140)</option>
            <option value="3bedroom">3-Bedroom House ($130 - $180)</option>
            <option value="largeHome">Large Home ($200 - $300)</option>
            <option value="veryLargeHome">Very Large Home ($300 - $450)</option>
            <option value="officeSmall">Small Office ($150 - $200)</option>
            <option value="officeMedium">Medium Office ($250 - $350)</option>
            <option value="officeLarge">Large Office ($400 - $600)</option>
          </select>
        </div>

        {/* Checkbox Section for Additional Services */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Additional Services</label>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="carpetCleaning"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Carpet Cleaning ($30 - $50)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="windowWashing"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Window Washing ($20 - $40)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="fridgeCleaning"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Fridge Cleaning ($15 - $30)</span>
            </label>
          </div>
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

        {/* Total Price Range */}
        <div className="mb-4">
          <h3 className="text-lg font-bold">Estimated Price Range:</h3>
          <p>${totalPriceRange.min} - ${totalPriceRange.max}</p>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 mb-4">
          * The final price may vary based on actual conditions observed during the visit. A detailed assessment will help confirm the final cost.
        </p>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-600"
        >
          Book Cleaning
        </button>
      </form>
    </div>
  );
};

export default BookCleaning;
