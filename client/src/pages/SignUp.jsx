import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up form submitted', formState);

    if (!formState.email || !formState.password || !formState.name || !formState.phone) {
      setError({ message: 'Please fill in all fields.' });
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a1a1a]">
      <div className="p-6 border w-96 shadow-lg rounded-md" style={{ backgroundColor: '#F5F5F5' }}> {/* Updated background color */}
        <div className="text-center">
          {error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
          <h3 className="text-lg leading-6 font-medium text-gray-900">Create Account</h3>
          <form className="mt-2 px-7 py-3" onSubmit={handleFormSubmit}>
            <input
              className="w-full px-3 py-2 bg-white text-gray-700 border rounded-lg focus:outline-none mb-4"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="w-full px-3 py-2 bg-white text-gray-700 border rounded-lg focus:outline-none mb-4"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="w-full px-3 py-2 bg-white text-gray-700 border rounded-lg focus:outline-none mb-4"
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
            <input
              className="w-full px-3 py-2 bg-white text-gray-700 border rounded-lg focus:outline-none mb-4"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl bg-green-600 text-white mb-2"
            >
              Create Account
            </button>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl bg-gray-600 text-white"
              onClick={() => navigate('/sign-in')}
              id='goBackButton'
            >
              Go Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
