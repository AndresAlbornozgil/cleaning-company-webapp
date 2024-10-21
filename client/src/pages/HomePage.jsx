import React, { useState, useEffect } from 'react';
import mrSqueakyImage from '../assets/Mr. Squeaky Clean Solutions LLC.jpg'; // Import the image

const HomePage = () => {
  const workImages = [
    { src: mrSqueakyImage, alt: "Cleaned Living Room" },
    { src: "/images/work2.jpg", alt: "Spotless Kitchen" },
    { src: "/images/work3.jpg", alt: "Office Space" },
    { src: "/images/work4.jpg", alt: "Sparkling Bathroom" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Auto-slide every 3 seconds when the modal is not open
  useEffect(() => {
    if (isModalOpen) return; // Don't auto-slide if the modal is open

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    // Clear the interval when the component unmounts or modal opens
    return () => clearInterval(interval);
  }, [currentIndex, isModalOpen]);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Mr. Squeaky Clean Solutions, LLC.</h1>
          <p className="text-xl">Top-quality residential and commercial cleaning services.</p>
        </div>
      </section>

      {/* Our Work Section - Simple Image Slider */}
      <section id="our-work" className="min-h-screen bg-white py-16 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">Our Work</h2>
          <p className="text-lg mb-4">Check out some of our recent projects.</p>
        </div>
        <div className="relative w-full max-w-4xl">
          <img
            src={workImages[currentIndex].src}
            alt={workImages[currentIndex].alt}
            className="w-full h-96 object-cover rounded-md cursor-pointer"
            onClick={() => openModal(currentIndex)}
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-800 hover:text-black text-5xl"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-800 hover:text-black text-5xl"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Modal for Viewing Images */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <div className="relative w-full max-w-4xl">
            <img
              src={workImages[currentIndex].src}
              alt={workImages[currentIndex].alt}
              className="w-full h-auto max-h-screen object-contain rounded-md"
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

      {/* Reviews Section - Centered content */}
      <section id="reviews" className="min-h-screen bg-gray-100 py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Reviews</h2>
          <p>Customer reviews and testimonials.</p>
        </div>
      </section>

      {/* Contact Section - Half the height and centered content */}
      <section id="contact" className="min-h-[50vh] bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Get in touch with us at info@cleaningco.com or call (555) 123-4567.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
