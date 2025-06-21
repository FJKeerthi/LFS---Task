import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Welcome to Weather App</h1>
        <p>Your personal weather assistant for Colombo and beyond</p>
        <button onClick={() => navigate('/weather')} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
