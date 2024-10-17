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
import AdminPortal from './pages/AdminPortal'; // Ensure this import is correct
import ConfirmBooking from './pages/ConfirmBooking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16"> {/* Add padding to account for fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/book-cleaning" element={<BookCleaning />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin-portal" element={<AdminPortal />} /> {/* Changed route to /admin-portal */}
            <Route path="/confirm-booking/:estimateId" element={<ConfirmBooking />} /> {/* Confirm Booking */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
