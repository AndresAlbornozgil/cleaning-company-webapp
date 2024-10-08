import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Function to navigate and scroll to a section with a small delay to ensure the section is rendered
const handleNavClick = (navigate, section) => {
  navigate(`/#${section}`);
  setTimeout(() => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);  // Small delay to ensure smooth scrolling
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();  // To check current location
  const [isOpen, setIsOpen] = useState(false);  // State to manage menu visibility

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle HOME link click
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);  // Scroll to the top if already on the homepage
    } else {
      navigate('/');  // Navigate to the homepage
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          CLEANING CO.
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links - Hidden on mobile, visible on larger screens */}
        <ul className="hidden md:flex space-x-6 uppercase">
          <li className="cursor-pointer" onClick={handleHomeClick}>Home</li>  {/* HOME behavior handled here */}
          <li><Link to="/book-cleaning">Book Cleaning</Link></li>
          <li><Link to="/services">Services</Link></li>  {/* Services moved before Our Work */}
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'our-work')}>Our Work</li>  {/* Our Work moved after Services */}
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'reviews')}>Reviews</li>
          <li><Link to="/about">About</Link></li>
          <li className="cursor-pointer" onClick={() => handleNavClick(navigate, 'contact')}>Contact</li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>

        {/* Mobile Menu - Visible only when isOpen is true */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-600 text-white p-4 flex flex-col space-y-4">
            <li className="cursor-pointer" onClick={() => { handleHomeClick(); toggleMenu(); }}>Home</li>  {/* Mobile HOME link */}
            <li><Link to="/book-cleaning" onClick={toggleMenu}>Book Cleaning</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li className="cursor-pointer" onClick={() => { handleNavClick(navigate, 'our-work'); toggleMenu(); }}>Our Work</li>
            <li className="cursor-pointer" onClick={() => { handleNavClick(navigate, 'reviews'); toggleMenu(); }}>Reviews</li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li className="cursor-pointer" onClick={() => { handleNavClick(navigate, 'contact'); toggleMenu(); }}>Contact</li>
            <li><Link to="/jobs" onClick={toggleMenu}>Jobs</Link></li>
            <li><Link to="/sign-in" onClick={toggleMenu}>Sign In</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
