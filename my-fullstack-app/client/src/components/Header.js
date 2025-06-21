import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/home" className="nav-logo">
          <img src="/images/logo.png" alt="Weather App Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
