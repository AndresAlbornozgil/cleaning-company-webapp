import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurWorkCarousel = () => {
  // Carousel settings for customization
  const settings = {
    dots: true,  // Display navigation dots
    infinite: true,  // Infinite scrolling
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Show 1 slide at a time
    slidesToScroll: 1,  // Scroll 1 slide at a time
    autoplay: true,  // Automatically scroll through slides
    autoplaySpeed: 3000,  // Time between slides (in milliseconds)
    arrows: true  // Display next/prev arrows for navigation
  };

  return (
    <div className="carousel-container max-w-5xl mx-auto">  {/* Increased the max width to make it bigger */}
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/900x450?text=Project+1"
            alt="Project 1"
            className="w-full h-96 object-cover"  // Adjusted size to make the images a little bigger
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/900x450?text=Project+2"
            alt="Project 2"
            className="w-full h-96 object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/900x450?text=Project+3"
            alt="Project 3"
            className="w-full h-96 object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/900x450?text=Project+4"
            alt="Project 4"
            className="w-full h-96 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default OurWorkCarousel;
