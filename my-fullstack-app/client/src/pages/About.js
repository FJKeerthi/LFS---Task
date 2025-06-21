import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Weather App</h1>
      <div className="about-content">
        <p>
          Weather App is your go-to source for accurate and up-to-date weather information
          in Colombo and cities around the world. We provide real-time weather data including
          temperature, humidity, wind speed, and UV index to help you plan your day better.
        </p>
        <p>
          Our mission is to make weather information accessible and easy to understand for
          everyone. Whether you're planning your daily commute or a weekend getaway, we've
          got you covered with reliable weather updates.
        </p>
        <div className="features">
          <h2>Key Features:</h2>
          <ul>
            <li>Real-time weather updates</li>
            <li>Accurate temperature readings</li>
            <li>Humidity and wind speed information</li>
            <li>UV index monitoring</li>
            <li>Multiple city search capability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
