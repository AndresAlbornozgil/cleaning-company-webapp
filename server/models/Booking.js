const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
