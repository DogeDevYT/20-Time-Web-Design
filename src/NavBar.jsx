// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/gorilla" className="navbar-link">
            Gorilla
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/tiger" className="navbar-link">
            Tiger
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/shark" className="navbar-link">
            Shark
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/lion" className="navbar-link">
            Lion
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dog" className="navbar-link">
            Dog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
