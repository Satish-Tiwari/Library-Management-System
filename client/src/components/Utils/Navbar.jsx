import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Home</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/userlogin">User Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/adminlogin">Admin Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
