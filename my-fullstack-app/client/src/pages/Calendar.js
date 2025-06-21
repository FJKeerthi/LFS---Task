import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <h1>Weather Calendar</h1>
      <div className="calendar-content">
        <p>Calendar feature coming soon!</p>
        <div className="features-list">
          <h2>Upcoming Features:</h2>
          <ul>
            <li>Monthly weather forecasts</li>
            <li>Weather event scheduling</li>
            <li>Holiday weather predictions</li>
            <li>Weather alerts and reminders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
