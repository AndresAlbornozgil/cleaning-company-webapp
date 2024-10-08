const mongoose = require('mongoose');

// This function connects to the MongoDB database using the URI from the .env file.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the application if the database connection fails
  }
};

module.exports = connectDB;
