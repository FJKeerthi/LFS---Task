import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import himage from '../images/homei.png';

const Home = () => {
    const navigate = useNavigate();

    const handleGenerateClick = () => {
        navigate("/register");
    };

    return (
        <div className="luxury-wrapper">
            <div className="hero-gradient">
                <div className="container">
                    <main className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                 <span className="text-gradient">Simple weather application</span> 
                            </h1>
                            <p className="hero-subtitle">
                                Find the climate for any country at any time at your ease
                            </p>
                            <div className="hero-cta">
                                <button className="cta-button" onClick={handleGenerateClick}>
                                    <span> Into the app</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="image-container">
                                <img src={himage} alt="Weather forecasting" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose us</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>🌤️ 1. Accurate & Real-Time Forecasts</h3>
                            <p>Stay one step ahead with our live, location-based weather updates powered by cutting-edge meteorological data sources. Whether it’s rain, shine, or storm — we’ve got you covered in real time.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.4 15C19.2669 15.3016 19.227 15.6363 19.2849 15.9606C19.3428 16.2849 19.4962 16.5836 19.724 16.8175C19.9518 17.0514 20.243 17.2095 20.5561 17.2709C20.8692 17.3323 21.1884 17.2942 21.475 17.162L21.6 17.1C21.8184 16.9794 22.0024 16.8059 22.1348 16.5955C22.2672 16.3851 22.3436 16.1448 22.3568 15.8971C22.37 15.6494 22.3195 15.4026 22.2101 15.1799C22.1007 14.9573 21.9361 14.7663 21.732 14.625L19.4 13M4.6 15C4.73314 15.3016 4.77301 15.6363 4.71511 15.9606C4.65721 16.2849 4.50384 16.5836 4.27603 16.8175C4.04822 17.0514 3.75703 17.2095 3.44394 17.2709C3.13085 17.3323 2.81159 17.2942 2.525 17.162L2.4 17.1C2.18164 16.9794 1.99756 16.8059 1.86516 16.5955C1.73276 16.3851 1.65642 16.1448 1.64321 15.8971C1.63 15.6494 1.68052 15.4026 1.78994 15.1799C1.89935 14.9573 2.06386 14.7663 2.268 14.625L4.6 13M4.6 9C4.73314 8.69842 4.77301 8.36368 4.71511 8.03941C4.65721 7.71514 4.50384 7.41643 4.27603 7.18254C4.04822 6.94865 3.75703 6.79052 3.44394 6.72911C3.13085 6.6677 2.81159 6.70584 2.525 6.838L2.4 6.9C2.18164 7.02062 1.99756 7.19407 1.86516 7.40448C1.73276 7.61489 1.65642 7.85522 1.64321 8.10289C1.63 8.35056 1.68052 8.59742 1.78994 8.82008C1.89935 9.04274 2.06386 9.23369 2.268 9.375L4.6 11M19.4 9C19.2669 8.69842 19.227 8.36368 19.2849 8.03941C19.3428 7.71514 19.4962 7.41643 19.724 7.18254C19.9518 6.94865 20.243 6.79052 20.5561 6.72911C20.8692 6.6677 21.1884 6.70584 21.475 6.838L21.6 6.9C21.8184 7.02062 22.0024 7.19407 22.1348 7.40448C22.2672 7.61489 22.3436 7.85522 22.3568 8.10289C22.37 8.35056 22.3195 8.59742 22.2101 8.82008C22.1007 9.04274 21.9361 9.23369 21.732 9.375L19.4 11" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>⚡ 2. User-Friendly & Mobile Ready</h3>
                            <p>Our sleek, responsive design ensures you get all the essential weather info at a glance — anytime, anywhere, on any device. No clutter, just clear forecasts.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15V3M12 15L8 11M12 15L16 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>🌎 3. Personalized Alerts & Insights</h3>
                            <p>Get customized weather alerts, forecasts, and tips based on your location and preferences. Plan your day, travel, or outdoor activities with confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="luxury-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo">
                                <span className="logo-text">Weather<span className="logo-x"> App</span></span>
                            </div>
                            <p className="footer-description">
                                Advanced Weather reporting application with real-time updates.    
                            </p>
                            <div className="social-links">
                                <a href="#" aria-label="Twitter">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4.01C21 4.5 20.02 4.69 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 11.977 6.323 12 8V9C8 9 5 7 3 4C3 4 -1 13 8 17C5 19 3 20 1 19C8 23 17 21 20 12C20.91 9.663 21.83 6.69 22 4.01Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="GitHub">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="link-column">
                                <h4>Product</h4>
                                <a href="#">Features</a>
                                <a href="#">Pricing</a>
                                <a href="#">API</a>
                                <a href="#">Integrations</a>
                            </div>
                            <div className="link-column">
                                <h4>Resources</h4>
                                <a href="#">Weather API</a>
                                <a href="#">Documentation</a>
                                <a href="#">Research</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className="link-column">
                                <h4>More</h4>
                                <a href="#">About us</a>
                                <a href="#">Careers</a>
                                <a href="#">Policies</a>
                                <a href="#">Terms</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>© {new Date().getFullYear()} Test version</span>
                        <div className="footer-contacts">
                            <span>📧 test@test.com</span>
                            <span>📞 +94 (777) 123-456</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;