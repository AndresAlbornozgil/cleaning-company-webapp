import React from 'react';

// Scrolls to the corresponding section on the page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">
          CLEANING CO.
        </div>
        <ul className="flex space-x-6 uppercase">
          <li className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('book-cleaning')}>Book Cleaning</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('services')}>Services</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('our-work')}>Our Work</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('reviews')}>Reviews</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('jobs')}>Jobs</li> {/* JOBS Link */}
          <li className="cursor-pointer" onClick={() => scrollToSection('sign-in')}>Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
