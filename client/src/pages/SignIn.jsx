import React, { useState } from 'react';

const SignInForm = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formState);

    if (!formState.username || !formState.password) {
      setError({ message: 'Please enter both username and password.' });
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a1a1a]">
      <div className="p-6 border w-96 shadow-lg rounded-md" style={{ backgroundColor: '#F5F5F5' }}> {/* Updated background color */}
        <div className="text-center">
          {error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
          <h3 className="text-lg leading-6 font-medium text-black">Account</h3>
          <form className="mt-2 px-7 py-3" onSubmit={handleFormSubmit}>
            <input
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none mb-4"
              type="text"
              name="username"
              placeholder="Username"
              value={formState.username}
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
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
