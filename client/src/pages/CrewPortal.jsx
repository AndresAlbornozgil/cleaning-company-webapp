import React, { useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup localizer for the calendar
const localizer = momentLocalizer(moment);

const CrewPortal = () => {
  const [jobs, setJobs] = useState([
    { id: 1, address: '123 Maple St', notes: 'Be careful with the plants.', start: new Date(2024, 9, 5, 9, 0), end: new Date(2024, 9, 5, 12, 0), status: 'Assigned' },
    { id: 2, address: '456 Oak St', notes: 'Please clean the windows.', start: new Date(2024, 9, 7, 10, 0), end: new Date(2024, 9, 7, 14, 0), status: 'Assigned' },
    { id: 3, address: '789 Pine St', notes: 'Take extra care with the floors.', start: new Date(2024, 9, 9, 11, 0), end: new Date(2024, 9, 9, 15, 0), status: 'Completed' },
  ]);

  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job
  const jobDetailsRef = useRef(null); // Reference to Job Details section

  // Handle selecting a job from the calendar
  const handleJobClick = (job) => {
    setSelectedJob(job);
    // Scroll to Job Details section
    setTimeout(() => {
      if (jobDetailsRef.current) {
        jobDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle marking a job as completed
  const handleMarkAsCompleted = (jobId) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, status: 'Completed' } : job)));
    alert('Job marked as completed.');
    setSelectedJob(null);
  };

  // Job events for the calendar (convert jobs to events)
  const events = jobs.map((job) => ({
    id: job.id,
    title: job.address, // Only show the address in the calendar
    start: job.start,
    end: job.end,
    color: job.status === 'Assigned' ? 'green' : 'blue', // Assigned jobs are green, completed jobs are blue
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        {/* Welcome Back Section */}
        <h1 className="text-4xl font-bold text-center mb-8">Welcome Back</h1>

        {/* Calendar View for Jobs */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Schedule</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={(event) => ({
              style: { backgroundColor: event.color },
            })}
            onSelectEvent={(event) => handleJobClick(jobs.find((job) => job.id === event.id))}
          />
        </div>

        {/* Job Details Section */}
        {selectedJob && (
          <div ref={jobDetailsRef} className="bg-white shadow-md p-6 mt-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Job Details</h2>
            <p>
              <strong>Address:</strong> {selectedJob.address}
              <br />
              <strong>Date:</strong> {selectedJob.start.toDateString()}
              <br />
              <strong>Time:</strong> {selectedJob.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {/* Displays only the start time */}
              <br />
              <strong>Status:</strong> {selectedJob.status}
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Notes:</h3>
              <p>{selectedJob.notes}</p> {/* Display client notes */}
            </div>
            {selectedJob.status === 'Assigned' && (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleMarkAsCompleted(selectedJob.id)}
              >
                Mark as Completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CrewPortal;
