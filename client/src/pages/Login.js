import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = authService.login({ email, password });
      if (result.success) {
        authService.setCurrentUser(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.log(err);
      setError(err.message || 'Invalid email or password');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='form-title'>Welcome Back</h1>
          <p className='form-subtitle'>Sign in to continue your journey</p>
          
          {error && <div className='error-message'>{error}</div>}
          
          <div className='form-group'>
            <label className='input-label'>Email Address</label> 
            <input
              className='form-input'
              placeholder='test@ss.com'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className='form-group'>
            <label className='input-label'>Password</label> 
            <input
              className='form-input'
              placeholder='•••••••'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='form-options'>
            <label className='remember-me'>
              <input type='checkbox' />
              <span>Remember me</span>
            </label>
          </div>
          
          <button type='submit' className='login-button'>
            login
          </button>
          
          <p className='signup-link'>
            Don't have an account? <a href='/signup'>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;