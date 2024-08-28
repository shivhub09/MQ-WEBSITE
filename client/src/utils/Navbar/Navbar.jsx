import React, { useState } from 'react';
import logo from './marcos-quay-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Marcos Quay Logo" />
      </div>

      <button className="hamburger" onClick={toggleNavbar}>
        &#9776;
      </button>

      <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
        <div className="list-items">
          <ul className="navbar-list">
            <li className="list-item">Home</li>
            <li className="list-item">About Us</li>
            <li className="list-item">Offerings</li>
            <li className="list-item">Gallery</li>
            <li className="list-item">Career</li>
            <li className="list-item">Contact</li>
          </ul>
        </div>

        <input type="button" value="ENROLL NOW" />
      </div>
    </div>
  );
};

export default Navbar;
