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
    const navigate = useNavigate();    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryName, setSelectedCountryName] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNoCities, setHasNoCities] = useState(false);
    const [manualCityInput, setManualCityInput] = useState("");

    // Get all countries using the library
    const countries = useMemo(() => {
        return Country.getAllCountries().sort((a, b) => a.name.localeCompare(b.name));
    }, []);    const handleCountryChange = (event) => {
        const countryCode = event.target.value;
        const selectedCountryData = countries.find(country => country.isoCode === countryCode);
        
        setSelectedCountry(countryCode);
        setSelectedCountryName(selectedCountryData?.name || '');
        setSelectedCity(""); // Reset city when country changes
        setManualCityInput(""); // Reset manual input
        
        if (countryCode) {
            // Get all cities for the selected country
            const countryCities = City.getCitiesOfCountry(countryCode);
            const sortedCities = countryCities ? countryCities.sort((a, b) => a.name.localeCompare(b.name)) : [];
            setCities(sortedCities);
            
            // Check if country has no cities in the library
            setHasNoCities(sortedCities.length === 0);
        } else {
            setCities([]);
            setHasNoCities(false);
        }
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setManualCityInput(""); // Reset manual input when selecting from dropdown
    };

    const handleManualCityInput = (event) => {
        setManualCityInput(event.target.value);
        setSelectedCity(""); // Reset dropdown selection when typing manually
    };    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            // Use the stored country name and selected city (from dropdown or manual input)
            const cityName = selectedCity || manualCityInput;
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
                toast.error("Location not found. Please try a different city or check the spelling.");
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
                        </Form.Group>                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Select City</Form.Label>
                            {!hasNoCities ? (
                                // Show dropdown when cities are available
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
                            ) : selectedCountry ? (
                                // Show text input when no cities are available for the selected country
                                <div>
                                    <Form.Control
                                        type="text"
                                        value={manualCityInput}
                                        onChange={handleManualCityInput}
                                        placeholder="Enter city name manually"
                                        required
                                        className="form-input"
                                    />
                                    <Form.Text className="text-muted mt-1">
                                        No cities found in our database for {selectedCountryName}. Please enter the city name manually.
                                    </Form.Text>
                                </div>
                            ) : (
                                // Show disabled input when no country is selected
                                <Form.Control
                                    type="text"
                                    placeholder="Please select a country first"
                                    disabled
                                    className="form-input"
                                />
                            )}
                        </Form.Group>                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="submit-button"
                            disabled={isLoading || !selectedCountry || (!selectedCity && !manualCityInput)}
                        >
                            {isLoading ? 'Fetching Weather...' : 'Get Weather'}
                            {!isLoading && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </Button>
                    </Form>                    {selectedCountry && (selectedCity || manualCityInput) && (
                        <div className="preview-section">
                            <h5 className="preview-title">Selected Location</h5>
                            <div className="location-info">
                                <div className="location-item">
                                    <strong>Country:</strong> {selectedCountryName}
                                </div>
                                <div className="location-item">
                                    <strong>City:</strong> {selectedCity || manualCityInput}
                                </div>
                                {hasNoCities && manualCityInput && (
                                    <div className="location-item">
                                        <small className="text-muted">
                                            <em>Manual entry (city data not available in database)</em>
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default Register;