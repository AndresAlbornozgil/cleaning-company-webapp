import React, { useState } from 'react';
import axios from 'axios';

// LoginPage component: handles user login and authentication
const LoginPage = () => {
  const [email, setEmail] = useState(''); // State for storing email input
  const [password, setPassword] = useState(''); // State for storing password input

  // Function to handle the login process
  const handleLogin = async () => {
    try {
      // Send login credentials to the backend server
      const res = await axios.post('/api/users/login', { email, password });

      // On successful login, store the JWT token in localStorage for future requests
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
    } catch (err) {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Input field for email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update state when email changes
      />

      {/* Input field for password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update state when password changes
      />

      {/* Button to trigger the login process */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
