const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema with name, email, and password fields.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique ensures no two users can have the same email
  password: { type: String, required: true },
});

// Before saving a user, hash their password for security.
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
  this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt
});

module.exports = mongoose.model('User', userSchema); // Export the model so it can be used elsewhere
