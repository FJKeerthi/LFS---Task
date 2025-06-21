import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Colombo');

  const fetchWeather = async (searchCity) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/weather/current/${searchCity}`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="weather-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {weatherData && (
        <div className="weather-card">
          <div className="weather-header">
            <h2>{weatherData.location.name}</h2>
            <p>{weatherData.location.country}</p>
          </div>
          <div className="weather-info">
            <div className="weather-main">
              <img src={weatherData.current.condition.icon} alt="Weather icon" />
              <h1>{weatherData.current.temp_c}°C</h1>
              <p>{weatherData.current.condition.text}</p>
            </div>
            <div className="weather-details">
              <div className="detail">
                <span>Humidity</span>
                <span>{weatherData.current.humidity}%</span>
              </div>
              <div className="detail">
                <span>Wind Speed</span>
                <span>{weatherData.current.wind_kph} km/h</span>
              </div>
              <div className="detail">
                <span>UV Index</span>
                <span>{weatherData.current.uv}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
