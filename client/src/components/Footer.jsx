import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2024 Cleaning Co. All rights reserved.</p>
        
        <div className="flex justify-center space-x-6">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* YouTube Link */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
