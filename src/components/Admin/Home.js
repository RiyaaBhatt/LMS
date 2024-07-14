// Home.js
import React from 'react';
import '../../Assests/css/Home.css';

export default function Home() {
  return (
    <div className="dashboard-container">
        
      <div className="welcome">
        <h2>Welcome back, Admin 👋</h2>
        <p>Let's learn something new today</p>
      </div>
      <div className="grid-container">
        <div className="grid-item summary-box">11 Completed courses</div>
        <div className="grid-item summary-box">03 Studied courses</div>
        <div className="grid-item summary-box">12 Pending courses</div>
        <div className="grid-item chart-box">Productivity Chart</div>
        <div className="grid-item time-tracker-box">Time Tracker</div>
        <div className="grid-item calendar-box">Calendar</div>
        <div className="grid-item course-box">Course 1</div>
        <div className="grid-item course-box">Course 2</div>
        <div className="grid-item course-box">Course 3</div>
        <div className="grid-item payment-box">Payment</div>
        <div className="grid-item profile-box">Profile</div>
        <div className="grid-item new-box">New Box 1</div>
        <div className="grid-item new-box">New Box 2</div>
        <div className="grid-item news-box">Latest News</div>
        <div className="grid-item notifications-box">Notifications</div>
      </div>
    </div>
  );
}
