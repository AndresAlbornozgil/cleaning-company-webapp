import React, { useState, useRef, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup localizer for the calendar
const localizer = momentLocalizer(moment);

const ClientPortal = () => {
  // Sample data for current bookings, past jobs, and payments
  const [currentBooking, setCurrentBooking] = useState({
    id: 1,
    date: new Date(2024, 9, 25),
    address: '456 Elm St',
    status: 'Scheduled',
  });

  const [pastJobs, setPastJobs] = useState([
    { id: 1, date: new Date(2024, 9, 5), address: '789 Oak St', feedback: '' },
    { id: 2, date: new Date(2024, 8, 20), address: '456 Pine St', feedback: '' },
    { id: 3, date: new Date(2024, 7, 10), address: '123 Maple Ave', feedback: '' },
  ]);

  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job
  const [feedback, setFeedback] = useState(''); // Track feedback for the selected job

  const feedbackSectionRef = useRef(null); // Reference to the feedback section

  // Scroll to feedback section every time a job is selected
  useEffect(() => {
    if (selectedJob) {
      feedbackSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedJob]);

  // Handle clicking a job to leave feedback
  const handleJobClick = (job) => {
    if (job.id !== currentBooking.id) {
      setSelectedJob(job);
      setFeedback(job.feedback);
    }
  };

  // Handle submitting feedback
  const handleFeedbackSubmit = () => {
    setPastJobs(pastJobs.map((job) => (job.id === selectedJob.id ? { ...job, feedback } : job)));
    alert('Feedback submitted successfully.');
  };

  // Handle cancel for current booking
  const handleCancelBooking = () => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking?');
    if (confirmCancel) {
      setCurrentBooking(null);  // Cancel the booking
      alert('Your booking has been canceled.');
    }
  };

  // Events for the calendar (convert jobs to events)
  const events = [
    ...pastJobs.map((job) => ({
      id: job.id,
      title: job.address, // Display only the address
      start: job.date,
      end: job.date,
      color: 'blue', // Default color for past jobs
    })),
    currentBooking && {
      id: currentBooking.id,
      title: currentBooking.address, // Display only the address
      start: currentBooking.date,
      end: currentBooking.date,
      color: 'green', // Green for current booking
    },
  ].filter(Boolean);  // Filter out null values if there are no current bookings

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        {/* Welcome Back Section */}
        <h1 className="text-4xl font-bold text-center mb-8">Welcome Back</h1>

        {/* Current Booking Section */}
        {currentBooking ? (
          <div className="bg-white shadow-md p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Current Booking</h2>
            <p>
              <strong>Booking ID:</strong> {currentBooking.id}
              <br />
              <strong>Date:</strong> {currentBooking.date.toDateString()}
              <br />
              <strong>Address:</strong> {currentBooking.address}
              <br />
              <strong>Status:</strong> {currentBooking.status}
            </p>
            <div className="mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2" onClick={handleCancelBooking}>
                Cancel Booking
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-md p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">No Current Bookings</h2>
            <p>You do not have any upcoming bookings at the moment.</p>
          </div>
        )}

        {/* Calendar View for Past Bookings */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Past Bookings</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={(event) => ({
              style: { backgroundColor: event.color },
            })}
            onSelectEvent={(event) => handleJobClick(pastJobs.find((job) => job.id === event.id) || currentBooking)}
          />
        </div>

        {/* Feedback Section */}
        {selectedJob && (
          <div ref={feedbackSectionRef} className="bg-white shadow-md p-6 mt-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Leave Feedback for Job #{selectedJob.id}</h2>
            <p>
              <strong>Date:</strong> {selectedJob.date.toDateString()}
              <br />
              <strong>Address:</strong> {selectedJob.address}
            </p>
            <textarea
              className="w-full p-2 border rounded-lg mt-2"
              rows="4"
              placeholder="Leave feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPortal;
