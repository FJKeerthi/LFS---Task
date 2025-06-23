import React, { useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { Country, City } from 'country-state-city';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryName, setSelectedCountryName] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Get all countries using the library
    const countries = useMemo(() => {
        return Country.getAllCountries().sort((a, b) => a.name.localeCompare(b.name));
    }, []);    const handleCountryChange = (event) => {
        const countryCode = event.target.value;
        const selectedCountryData = countries.find(country => country.isoCode === countryCode);
        
        setSelectedCountry(countryCode);
        setSelectedCountryName(selectedCountryData?.name || '');
        setSelectedCity(""); // Reset city when country changes
        
        if (countryCode) {
            // Get all cities for the selected country
            const countryCities = City.getCitiesOfCountry(countryCode);
            setCities(countryCities ? countryCities.sort((a, b) => a.name.localeCompare(b.name)) : []);
        } else {
            setCities([]);
        }
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            // Use the stored country name and selected city
            const cityName = selectedCity;
            const countryName = selectedCountryName;
            
            // Construct the query for weather API (city,country format works best)
            const locationQuery = `${cityName},${countryName}`;
            
            // Make API call to weather service
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
            const response = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(locationQuery)}&days=5&aqi=yes&alerts=yes`
            );
            
            if (response.status === 200) {
                const weatherData = {
                    ...response.data,
                    selectedCountry: countryName,
                    selectedCity: cityName,
                    countryCode: selectedCountry
                };
                
                toast.success(`Weather data fetched for ${cityName}, ${countryName}`);
                navigate('/weather-forecast', { state: weatherData });
            }
        } catch (error) {
            console.error('Weather API Error:', error);
            if (error.response?.status === 400) {
                toast.error("Location not found. Please try a different city.");
            } else if (error.response?.status === 401) {
                toast.error("Invalid API key. Please check configuration.");
            } else {
                toast.error("Failed to fetch weather data. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-page">
            <Container className="register-container">
                <Card className="register-card">
                    <div className="register-header">
                        <h2 className="register-title">
                             <span className="text-gradient">Find Weather by country and city</span>
                        </h2>
                        <p className="register-subtitle">
                            please choose the country you want to find the weather for.
                        </p>
                    </div>                    <Form onSubmit={handleSubmit} className="register-form">                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Select Country</Form.Label>
                            <Form.Select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                required
                                className="form-input"
                            >
                                <option value="">Choose a country...</option>
                                {countries.map((country) => (
                                    <option key={country.isoCode} value={country.isoCode}>
                                        {country.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Select City</Form.Label>
                            <Form.Select
                                value={selectedCity}
                                onChange={handleCityChange}
                                required
                                disabled={!selectedCountry}
                                className="form-input"
                            >
                                <option value="">
                                    {selectedCountry ? "Choose a city..." : "Please select a country first"}
                                </option>
                                {cities.map((city) => (
                                    <option key={`${city.name}-${city.stateCode}`} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group><Button 
                            variant="primary" 
                            type="submit" 
                            className="submit-button"
                            disabled={isLoading || !selectedCountry || !selectedCity}
                        >
                            {isLoading ? 'Fetching Weather...' : 'Get Weather'}
                            {!isLoading && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </Button>
                    </Form>                    {selectedCountry && selectedCity && (
                        <div className="preview-section">
                            <h5 className="preview-title">Selected Location</h5>
                            <div className="location-info">
                                <div className="location-item">
                                    <strong>Country:</strong> {selectedCountryName}
                                </div>
                                <div className="location-item">
                                    <strong>City:</strong> {selectedCity}
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default Register;