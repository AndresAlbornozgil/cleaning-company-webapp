import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import mrSqueakyCleanImage from "../assets/MrSqueakyClean.jpg"; // Import the image
import "../index.css";

const HomePage = () => {
  const navigate = useNavigate(); // For navigation

  const reviews = [
    {
      name: "Jessica Miller",
      feedback:
        "Mr. Squeaky Clean did an amazing job with our home! We had just moved in, and they made sure everything was spotless. Highly recommended!",
    },
    {
      name: "Carlos Ramirez",
      feedback:
        "Great service! The team was punctual, professional, and left our office looking better than ever. Will definitely be using them again.",
    },
    {
      name: "Samantha Lee",
      feedback:
        "I've tried other cleaning companies, but none compare to Mr. Squeaky Clean. They pay attention to every detail and are always reliable.",
    },
    {
      name: "Michael Johnson",
      feedback:
        "Fantastic service! Very thorough and the staff is super friendly. My house has never looked so clean!",
    },
    {
      name: "Emily Thompson",
      feedback:
        "I booked them for a deep cleaning before hosting a party, and they did not disappoint. The place was sparkling! Thank you!",
    },
  ];

  return (
    <div className="bg-[#DED7CF]">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center py-12"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Mr. Squeaky Clean Solutions, LLC.
          </h1>
          <p className="text-xl mt-4">
            Top-quality residential and commercial cleaning services.
          </p>
          <img
            src={mrSqueakyCleanImage}
            alt="Mr. Squeaky Clean"
            className="w-80 h-80 rounded-full shadow-lg mx-auto mb-10 mt-10"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-10 dark-section" // Apply dark mode class here
        id="services"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Our Services
          </h2>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-wrap md:flex-nowrap md:gap-4 xs:gap-4 justify-center items-center mt-8">
          <div className="lg:w-[50%] xs:w-full">
            <img
              className="w-full h-auto rounded-lg"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="billboard image"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-element text-element p-6 rounded-lg mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold">Commercial Cleaning</h2>
            <p className="text-md mt-4">
              Commercial cleaning services cater to businesses of all sizes,
              ensuring a clean and welcoming environment for employees, clients,
              and visitors. From office spaces to retail stores, our expert team
              handles everything from daily janitorial tasks to deep cleaning
              and sanitization, using high-grade equipment and eco-friendly
              products. We focus on maintaining cleanliness and hygiene
              standards, which are essential for a productive workplace. Whether
              it’s scheduled cleaning or one-time services, we ensure every
              corner is spotless, allowing businesses to operate smoothly
              without disruption.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
              onClick={() => navigate("/book-cleaning")}
            >
              Schedule Cleaning
            </button>
          </div>
        </div>

        {/* col-2 */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-wrap md:flex-nowrap md:gap-4 xs:gap-4 justify-center items-center mt-6">
          {/* Responsive image */}
          <div className="md:hidden xs:block xs:w-full">
            <img
              className="w-full h-auto rounded-lg"
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="billboard image"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-element text-element p-6 rounded-lg mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold">Residential Cleaning</h2>
            <p className="text-md mt-4">
              Residential cleaning services are designed to give homeowners a
              spotless, comfortable, and welcoming living space. Our
              professional team provides thorough cleaning from top to bottom,
              covering areas such as kitchens, bathrooms, living rooms, and
              bedrooms. We use safe, eco-friendly products to ensure a healthy
              environment for your family. Whether it's regular cleaning,
              seasonal deep cleaning, or preparing your home for special
              occasions, our flexible scheduling and attention to detail
              guarantee your home remains fresh, clean, and inviting.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
              onClick={() => navigate("/book-cleaning")}
            >
              Schedule Cleaning
            </button>
          </div>
          {/* Visible on larger screens */}
          <div className="hidden md:block lg:w-[50%]">
            <img
              className="w-full h-auto rounded-lg"
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="billboard image"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section - Fit Screen */}
      <section
        id="reviews"
        className="min-h-screen flex flex-col justify-center items-center py-12 bg-[#DED7CF]"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">
            See what our satisfied clients have to say!
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 m-4 w-80"
            >
              <p className="italic text-gray-700">"{review.feedback}"</p>
              <p className="mt-4 font-bold text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Subtle, Blended Design */}
      <section className="dark-section" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl text-element">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-element">
                  We would love to hear from you! Whether you have a question,
                  need assistance, or want to schedule a service, our team is
                  here to help. Feel free to reach out to us by phone or email,
                  and we'll get back to you as soon as possible.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                      id="contactSVG"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 contact-svg"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-element">
                        Contact
                      </h3>
                      <p className="text-element">Mobile: +1 (123) 456-7890</p>
                      <p className="text-element">
                        Email: mrsqueakyclean@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                      id="contactSVG"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 contact-svg"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-element">
                        Our Location
                      </h3>
                      <p className="text-element">Orlando, FL</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-element">
                  Send us a message!
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider text-element"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider text-element"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider text-element"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
