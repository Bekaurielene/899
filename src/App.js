import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainBlog from './components/MainBlog';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
