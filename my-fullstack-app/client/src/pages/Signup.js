import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        axios.post('http://localhost:4006/register', { name, email, password })
            .then(result => {
                console.log("User registered:", result);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                setError('Registration failed. Please try again.');
            });
    };

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <h1 className='form-title'>Create Account</h1>
                    <p className='form-subtitle'>Join WeatherView for premium forecasts</p>
                    
                    {error && <div className='error-message'>{error}</div>}
                    
                    <div className='form-group'>
                        <label className='input-label'>Full Name</label>
                        <input
                            className='form-input'
                            placeholder='Enter your full name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label className='input-label'>Email Address</label>
                        <input
                            className='form-input'
                            placeholder='Enter your email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label className='input-label'>Password</label>
                        <input
                            className='form-input'
                            placeholder='Create a password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label className='input-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            placeholder='Confirm your password'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type='submit' className='signup-button'>
                        Create Account
                    </button>
                    
                    <p className='login-link'>
                        Already have an account? <a href='/login'>Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;