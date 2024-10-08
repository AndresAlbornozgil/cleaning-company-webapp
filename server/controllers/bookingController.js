const Booking = require('../models/Booking');

// Create a booking
exports.createBooking = async (req, res) => {
  const { service, date } = req.body;
  try {
    const booking = new Booking({ user: req.user.id, service, date });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
