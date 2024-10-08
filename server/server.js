const express = require('express');
const connectDB = require('./config/db'); // Import the MongoDB connection function
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Connect to the MongoDB database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS to allow requests from the frontend
app.use(express.json()); // Enable parsing of JSON request bodies

// Define routes for user authentication and bookings
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Start the server and listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
