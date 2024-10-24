import React from "react";
import mrSqueakyCleanImage from "../assets/MrSqueakyClean.jpg"; // Import the image

const About = () => {
  return (
    <div className="sm:flex items-center justify-center max-w-full bg-[#1a1a1a] text-white overflow-hidden py-10">
      {/* Image Section */}
      <div className="sm:w-2/5 p-4 flex justify-center mt-6 mb-6">
        <div className="image object-center">
          <img
            src={mrSqueakyCleanImage}
            alt="Mr. Squeaky Clean"
            className="rounded-[70%]" // Add 70% border radius
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-3/5 p-4 sm:pl-6 mt-6 mb-6">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-white">
            About Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Mr. Squeaky Clean Solutions, LLC—your dedicated partner in professional commercial cleaning services. We understand that a pristine, well-maintained workspace is key to making a great impression and boosting productivity. That’s why we are committed to delivering top-quality, reliable, and eco-friendly cleaning solutions tailored specifically for businesses. From corporate offices and retail stores to industrial facilities, we’ve got you covered.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Our mission is simple: to redefine cleanliness with meticulous attention to detail, exceptional professionalism, and personalized care. We go beyond basic cleaning, offering a full range of services that consistently exceed expectations. We don’t just clean—we elevate your business environment, creating a spotless, welcoming, and healthy space for your employees and clients.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            At Mr. Squeaky Clean Solutions, we take pride in our reputation for quality, precision, and innovative approaches in commercial cleaning. Built on the values of integrity, transparency, and customer satisfaction, our team is meticulous, ensuring every corner shines. We use high-quality, eco-friendly, and non-toxic products that are safe for everyone who enters your space.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            When you choose us, you’re choosing peace of mind, knowing that your workspace is in the hands of dedicated professionals who care about every detail. Our flexible service packages mean we can accommodate your business’s unique needs and schedule, whether you require daily upkeep, weekly deep cleans, or specialized services.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Experience the Mr. Squeaky Clean difference and see why businesses trust us to keep their spaces immaculate. Contact us today to schedule your consultation and let us show you how we can make your workspace shine like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
