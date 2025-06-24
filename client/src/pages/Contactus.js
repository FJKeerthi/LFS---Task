import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Contactus.css';

const Contactus = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-page">
            <Container className="contact-container">
                <div className="contact-header text-center">
                    <h2 className="contact-title">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="contact-subtitle">
                        contact us. we would love to hear from you all.
                    </p>
                </div>

                <Row className="g-4 justify-content-center">
                    <Col md={6} lg={4}>
                        <Card className="contact-card">
                            <Card.Body className="text-center">
                                <div className="contact-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92M16 8L12 4M12 4L8 8M12 4V16" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4 className="contact-method">Email Us</h4>
                                <p className="contact-detail">test@test.com</p>
                                <button 
                                    className="contact-action"
                                    onClick={() => window.location.href = 'test@test.com'}
                                >
                                    Send Email
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="contact-card">
                            <Card.Body className="text-center">
                                <div className="contact-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 20 18 20C14.0993 19.763 10.4202 17.8995 7.73604 14.864C5.05187 11.8285 3.57615 7.84835 3.5 3.5C3.5 2.96957 3.71071 2.46086 4.08579 2.08579C4.46086 1.71071 4.96957 1.5 5.5 1.5H9C9.55228 1.5 10 1.94772 10 2.5C10 3.01968 10.1999 4.1969 10.5 5.5C10.7042 6.38039 10.9539 7.14231 11 7.5C11.0523 7.91391 10.8698 8.31192 10.525 8.55L9.5 9.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4 className="contact-method">Call Us</h4>
                                <p className="contact-detail">+94 123456789</p>
                                <button 
                                    className="contact-action"
                                    onClick={() => window.location.href = 'tel:+94770986543'}
                                >
                                    Call Now
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="contact-card">
                            <Card.Body className="text-center">
                                <div className="contact-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4 className="contact-method">Visit Us</h4>
                                <p className="contact-detail">Colombo, Sri Lanka</p>
                                <button 
                                    className="contact-action"
                                    onClick={() => window.open('https://maps.app.goo.gl/7cCmroYd832DBYgh6', '_blank')}
                                >
                                    Get Directions
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contactus;