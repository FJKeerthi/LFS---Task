import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Your Weather Companion</h1>
        <p>Get real-time weather updates for Colombo and cities worldwide</p>
        <Link to="/weather" className="cta-button">Check Weather</Link>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-cloud"></i>
            <h3>Real-time Updates</h3>
            <p>Get the latest weather information as it happens</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Multiple Locations</h3>
            <p>Check weather for any city around the world</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Friendly</h3>
            <p>Access weather updates on any device</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Detailed Analytics</h3>
            <p>View comprehensive weather metrics</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
