import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formState);

    if (!formState.email || !formState.password) {
      setError({ message: 'Please enter both email and password.' });
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a1a1a]">
      <div className="p-6 border w-96 shadow-lg rounded-md bg-[#DED7CF] text-black">
        <div className="text-center">
          {error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
          <h3 className="text-lg leading-6 font-medium text-black">Sign In</h3>
          <form className="mt-2 px-7 py-3" onSubmit={handleFormSubmit}>
            <input
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none mb-4"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none mb-4"
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl bg-blue-600 text-white mb-4"
              id='signInButton'
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-gray-700">Don't have an account?</p>

          <button
            className="w-full px-4 py-2 mt-2 bg-green-600 text-white rounded-xl"
            onClick={() => navigate('/sign-up')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
