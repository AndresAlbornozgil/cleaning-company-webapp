import React from "react";
import mrSqueakyCleanImage from "../assets/MrSqueakyClean.jpg"; // Import the image

const About = () => {
  return (
    <div className="sm:flex items-center justify-center max-w-full bg-[#1a1a1a] text-white overflow-hidden py-10"> {/* Added padding to create more space */}
      <div className="sm:w-2/5 p-4 flex justify-center mt-6 mb-6"> {/* Added margin to top and bottom */}
        <div className="image object-center">
          <img
            src={mrSqueakyCleanImage}
            alt="Mr. Squeaky Clean"
            className="rounded-[70%]" // Add 70% border radius
          />
        </div>
      </div>
      <div className="sm:w-3/5 p-4 sm:pl-6 mt-6 mb-6"> {/* Added margin to top and bottom */}
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-white">
            About Us
          </h2>
          <p className="text-gray-300">
            Welcome to Mr. Squeaky Clean Solutions, LLC, your trusted partner in
            professional cleaning services. Established with a commitment to
            excellence, we are a customer-centric company dedicated to
            delivering high-quality, reliable, and eco-friendly cleaning
            solutions for homes, offices, and commercial spaces. Our mission is
            to redefine cleanliness through meticulous attention to detail,
            professionalism, and personalized care, consistently exceeding
            expectations by providing top-tier services tailored to specific
            needs. Founded by Andres Albornoz, who recognized the need for
            dependable and customized cleaning, Mr. Squeaky Clean Solutions was
            built on values of integrity, transparency, and customer
            satisfaction. We’ve grown from a small local team to a trusted name
            known for quality, precision, and innovative approaches. Our
            cleaners are meticulous, ensuring every corner shines, using
            high-quality, eco-friendly, and non-toxic products that are safe for
            you, your family, and the environment. We believe in fostering
            long-lasting relationships with clients by consistently delivering
            exceptional results and maintaining sustainable, effective cleaning
            practices. At Mr. Squeaky Clean Solutions, we aim to create spaces
            where you can thrive, relax, and feel comfortable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
