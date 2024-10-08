const mongoose = require('mongoose');

// Define the Booking schema with a reference to the User model and service information.
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference the User who made the booking
  service: { type: String, required: true }, // Type of service booked
  date: { type: Date, required: true }, // Date of the booking
  status: { type: String, default: 'pending' }, // Booking status (default to 'pending')
});

module.exports = mongoose.model('Booking', bookingSchema); // Export the model so it can be used elsewhere
