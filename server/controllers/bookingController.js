const Booking = require('../models/Booking');

// Handle creating a new booking
exports.createBooking = async (req, res) => {
  const { service, date } = req.body;
  try {
    // Create a new booking associated with the logged-in user
    const booking = new Booking({ user: req.user.id, service, date });
    await booking.save();
    res.json(booking); // Respond with the booking data
  } catch (err) {
    res.status(500).send('Server error'); // Handle any errors during booking creation
  }
};
