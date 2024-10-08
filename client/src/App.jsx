import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import About from './pages/About';
import Jobs from './pages/Jobs';
import BookCleaning from './pages/BookCleaning';
import SignInPage from './pages/SignInPage';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';  // Import ScrollToSection component
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />  {/* Ensure scrolling to top on page change */}
        <ScrollToSection />  {/* Ensure scrolling to sections based on hash */}
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/book-cleaning" element={<BookCleaning />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
