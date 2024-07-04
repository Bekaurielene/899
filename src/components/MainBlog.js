import React from 'react';
import { Link } from 'react-router-dom';
import './MainBlog.css';

const MainBlog = () => {
  return (
    <div className="main-container">
      <h1>Welcome to little prince community </h1>
      <nav>
        <Link to="/register" className="link-button">Register</Link>
        <Link to="/login" className="link-button">Login</Link>
      </nav>
    </div>
  );
};

export default MainBlog;
