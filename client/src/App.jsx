import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';  // Import Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-16"> {/* Ensure content grows to leave room for the footer */}
          <HomePage />
        </main>
        <Footer />  {/* Footer added */}
      </div>
    </Router>
  );
}

export default App;
