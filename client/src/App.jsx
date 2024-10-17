import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import About from './pages/About';
import Jobs from './pages/Jobs';
import BookCleaning from './pages/BookCleaning';
import SignInPage from './pages/SignInPage';
import SignUp from './pages/SignUp';
import ConfirmBooking from './pages/ConfirmBooking'; // Newly added ConfirmBooking page
import AdminPortal from './pages/AdminPortal'; // Newly added Admin Portal

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Add a top padding equal to the header's height */}
        <main className="flex-grow pt-16">
          <Routes>
            {/* HomePage and Sections */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/book-cleaning" element={<BookCleaning />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/confirm-booking/:estimateId" element={<ConfirmBooking />} />
            {/* Admin Portal */}
            <Route path="/admin-portal" element={<AdminPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
