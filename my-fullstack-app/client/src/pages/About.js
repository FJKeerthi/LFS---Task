import React from "react";
import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">
                        About <span className="text-gradient">Weather App</span>
                    </h2>

                    <p className="about-description">
                        we’re passionate about helping people make smarter decisions through accurate and timely weather information. Whether you're planning your daily commute, a weekend getaway, or preparing for unexpected weather conditions, we’re here to provide the insights you need — when you need them.
                        Powered by reliable data sources and modern forecasting technology, our platform delivers real-time weather updates, personalized alerts, and intuitive forecasts tailored to your location.
                        We believe weather shouldn’t be a surprise — it should be a tool to help you live, work, and travel better.
                    </p>                    <div className="features-grid">
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 19H9C7 19 5 18 5 15.5C5 13 7 12 9 12C9 10.5 10 9 12 9S15 10.5 15 12H17.5C19 12 20.5 13.5 20.5 15.5S19 19 17.5 19Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 2V4M20.5 12H18.5M5.5 12H3.5M6.34 6.34L7.76 7.76M17.66 6.34L16.24 7.76" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Real-Time Weather Data</h3>
                            <p>Get accurate, up-to-the-minute weather conditions with temperature, humidity, and wind data from reliable meteorological sources.</p>
                        </div>
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V6M16 2V6M3.5 9.09H20.5M21 8.5V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V8.5C3 7.96957 3.21071 7.46086 3.58579 7.08579C3.96086 6.71071 4.46957 6.5 5 6.5H19C19.5304 6.5 20.0391 6.71071 20.4142 7.08579C20.7893 7.46086 21 7.96957 21 8.5Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 13.5H9M13 16.5H9" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>5-Day Forecasts</h3>
                            <p>Plan ahead with detailed weather predictions including hourly breakdowns and extended forecast trends.</p>
                        </div>
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 12C22.1046 12 23 12.8954 23 14C23 15.1046 22.1046 16 21 16C19.8954 16 19 15.1046 19 14C19 12.8954 19.8954 12 21 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 12C4.10457 12 5 12.8954 5 14C5 15.1046 4.10457 16 3 16C1.89543 16 1 15.1046 1 14C1 12.8954 1.89543 12 3 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 19C13.1046 19 14 19.8954 14 21C14 22.1046 13.1046 23 12 23C10.8954 23 10 22.1046 10 21C10 19.8954 10.8954 19 12 19Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 5.64C19.1421 6.42157 19.1421 7.67843 18.36 8.46C17.5784 9.24157 16.3216 9.24157 15.54 8.46C14.7584 7.67843 14.7584 6.42157 15.54 5.64C16.3216 4.85843 17.5784 4.85843 18.36 5.64Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.46 15.54C9.24157 16.3216 9.24157 17.5784 8.46 18.36C7.67843 19.1421 6.42157 19.1421 5.64 18.36C4.85843 17.5784 4.85843 16.3216 5.64 15.54C6.42157 14.7584 7.67843 14.7584 8.46 15.54Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 15.54C19.1421 16.3216 19.1421 17.5784 18.36 18.36C17.5784 19.1421 16.3216 19.1421 15.54 18.36C14.7584 17.5784 14.7584 16.3216 15.54 15.54C16.3216 14.7584 17.5784 14.7584 18.36 15.54Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.46 5.64C9.24157 6.42157 9.24157 7.67843 8.46 8.46C7.67843 9.24157 6.42157 9.24157 5.64 8.46C4.85843 7.67843 4.85843 6.42157 5.64 5.64C6.42157 4.85843 7.67843 4.85843 8.46 5.64Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Global Coverage</h3>
                            <p>Access weather data for any location worldwide with precise, location-based forecasts and alerts.</p>
                        </div>
                    </div>

                    
                </div>
            </section>
        </div>
    );
};

export default About;