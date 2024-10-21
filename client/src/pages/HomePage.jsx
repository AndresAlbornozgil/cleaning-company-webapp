import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import bedroomImage from '../assets/beforeAfterBedroom.jpg';
import bathroomImage from '../assets/beforeAfterBathroom.jpg';
import livingRoomImage from '../assets/beforeAfterLivingRoom.jpg';
import kitchenImage from '../assets/beforeAfterKitchen.jpg';
import officeImage from '../assets/beforeAfterOffice.jpg';
import mrSqueakyCleanImage from '../assets/MrSqueakyClean.jpg'; // Import the image

const HomePage = () => {
  const workImages = [
    { src: bedroomImage, alt: "Before and After Bedroom Image" },
    { src: bathroomImage, alt: "Before and After Bathroom Image" },
    { src: livingRoomImage, alt: "Before and After LivingRoom Image" },
    { src: kitchenImage, alt: "Before and After Kitchen Image" },
    { src: officeImage, alt: "Before and After Office Image" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // For navigation

  let touchStartX = 0;
  let touchEndX = 0;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === workImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToServices = () => {
    navigate("/services");
    window.scrollTo(0, 0); // Scrolls to the top of the page after navigation
  };

  // Handle swipe on mobile devices
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe left to go to the next image
    }
    if (touchEndX - touchStartX > 50) {
      handlePrev(); // Swipe right to go to the previous image
    }
  };

  // Auto-slide every 4 seconds when the modal is not open
  useEffect(() => {
    if (isModalOpen) return; // Don't auto-slide if the modal is open

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    // Clear the interval when the component unmounts or modal opens
    return () => clearInterval(interval);
  }, [currentIndex, isModalOpen]);

  const reviews = [
    {
      name: "Jessica Miller",
      feedback: "Mr. Squeaky Clean did an amazing job with our home! We had just moved in, and they made sure everything was spotless. Highly recommended!",
    },
    {
      name: "Carlos Ramirez",
      feedback: "Great service! The team was punctual, professional, and left our office looking better than ever. Will definitely be using them again.",
    },
    {
      name: "Samantha Lee",
      feedback: "I've tried other cleaning companies, but none compare to Mr. Squeaky Clean. They pay attention to every detail and are always reliable.",
    },
    {
      name: "Michael Johnson",
      feedback: "Fantastic service! Very thorough and the staff is super friendly. My house has never looked so clean!",
    },
    {
      name: "Emily Thompson",
      feedback: "I booked them for a deep cleaning before hosting a party, and they did not disappoint. The place was sparkling! Thank you!",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8">Mr. Squeaky Clean Solutions, LLC.</h1>
          <img
            src={mrSqueakyCleanImage}
            alt="Mr. Squeaky Clean"
            className="w-80 h-80 rounded-full shadow-lg mx-auto mb-8"
          />
          <p className="text-xl mt-4">Top-quality residential and commercial cleaning services.</p>
        </div>
      </section>

      {/* Our Work Section - Simple Image Slider */}
      <section id="our-work" className="min-h-screen py-16 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">Check out some of our work</h2>
        </div>
        <div
          className="relative w-full max-w-4xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={workImages[currentIndex].src}
            alt={workImages[currentIndex].alt}
            className="w-full h-96 object-cover rounded-md cursor-pointer"
            onClick={() => openModal(currentIndex)}
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-gray-800 hover:text-black text-5xl hidden md:block"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-gray-800 hover:text-black text-5xl hidden md:block"
          >
            &#10095;
          </button>
        </div>
        {/* Our Services Button */}
        <button
          onClick={goToServices}
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          Our Services
        </button>
      </section>

      {/* Modal for Viewing Images */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <div className="relative w-full max-w-6xl flex items-center justify-center">
            <img
              src={workImages[currentIndex].src}
              alt={workImages[currentIndex].alt}
              className="w-auto h-auto max-h-screen object-contain rounded-md"
            />
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-400 text-5xl"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-400 text-5xl"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      {/* Reviews Section - Enhanced Content */}
      <section id="reviews" className="min-h-screen py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">See what our satisfied clients have to say!</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <p className="italic text-gray-700">"{review.feedback}"</p>
              <p className="mt-4 font-bold text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Subtle, Blended Design */}
      <section id="contact" className="py-12 flex flex-col items-center justify-center bg-gray-100 -mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">Get in touch with us at:</p>
          <p className="text-2xl font-semibold">info@cleaningco.com</p>
          <p className="text-2xl font-semibold">Call us at (555) 123-4567</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
