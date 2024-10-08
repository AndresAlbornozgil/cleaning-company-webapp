const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const router = express.Router();

// Route to handle creating a new booking
router.post('/', createBooking);

module.exports = router;
