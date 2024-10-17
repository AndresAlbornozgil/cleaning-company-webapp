import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Mock Data for initial crew members, jobs, and estimates
const initialCrew = [
  { id: 1, name: 'Crew Member 1', email: 'crew1@example.com', phoneNumber: '123-456-7890' },
  { id: 2, name: 'Crew Member 2', email: 'crew2@example.com', phoneNumber: '987-654-3210' },
];

const initialJobs = [
  { id: 1, clientName: 'John Doe', address: '123 Main St', phoneNumber: '555-1234', status: 'pending', crewAssigned: null, date: '2024-10-22', time: '10:00 AM', notes: 'Entry gate code: 1234' },
  { id: 2, clientName: 'Jane Smith', address: '456 Maple Ave', phoneNumber: '555-5678', status: 'assigned', crewAssigned: 1, date: '2024-10-23', time: '2:00 PM', notes: 'Call on arrival' },
  { id: 3, clientName: 'Paul White', address: '789 Oak St', phoneNumber: '555-4321', status: 'assigned', crewAssigned: 2, date: '2024-10-25', time: '9:00 AM', notes: '' },
];

const initialEstimates = [
  { id: 1, clientName: 'Alice Johnson', serviceType: 'Deep Cleaning', estimateDetails: '3 rooms, 2 bathrooms', status: 'pending', date: '2024-10-21' },
  { id: 2, clientName: 'Bob Brown', serviceType: 'Move-In/Out Cleaning', estimateDetails: '4 rooms, 3 bathrooms', status: 'pending', date: '2024-10-24' },
];

const AdminPortal = () => {
  const [crew, setCrew] = useState(initialCrew); // State to manage crew members
  const [jobs, setJobs] = useState(initialJobs); // State to manage jobs
  const [estimates, setEstimates] = useState(initialEstimates); // State to manage estimates
  const [newCrew, setNewCrew] = useState({ name: '', email: '', phoneNumber: '', password: '' }); // New crew form
  const [newJob, setNewJob] = useState({ clientName: '', phoneNumber: '', address: '', date: '', time: '', notes: '', status: 'pending' });

  const localizer = momentLocalizer(moment);

  // Convert jobs to calendar events
  const jobEvents = jobs
    .filter((job) => job.status === 'assigned')
    .map((job) => ({
      title: `${crew.find((c) => c.id === job.crewAssigned)?.name}`,
      start: new Date(`${job.date} ${job.time}`),
      end: new Date(`${job.date} ${job.time}`),
      allDay: false,
    }));

  // Handle input changes in the "Add New Crew Member" form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCrew({
      ...newCrew,
      [name]: value,
    });
  };

  // Handle input changes for new job
  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  // Handle adding new crew member
  const handleAddCrew = () => {
    if (!newCrew.name || !newCrew.email || !newCrew.phoneNumber || !newCrew.password) {
      alert('Please provide name, email, phone number, and password for the crew member.');
      return;
    }

    const newMember = {
      id: crew.length + 1,
      name: newCrew.name,
      email: newCrew.email,
      phoneNumber: newCrew.phoneNumber,
      password: newCrew.password,
    };

    setCrew([...crew, newMember]); // Add new member to crew
    setNewCrew({ name: '', email: '', phoneNumber: '', password: '' }); // Reset form
    alert(`Crew member ${newMember.name} added successfully.`);
  };

  // Handle adding new task (job)
  const handleAddJob = () => {
    if (!newJob.clientName || !newJob.phoneNumber || !newJob.address || !newJob.date || !newJob.time) {
      alert('Please fill out all fields to add a task.');
      return;
    }

    const newTask = {
      id: jobs.length + 1,
      clientName: newJob.clientName,
      phoneNumber: newJob.phoneNumber,
      address: newJob.address,
      date: newJob.date,
      time: newJob.time,
      notes: newJob.notes,
      status: 'pending',
      crewAssigned: null,
    };

    setJobs([...jobs, newTask]); // Add new job
    setNewJob({ clientName: '', phoneNumber: '', address: '', date: '', time: '', notes: '', status: 'pending' }); // Reset form
    alert('New task added successfully.');
  };

  // Handle removing a job (task)
  const handleRemoveJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
    alert('Task removed.');
  };

  // Handle assigning a job to a crew member
  const handleAssignJob = (jobId, crewId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, crewAssigned: crewId, status: 'assigned' } : job
    );
    setJobs(updatedJobs);
    alert('Job assigned successfully.');
  };

  // Handle unassigning a job from a crew member
  const handleUnassignJob = (jobId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, crewAssigned: null, status: 'pending' } : job
    );
    setJobs(updatedJobs);
    alert('Job unassigned successfully.');
  };

  // Handle marking job as completed
  const handleMarkCompleted = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId); // Remove job from list
    setJobs(updatedJobs);
    alert('Job marked as completed.');
  };

  // Handle reviewing an estimate
  const handleReviewEstimate = (estimateId) => {
    const updatedEstimates = estimates.map((estimate) =>
      estimate.id === estimateId ? { ...estimate, status: 'reviewed' } : estimate
    );
    setEstimates(updatedEstimates);
    alert('Estimate reviewed successfully.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Business Manager Dashboard</h1>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Estimates</h2>
            <p className="text-gray-600 mt-2">{estimates.filter((estimate) => estimate.status === 'pending').length}</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Tasks</h2>
            <p className="text-gray-600 mt-2">{jobs.length}</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Crew</h2>
            <p className="text-gray-600 mt-2">{crew.length}</p>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4">Schedule</h2>
          <Calendar
            localizer={localizer}
            events={jobEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
          />
        </div>

        {/* Assign Tasks Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4">Assign Tasks</h2>
          <h3 className="text-xl font-semibold mt-8 mb-2">Assign a New Task</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700">Client Name</label>
              <input
                type="text"
                name="clientName"
                value={newJob.clientName}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter client's name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={newJob.phoneNumber}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={newJob.address}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newJob.date}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Time</label>
              <select
                name="time"
                value={newJob.time}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              >
                <option value="" disabled>Select a time</option>
                {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Notes</label>
              <textarea
                name="notes"
                value={newJob.notes}
                onChange={handleJobInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Any special instructions or notes..."
                rows="2"
              />
            </div>
          </div>
          <button
            onClick={handleAddJob}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Add Task
          </button>

          {/* Current Tasks */}
          <h3 className="text-xl font-semibold mt-8 mb-2">Current Tasks</h3>
          {jobs.map((job) => (
            <div key={job.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <p><strong>Client Name:</strong> {job.clientName}</p>
                <p><strong>Phone Number:</strong> {job.phoneNumber}</p>
                <p><strong>Address:</strong> {job.address}</p>
                <p><strong>Date:</strong> {job.date}</p>
                <p><strong>Time:</strong> {job.time}</p>
                <p><strong>Status:</strong> {job.status === 'pending' ? 'Pending Assignment' : 'Assigned'}</p>
                {job.crewAssigned && (
                  <div>
                    <p><strong>Assigned To:</strong> {crew.find((c) => c.id === job.crewAssigned)?.name}</p>
                    <button
                      onClick={() => handleMarkCompleted(job.id)}
                      className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg"
                    >
                      Mark Completed
                    </button>
                  </div>
                )}
              </div>
              <div>
                {job.status === 'pending' ? (
                  <select
                    onChange={(e) => handleAssignJob(job.id, e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option value="" disabled selected>
                      Assign to
                    </option>
                    {crew.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <button
                    onClick={() => handleUnassignJob(job.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Unassign
                  </button>
                )}
                <button
                  onClick={() => handleRemoveJob(job.id)}
                  className="bg-red-600 text-white px-4 py-2 ml-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Review Estimates Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4">Review Estimates</h2>
          {estimates.map((estimate) => (
            <div key={estimate.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <p><strong>Client Name:</strong> {estimate.clientName}</p>
                <p><strong>Service Type:</strong> {estimate.serviceType}</p>
                <p><strong>Details:</strong> {estimate.estimateDetails}</p>
                <p><strong>Date:</strong> {estimate.date}</p>
                <p><strong>Status:</strong> {estimate.status === 'pending' ? 'Pending Review' : 'Reviewed'}</p>
              </div>
              {estimate.status === 'pending' && (
                <button
                  onClick={() => handleReviewEstimate(estimate.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Review
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Manage Crew Section */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Crew</h2>
          <h3 className="text-xl font-semibold mt-8 mb-2">Add a New Crew Member</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={newCrew.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter crew member's name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={newCrew.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter crew member's email"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={newCrew.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter crew member's phone number"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={newCrew.password}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Set a password"
                required
              />
            </div>
          </div>
          <button
            onClick={handleAddCrew}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Add Crew Member
          </button>

          {/* Crew Member List */}
          <h3 className="text-xl font-semibold mt-8 mb-2">Current Crew Members</h3>
          {crew.map((member) => (
            <div key={member.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>Phone Number:</strong> {member.phoneNumber}</p>
              </div>
              <button
                onClick={() => handleRemoveCrew(member.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
