import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BookingForm from './components/BookingForm';
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer

// Main App component that handles routes and includes header/footer
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />  {/* Include header at the top */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </main>

        <Footer />  {/* Include footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
