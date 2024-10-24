import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="container mx-auto text-center">
        <p className="text-4xl font-bold mb-4">
          Follow Us
        </p>

        <div className="flex justify-center space-x-6">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
