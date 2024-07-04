import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Login Data Submitted: ', formData);

    if (formData.password.length < 4) {
      setMessage('Password must be at least 4 characters long');
      console.log('Password must be at least 4 characters long');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      setMessage(response.data.message);

      if (response.data.success) {
        setMessage('Login successful');
        console.log('Login successful');
        navigate('/mainblog');  
      } else {
        setMessage('Invalid email or password');
        console.log('Invalid email or password');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>Don't have an account? <Link to="/register" className="link-button">Register here</Link></p>
    </div>
  );
};

export default Login;

