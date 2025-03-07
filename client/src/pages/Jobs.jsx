import React from "react";
import mrSqueakyCleanImage from "../assets/MrSqueakyClean.jpg"; // Import the image

const Jobs = () => {
  return (
    <div id="about" className="relative bg-[#1a1a1a] text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center">
        {/* Text Content */}
        <div className="relative z-10 pb-8 bg-[#1a1a1a] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#1a1a1a] transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                Why Work With Us?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At Mr. Squeaky Clean Solutions, we believe that a clean environment leads to a happier and healthier lifestyle. By joining our team, you’ll be part of a company that values professionalism, integrity, and high-quality service. We offer flexible work schedules, competitive pay, and opportunities for growth within our organization. 
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
                Whether you're looking to start a career or earn extra income, we provide all the training and support you need to succeed. If you're passionate about making a difference and want to be part of a dedicated, friendly, and supportive team, then this is the perfect place for you. Join us in delivering exceptional cleaning services to our clients and creating a brighter, cleaner future for everyone.
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition ease-in-out duration-300">
                Apply Here
              </button>
            </div>
          </main>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:relative">
          <img
            className="h-auto w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg"
            src={mrSqueakyCleanImage}
            alt="Mr. Squeaky Clean"
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
