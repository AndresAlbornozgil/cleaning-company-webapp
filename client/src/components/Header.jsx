import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Function to navigate and scroll to a section
const handleNavClick = (navigate, section) => {
  navigate(`/#${section}`);  // Navigate to homepage with hash
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">
          CLEANING CO.
        </div>
        <ul className="flex space-x-6 uppercase">
          <li><Link to="/">Home</Link></li>  {/* Home Link */}
          <li><Link to="/book-cleaning">Book Cleaning</Link></li>  {/* Book Cleaning page */}
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'our-work')}>Our Work</li>  {/* Navigate and scroll to Our Work */}
          <li><Link to="/services">Services</Link></li>  {/* Services page */}
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'reviews')}>Reviews</li>  {/* Navigate and scroll to Reviews */}
          <li><Link to="/about">About</Link></li>  {/* About page */}
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'contact')}>Contact</li>  {/* Navigate and scroll to Contact */}
          <li><Link to="/jobs">Jobs</Link></li>  {/* Jobs page */}
          <li><Link to="/sign-in">Sign In</Link></li>  {/* Sign In page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
