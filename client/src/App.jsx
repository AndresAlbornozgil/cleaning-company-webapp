import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '/src/index.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Jobs from './pages/Jobs';
import BookCleaning from './pages/BookCleaning'; // Updated from BookCleaning to ScheduleCleaning
import SignInPage from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdminPortal from './pages/AdminPortal';
import ClientPortal from './pages/ClientPortal';
import CrewPortal from './pages/CrewPortal';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/book-cleaning" element={<BookCleaning />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/admin-portal" element={<AdminPortal />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/crew-portal" element={<CrewPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
