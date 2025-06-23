import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './WeatherForecast.css';

const WeatherForecast = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const weatherData = location.state;

    if (!weatherData) {
        return (
            <div className="weather-page">
                <Container>
                    <Card className="text-center p-4">
                        <h3>No weather data available</h3>
                        <Button onClick={() => navigate('/register')} variant="primary">
                            Go Back to Search
                        </Button>
                    </Card>
                </Container>
            </div>
        );
    }

    const { current, forecast, location: weatherLocation } = weatherData;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const getWindDirection = (degree) => {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        return directions[Math.round(degree / 22.5) % 16];
    };

    return (
        <div className="weather-page">
            <Container>
                {/* Header Section */}
                <div className="weather-header">
                    <Button 
                        variant="outline-primary" 
                        onClick={() => navigate('/register')}
                        className="back-button"
                    >
                        ← Back to Search
                    </Button>
                    <div className="location-info">
                        <h1 className="location-title">
                            {weatherLocation.name}, {weatherLocation.country}
                        </h1>
                        <p className="location-subtitle">
                            {weatherLocation.region} • Last updated: {new Date(current.last_updated).toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Current Weather Section */}
                <Card className="current-weather-card mb-4">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="current-temp-section">
                                    <div className="temp-display">
                                        <span className="current-temp">{Math.round(current.temp_c)}°</span>
                                        <div className="temp-details">
                                            <div>Feels like {Math.round(current.feelslike_c)}°C</div>
                                            <div className="condition">{current.condition.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="weather-icon-section text-center">
                                    <img 
                                        src={`https:${current.condition.icon}`} 
                                        alt={current.condition.text}
                                        className="current-weather-icon"
                                    />
                                </div>
                            </Col>
                        </Row>
                        
                        <Row className="weather-stats mt-4">
                            <Col xs={6} md={3}>
                                <div className="stat-item">
                                    <div className="stat-label">Humidity</div>
                                    <div className="stat-value">{current.humidity}%</div>
                                </div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="stat-item">
                                    <div className="stat-label">Wind</div>
                                    <div className="stat-value">{current.wind_kph} km/h {getWindDirection(current.wind_degree)}</div>
                                </div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="stat-item">
                                    <div className="stat-label">Visibility</div>
                                    <div className="stat-value">{current.vis_km} km</div>
                                </div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="stat-item">
                                    <div className="stat-label">UV Index</div>
                                    <div className="stat-value">{current.uv}</div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* 5-Day Forecast Section */}
                <Card className="forecast-card">
                    <Card.Header>
                        <h3 className="forecast-title">5-Day Forecast</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {forecast.forecastday.map((day, index) => (
                                <Col key={day.date} xs={12} sm={6} lg={4} xl={2}>
                                    <Card className={`forecast-day-card ${index === 0 ? 'today' : ''}`}>
                                        <Card.Body className="text-center">
                                            <div className="forecast-date">
                                                {index === 0 ? 'Today' : formatDate(day.date)}
                                            </div>
                                            <img 
                                                src={`https:${day.day.condition.icon}`} 
                                                alt={day.day.condition.text}
                                                className="forecast-icon"
                                            />
                                            <div className="forecast-condition">
                                                {day.day.condition.text}
                                            </div>
                                            <div className="forecast-temps">
                                                <span className="high-temp">{Math.round(day.day.maxtemp_c)}°</span>
                                                <span className="low-temp">{Math.round(day.day.mintemp_c)}°</span>
                                            </div>
                                            <div className="forecast-details">
                                                <div className="rain-chance">
                                                    <small>💧 {day.day.daily_chance_of_rain}%</small>
                                                </div>
                                                <div className="wind-info">
                                                    <small>💨 {day.day.maxwind_kph} km/h</small>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* Hourly Forecast for Today */}
                <Card className="hourly-forecast-card mt-4">
                    <Card.Header>
                        <h3 className="forecast-title">Today's Hourly Forecast</h3>
                    </Card.Header>
                    <Card.Body>
                        <div className="hourly-scroll">
                            <Row className="g-2 flex-nowrap">
                                {forecast.forecastday[0].hour.filter((_, index) => index % 3 === 0).map((hour) => (
                                    <Col key={hour.time} className="hourly-item">
                                        <Card className="hourly-card text-center">
                                            <Card.Body className="p-2">
                                                <div className="hourly-time">
                                                    {new Date(hour.time).toLocaleTimeString('en-US', { 
                                                        hour: 'numeric', 
                                                        hour12: true 
                                                    })}
                                                </div>
                                                <img 
                                                    src={`https:${hour.condition.icon}`} 
                                                    alt={hour.condition.text}
                                                    className="hourly-icon"
                                                />
                                                <div className="hourly-temp">
                                                    {Math.round(hour.temp_c)}°
                                                </div>
                                                <div className="hourly-rain">
                                                    💧 {hour.chance_of_rain}%
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default WeatherForecast;
